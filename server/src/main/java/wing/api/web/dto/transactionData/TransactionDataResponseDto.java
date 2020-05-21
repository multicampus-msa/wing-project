package wing.api.web.dto.transactionData;

import lombok.Getter;
import wing.api.domain.transactionData.TransactionData;


@Getter
public class TransactionDataResponseDto {

    private final String artistName;
    //private final String userName;
    private final Long amount;
    private final String datetime;

    public TransactionDataResponseDto(TransactionData transactionData) {
        this.artistName = transactionData.getArtist().getArtistName();
        //this.userName = transactionData.getUser().getName();
        this.amount = transactionData.getAmount();
        this.datetime = transactionData.getDatetime();
    }
}
