package wing.api.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import wing.api.domain.album.Album;
import wing.api.domain.album.AlbumRepository;
import wing.api.domain.artist.Artist;
import wing.api.domain.artist.ArtistRepository;
import wing.api.domain.music.Music;
import wing.api.domain.music.MusicRepository;
import wing.api.domain.musicInfo.MusicInfo;
import wing.api.domain.musicInfo.MusicInfoRepository;
import wing.api.web.dto.album.AlbumResponseDto;
import wing.api.web.dto.album.AlbumSaveRequestDto;
import wing.api.web.dto.album.AlbumUpdateRequestDto;
import wing.api.web.dto.music.MusicResponseDto;
import wing.api.web.dto.music.MusicSaveRequestDto;
import wing.api.web.dto.music.MusicUpdateRequestDto;

import java.util.ArrayList;
import java.util.List;

@SuppressWarnings("ALL")
@RequiredArgsConstructor
@Service
public class MusicService {

    private final MusicInfoService musicInfoService;
    private final MusicRepository musicRepository;
    private final AlbumRepository albumRepository;
    private final ArtistRepository artistRepository;
    private final MusicInfoRepository musicInfoRepository;

    @Transactional
    public Long save(Long artistId, Long albumId, MusicSaveRequestDto requestDto) {
        Artist artist = artistRepository.findById(artistId).orElseThrow(
                () -> new IllegalArgumentException("해당 아티스트 없음 id=" + artistId)
        );

        Album toAlbum = albumRepository.findById(albumId).orElseThrow(
                () -> new IllegalArgumentException("해당 앨범 없음 id=" + albumId)
        );

        Music music = musicRepository.save(requestDto.toEntity(toAlbum));


        musicInfoService.save(artist, toAlbum, music);

        return music.getMusicId();
    }

    @Transactional
    public Long update(Long id, MusicUpdateRequestDto requestDto) {
        Music music = musicRepository.findById(id).orElseThrow(
                () -> new IllegalArgumentException("음악 정보 없음 id=" + id));

        music.update(requestDto.getMusicName(), requestDto.getMusicGenre(), requestDto.getFileUri()
                , requestDto.getTrackNumber(), requestDto.getLyrics());

        return id;
    }

    @Transactional
    public Long delete(Long id) {
        Music music = musicRepository.findById(id).orElseThrow(
                () -> new IllegalArgumentException("음악 정보 없음 id=" + id));

        musicRepository.delete(music);

        return id;
    }

    public MusicResponseDto findById(Long id) {
        Music music = musicRepository.findById(id).orElseThrow(
                () -> new IllegalArgumentException("음악 정보 없음 id=" + id));

        return new MusicResponseDto(music);
    }

    public List<MusicResponseDto> findByNameContaining(String name) {
        List<Music> musicList = musicRepository.findByMusicNameContaining(name);
        List<MusicResponseDto> responseDtos = new ArrayList<>();

        for (Music music : musicList)
            responseDtos.add(new MusicResponseDto(music));

        return responseDtos;
    }
}
