package wing.api.domain.artist;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;
import wing.api.domain.musicInfo.MusicInfo;
import wing.api.domain.musicInfo.MusicInfoRepository;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class ArtistRepositoryTest {


    @Autowired
    ArtistRepository artistRepository;

    @Autowired
    MusicInfoRepository musicInfoRepository;

    @Test
    void findByArtistNameContainingTest() {

        List<Artist> artists = artistRepository.findByArtistNameContaining("태연");
        assertEquals(artists.size(), 1);
    }

}