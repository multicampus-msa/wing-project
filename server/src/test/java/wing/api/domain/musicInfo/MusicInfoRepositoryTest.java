package wing.api.domain.musicInfo;

import org.junit.jupiter.api.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.transaction.annotation.Transactional;
import wing.api.domain.album.Album;
import wing.api.domain.album.AlbumRepository;
import wing.api.domain.artist.Artist;
import wing.api.domain.artist.ArtistRepository;
import wing.api.domain.music.Music;
import wing.api.domain.music.MusicRepository;

import javax.persistence.EntityManager;
import java.sql.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import static org.junit.jupiter.api.Assertions.*;

@DirtiesContext(classMode = DirtiesContext.ClassMode.AFTER_EACH_TEST_METHOD)
@SpringBootTest
class MusicInfoRepositoryTest {

    @Autowired
    EntityManager entityManager;

    @Autowired
    MusicInfoRepository musicInfoRepository;

    @Autowired
    ArtistRepository artistRepository;

    @Autowired
    AlbumRepository albumRepository;

    @Autowired
    MusicRepository musicRepository;

    @BeforeEach
    public void makeSample() {

        Artist artist = Artist.builder()
                .artistName("에픽하이")
                .artistCompany("아워즈")
                .artistGenre("힙합")
                .debutDate(Date.valueOf("2003-10-23"))
                .imageUri("https://ww.namu.la/s/84c62bacc289f0abdeb4593524baa67f05f69249fd4d5e86b6fb2c91e8790d523df2df6d0101c335d85cef98f661a2d30b4fc0b9254d78f3b0a80db2fb02bcb0f81ed73435f6f4382d3db47b085dbd098704ac1d5be429246638f2f27ae7ee71")
                .description("에픽하이 설명")
                .realName("이선웅")
                .account("123123")
                .bank("신한은행")
                .build();


        Album album = Album.builder()
                .albumName("Map of the Human Soul")
                .albumGenre("힙합")
                .company("Stone Music Entertainment")
                .distributor("지니뮤직")
                .date(Date.valueOf("2003-10-23"))
                .description("에픽하이 1집")
                .imageUri("https://img.discogs.com/nCjk3Pxqzl51cxGyoUkRP8l8Izk=/fit-in/592x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-3037179-1312812154.jpeg.jpg")
                .build();


        Music music = Music.builder()
                .toAlbum(album)
                .fileUri("https://www.youtube.com/watch?v=tbiuMfj-AUA")
                .lyrics("인생이란 버드나무")
                .musicGenre("힙합")
                .musicName("풍파 (feat. 한상원)")
                .trackNumber(2)
                .build();

        MusicInfo entity = MusicInfo.builder().artist(artist).album(album).music(music).build();

        artistRepository.save(artist);
        albumRepository.save(album);
        musicRepository.save(music);
        musicInfoRepository.save(entity);

        artist.getInfos().add(entity);
        album.getInfos().add(entity);
        music.getInfos().add(entity);
    }


    @AfterEach
    public void clearSample() {

        artistRepository.delete(artistRepository.findByArtistNameContaining("에픽하이").get(0));
        albumRepository.delete(albumRepository.findByAlbumNameContaining("Map").get(0));
        // 앨범을 지우면 수록곡도 자동으로 삭제된다.
        // @OneToMany(mappedBy = "toAlbum", cascade = CascadeType.ALL) 때문에.
    }


    @Test
    public void 통합정보_가져오기() {

        List<MusicInfo> list = musicInfoRepository.findAll();
        assertEquals(list.size(), 4);

    }

    @Transactional
    @Test
    public void 앨범참여_아티스트_목록_가져오기() {

        Album album = albumRepository.findByAlbumNameContaining("Map").get(0);

        Set<MusicInfo> list = album.getInfos();
        Set<Artist> artists = new HashSet<>();

        for (MusicInfo info : list)
            artists.add(info.getArtist());

        Artist artist = artistRepository.findByArtistNameContaining("에픽하이").get(0);
        assertTrue(artists.contains(artist));

    }

}