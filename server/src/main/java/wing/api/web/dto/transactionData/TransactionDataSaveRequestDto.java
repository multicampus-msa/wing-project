package wing.api.web.dto.transactionData;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import wing.api.domain.artist.Artist;
import wing.api.domain.transactionData.TransactionData;
import wing.api.domain.user.User;


@NoArgsConstructor
@Getter
public class TransactionDataSaveRequestDto {

    private Long amount;
    private String datetime;
    private String uid;
    private Long artistId;
    private String userId;

    @Builder
    public TransactionDataSaveRequestDto(String userId, Long artistId, Long amount, String datetime, String uid) {
        this.amount = amount;
        this.datetime = datetime;
        this.uid = uid;
        this.artistId = artistId;
        this.userId = userId;
    }


    public TransactionData toEntity(User user, Artist artist) {
        return TransactionData.builder()
                .user(user)
                .artist(artist)
                .amount(amount)
                .datetime(datetime)
                .uid(uid)
                .build();
    }

}
