package wing.api.domain.userLiked;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserLikedMusicRepository extends JpaRepository<UserLikedMusic, Long> {

}
