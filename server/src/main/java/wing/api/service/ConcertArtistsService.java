package wing.api.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import wing.api.domain.artist.Artist;
import wing.api.domain.concert.Concert;
import wing.api.domain.concertArtists.ConcertArtists;
import wing.api.domain.concertArtists.ConcertArtistsRepository;

@RequiredArgsConstructor
@Service
public class ConcertArtistsService {

    private final ConcertArtistsRepository concertArtistsRepository;

    public void save(Concert concert, Artist artist) {
        ConcertArtists concertArtists = concertArtistsRepository.save(ConcertArtists.builder()
                .concert(concert)
                .artist(artist)
                .build());

        concert.getArtistsList().add(concertArtists);
        artist.getConcertList().add(concertArtists);
    }

}
