package wing.api.domain.concertArtists;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ConcertArtistsRepository extends JpaRepository<ConcertArtists, Long> {
    List<ConcertArtists> findByConcert_ConcertId(Long concertId);

}
