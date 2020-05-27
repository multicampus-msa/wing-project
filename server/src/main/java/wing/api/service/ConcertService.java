package wing.api.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import wing.api.domain.artist.Artist;
import wing.api.domain.artist.ArtistRepository;
import wing.api.domain.concert.Concert;
import wing.api.domain.concert.ConcertRepository;
import wing.api.domain.concertArtists.ConcertArtists;
import wing.api.web.dto.concert.ConcertResponseDto;
import wing.api.web.dto.concert.ConcertSaveRequestDto;
import wing.api.web.dto.concert.ConcertUpdateRequestDto;

import java.util.ArrayList;
import java.util.List;

@RequiredArgsConstructor
@Service
public class ConcertService {

    private final ArtistRepository artistRepository;
    private final ConcertRepository concertRepository;
    private final ConcertArtistsService concertArtistsService;

    @Transactional
    public Long save(ConcertSaveRequestDto requestDto) {

        Concert concert = requestDto.toEntity();

        for (Long artistId : requestDto.getArtistIdList()) {
            Artist artist = artistRepository.findById(artistId)
                    .orElseThrow(() -> new IllegalArgumentException("해당 아티스트 없음"));


            System.out.println("전이다");
            System.out.println(artist.getConcertList());
            System.out.println(concert.getArtistsList());
            concertArtistsService.save(concert, artist);
            concertRepository.save(concert);
            artistRepository.save(artist);
            System.out.println("저장했다");
            System.out.println(concert.getArtistsList());
            System.out.println(artist.getConcertList());
        }

        return concert.getConcertId();
    }

    @Transactional
    public Long update(Long id, ConcertUpdateRequestDto requestDto) {
        Concert concert = concertRepository.findById(id).orElseThrow(
                () -> new IllegalArgumentException("앨범 정보 없음 id=" + id));

        concert.update(requestDto.getConcertName(),requestDto.getDateStart(), requestDto.getDateEnd(),
                requestDto.getTicketUri(), requestDto.getPlace(), requestDto.getImageUri(),
                requestDto.getDescription());

        return id;
    }

    @Transactional
    public Long delete(Long id) {
        Concert concert = concertRepository.findById(id).orElseThrow(
                () -> new IllegalArgumentException("앨범 정보 없음 id=" + id));

        concertRepository.delete(concert);

        return id;
    }

    public ConcertResponseDto findById(Long id) {
        Concert concert = concertRepository.findById(id).orElseThrow(
                () -> new IllegalArgumentException("앨범 정보 없음 id=" + id));

        return new ConcertResponseDto(concert);
    }

    public List<ConcertResponseDto> findByNameContaining(String name) {
        List<Concert> concertList = concertRepository.findByConcertNameContaining(name);
        List<ConcertResponseDto> responseDtoList = new ArrayList<>();

        for (Concert concert : concertList)
            responseDtoList.add(new ConcertResponseDto(concert));

        return responseDtoList;
    }
}
