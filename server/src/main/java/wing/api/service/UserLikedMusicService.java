package wing.api.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import wing.api.domain.album.Album;
import wing.api.domain.artist.Artist;
import wing.api.domain.music.Music;
import wing.api.domain.musicInfo.MusicInfo;
import wing.api.domain.user.User;
import wing.api.domain.userLiked.UserLikedMusic;
import wing.api.domain.userLiked.UserLikedMusicRepository;

@RequiredArgsConstructor
@Service
public class UserLikedMusicService {

    private final UserLikedMusicRepository userLikedMusicRepository;

    @Transactional
    public void save(User user, Music music) {

        UserLikedMusic likedMusic = userLikedMusicRepository.save(UserLikedMusic.builder()
                .user(user)
                .music(music)
                .build()
        );

        user.getLikedMusicSet().add(likedMusic);
        music.getLikedMusicSet().add(likedMusic);

    }

}
