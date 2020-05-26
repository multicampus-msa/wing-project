package wing.api.domain.userLiked;


import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import wing.api.domain.music.Music;
import wing.api.domain.user.User;

import javax.persistence.*;

@NoArgsConstructor
@Getter
@Entity
public class UserLikedMusic {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name="music_id")
    private Music music;

    @ManyToOne
    @JoinColumn(name="user_id")
    private User user;

    @Builder
    public UserLikedMusic(Music music, User user) {
        this.music = music;
        this.user = user;
    }

}
