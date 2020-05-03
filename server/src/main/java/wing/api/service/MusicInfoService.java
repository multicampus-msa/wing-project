package wing.api.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import wing.api.domain.album.Album;
import wing.api.domain.artist.Artist;
import wing.api.domain.music.Music;
import wing.api.domain.musicInfo.MusicInfo;
import wing.api.domain.musicInfo.MusicInfoRepository;

@RequiredArgsConstructor
@Service
public class MusicInfoService {

    private final MusicInfoRepository musicInfoRepository;

    @Transactional
    public void save(Artist artist, Album album, Music music) {

        MusicInfo musicInfo = musicInfoRepository.save(MusicInfo.builder()
                .artist(artist)
                .album(album)
                .music(music)
                .build()
        );

        artist.getInfos().add(musicInfo);
        album.getInfos().add(musicInfo);
        music.getInfos().add(musicInfo);

        album.getMusicList().add(music);
    }
}
