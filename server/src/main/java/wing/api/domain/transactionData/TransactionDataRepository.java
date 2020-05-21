package wing.api.domain.transactionData;

import org.springframework.data.jpa.repository.JpaRepository;
import wing.api.domain.artist.Artist;

import java.util.Set;

public interface TransactionDataRepository extends JpaRepository<TransactionData, Long> {
    Set<TransactionData> findByArtist(Artist artist);
    //Set<TransactionData> findByUser(User user);
}
