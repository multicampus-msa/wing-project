package wing.api.web.dto.user;

import lombok.Getter;
import wing.api.domain.artist.Artist;
import wing.api.domain.music.Music;
import wing.api.domain.musicInfo.MusicInfo;
import wing.api.domain.user.User;
import wing.api.domain.userLiked.UserLikedMusic;

import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;

@Getter
public class UserLikedMusicResponseDto {

    private final Set<Map<String, String>> musicSet;
    private final Map<Long, Long> musicIdSet;;

    public UserLikedMusicResponseDto(User entity) {

        this.musicSet = new HashSet<>();
        this.musicIdSet = new HashMap<>();

        for(UserLikedMusic likedMusic : entity.getLikedMusicSet()) {
            Map<String, String> musicObj = new HashMap<>();
            musicObj.put("musicId", likedMusic.getMusic().getMusicId().toString());
            musicObj.put("musicName", likedMusic.getMusic().getMusicName());

            for (MusicInfo info : likedMusic.getMusic().getInfos()) {
                musicObj.put("artistId", info.getArtist().getArtistId().toString());
                musicObj.put("artistName", info.getArtist().getArtistName());
            }

            musicIdSet.put(likedMusic.getMusic().getMusicId(), 1L);
            musicSet.add(musicObj);
        }
    }
}
