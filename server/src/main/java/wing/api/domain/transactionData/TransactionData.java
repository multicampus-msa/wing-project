package wing.api.domain.transactionData;


import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.ColumnDefault;
import wing.api.domain.artist.Artist;

import javax.persistence.*;

@NoArgsConstructor
@Getter
@Entity
public class TransactionData {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long transactionId;

//    @ManyToOne(targetEntity = User.class)
//    @JoinColumn(name="user_id")
//    private User user;

    @ManyToOne(targetEntity = Artist.class)
    @JoinColumn(name="artist_id")
    private Artist artist;

    private Long amount;
    private String datetime;
    private String uid;

    @ColumnDefault("default")
    private Long userId;


    // TODO
    // User user 추가하기
    @Builder
    public TransactionData(Artist artist, String uid, Long amount, String datetime) {

        this.artist = artist;
        this.uid = uid;
        this.amount = amount;
        this.datetime = datetime;

    }


}
