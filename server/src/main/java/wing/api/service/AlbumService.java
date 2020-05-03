package wing.api.service;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import wing.api.domain.album.Album;
import wing.api.domain.album.AlbumRepository;
import wing.api.web.dto.album.AlbumResponseDto;
import wing.api.web.dto.album.AlbumSaveRequestDto;
import wing.api.web.dto.album.AlbumUpdateRequestDto;

import java.util.ArrayList;
import java.util.List;

@SuppressWarnings("ALL")
@RequiredArgsConstructor
@Service
public class AlbumService {

    private final AlbumRepository albumRepository;

    @Transactional
    public Long save(AlbumSaveRequestDto requestDto) {
        return albumRepository.save(requestDto.toEntity()).getAlbumId();
    }

    @Transactional
    public Long update(Long id, AlbumUpdateRequestDto requestDto) {
        Album album = albumRepository.findById(id).orElseThrow(
                () -> new IllegalArgumentException("앨범 정보 없음 id=" + id));

        album.update(requestDto.getAlbumName(),requestDto.getAlbumGenre(), requestDto.getCompany(),
                requestDto.getDistributor(), requestDto.getDate(), requestDto.getImageUri(),
                requestDto.getDescription());

        return id;
    }

    @Transactional
    public Long delete(Long id) {
        Album album = albumRepository.findById(id).orElseThrow(
                () -> new IllegalArgumentException("앨범 정보 없음 id=" + id));

        albumRepository.delete(album);

        return id;
    }

    public AlbumResponseDto findById(Long id) {
        Album album = albumRepository.findById(id).orElseThrow(
                () -> new IllegalArgumentException("앨범 정보 없음 id=" + id));

        return new AlbumResponseDto(album);
    }

    public List<AlbumResponseDto> findByNameContaining(String name) {
        List<Album> albums = albumRepository.findByAlbumNameContaining(name);
        List<AlbumResponseDto> responseDtos = new ArrayList<>();

        for (Album album : albums)
            responseDtos.add(new AlbumResponseDto(album));

        return responseDtos;
    }
}
