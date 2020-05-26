package wing.api.domain.user;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import wing.api.domain.music.Music;
import wing.api.domain.userLiked.UserLikedMusic;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Getter
@NoArgsConstructor
@Entity
public class User {

    @Id
    @Column
    private String userId;

    @Column
    private String name;

    @Column
    private String email;

    @Column
    private String imageUri;

    @Column
    //@Enumerated(EnumType.STRING)
    private String role;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    private Set<UserLikedMusic> likedMusicSet;


    @Builder
    private User(String userId, String name, String email, String imageUri, String role){
        this.userId=userId;
        this.name = name;
        this.email = email;
        this.imageUri = imageUri;
        this.role =role;
    }


    public void likedMusicUpdate(Set<UserLikedMusic> likedMusicSet) {
        this.likedMusicSet = new HashSet<>(likedMusicSet);
    }

}
