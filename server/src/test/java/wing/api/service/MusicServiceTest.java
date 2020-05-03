package wing.api.service;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;
import wing.api.domain.album.Album;
import wing.api.domain.album.AlbumRepository;
import wing.api.domain.artist.Artist;
import wing.api.domain.artist.ArtistRepository;
import wing.api.domain.music.Music;
import wing.api.domain.music.MusicRepository;
import wing.api.domain.musicInfo.MusicInfo;
import wing.api.domain.musicInfo.MusicInfoRepository;
import wing.api.web.dto.music.MusicSaveRequestDto;

import javax.persistence.EntityManager;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class MusicServiceTest {

    @Autowired
    MusicRepository musicRepository;

    @Autowired
    AlbumRepository albumRepository;

    @Autowired
    ArtistRepository artistRepository;

    @Autowired
    MusicInfoRepository musicInfoRepository;

    @Transactional
    @Test
    void save() {


    }
}