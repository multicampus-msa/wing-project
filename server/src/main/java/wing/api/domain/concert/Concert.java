package wing.api.domain.concert;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import wing.api.domain.artist.Artist;
import wing.api.domain.concertArtists.ConcertArtists;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@NoArgsConstructor
@Getter
@Entity
public class Concert {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long concertId;

    private String concertName;
    private LocalDateTime dateStart;
    private LocalDateTime dateEnd;
    private String ticketUri;
    private String place;
    private String imageUri;
    private String description;

    @OneToMany(mappedBy = "concert", cascade = CascadeType.ALL)
    List<ConcertArtists> artistsList = new ArrayList<>();

    @Builder
    public Concert(String concertName, LocalDateTime dateStart, LocalDateTime dateEnd,
                   String ticketUri, String place, String imageUri, String description) {
        this.concertName = concertName;
        this.dateStart = dateStart;
        this.dateEnd = dateEnd;
        this.ticketUri = ticketUri;
        this.place = place;
        this.imageUri = imageUri;
        this.description = description;
    }

    public void update(String concertName, LocalDateTime dateStart, LocalDateTime dateEnd,
                   String ticketUri, String place, String imageUri, String description) {
        this.concertName = concertName;
        this.dateStart = dateStart;
        this.dateEnd = dateEnd;
        this.ticketUri = ticketUri;
        this.place = place;
        this.imageUri = imageUri;
        this.description = description;
    }
}
