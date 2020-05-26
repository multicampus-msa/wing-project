package wing.api.domain.userLiked;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import wing.api.domain.music.Music;
import wing.api.domain.user.User;

import java.util.Set;

@Repository
public interface UserLikedMusicRepository extends JpaRepository<UserLikedMusic, Long> {
    Set<UserLikedMusic> findByUser_UserId(String userId);
    UserLikedMusic findByUserAndMusic(User user, Music music);
}
