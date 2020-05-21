package wing.api.web.dto.transactionData;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import wing.api.domain.artist.Artist;
import wing.api.domain.transactionData.TransactionData;


@NoArgsConstructor
@Getter
public class TransactionDataSaveRequestDto {

    private Long amount;
    private String datetime;
    private String uid;
    private Long artistId;
    //private String userId;

    @Builder
    public TransactionDataSaveRequestDto(Long artistId, Long amount, String datetime, String uid) {
        this.amount = amount;
        this.datetime = datetime;
        this.uid = uid;
        this.artistId = artistId;
    }


    // TODO
    // 파라미터에 User user 추가, 빌더에 user 추가하기
    public TransactionData toEntity(Artist artist) {
        return TransactionData.builder()
                .artist(artist)
                .amount(amount)
                .datetime(datetime)
                .uid(uid)
                .build();
    }

}
