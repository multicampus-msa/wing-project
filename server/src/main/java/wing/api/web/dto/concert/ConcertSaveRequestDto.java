package wing.api.web.dto.concert;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import wing.api.domain.concert.Concert;

import java.time.LocalDateTime;

@NoArgsConstructor
@Getter
public class ConcertSaveRequestDto {

    private String concertName;
    private LocalDateTime dateStart;
    private LocalDateTime dateEnd;
    private String ticketUri;
    private String place;
    private String imageUri;
    private String description;

    @Builder
    public ConcertSaveRequestDto(String concertName, LocalDateTime dateStart, LocalDateTime dateEnd,
                   String ticketUri, String place, String imageUri, String description) {
        this.concertName = concertName;
        this.dateStart = dateStart;
        this.dateEnd = dateEnd;
        this.ticketUri = ticketUri;
        this.place = place;
        this.imageUri = imageUri;
        this.description = description;
    }

    public Concert toEntity() {
        return Concert.builder()
                .concertName(concertName)
                .dateStart(dateStart)
                .dateEnd(dateEnd)
                .ticketUri(ticketUri)
                .place(place)
                .imageUri(imageUri)
                .description(description)
                .build();
    }
}
