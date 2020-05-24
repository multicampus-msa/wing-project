package wing.api.domain.concert;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import wing.api.domain.artist.Artist;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.HashSet;
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
    private String tickekUri;
    private String place;
    private String imageUri;
    private String description;

    @OneToMany(mappedBy = "artist", cascade = CascadeType.ALL)
    Set<Artist> artistsList = new HashSet<>();

    @Builder
    public Concert(String concertName, LocalDateTime dateStart, LocalDateTime dateEnd,
                   String tickekUri, String place, String imageUri, String description) {
        this.concertName = concertName;
        this.dateStart = dateStart;
        this.dateEnd = dateEnd;
        this.tickekUri = tickekUri;
        this.place = place;
        this.imageUri = imageUri;
        this.description = description;
    }

    public void update(String concertName, LocalDateTime dateStart, LocalDateTime dateEnd,
                   String tickekUri, String place, String imageUri, String description) {
        this.concertName = concertName;
        this.dateStart = dateStart;
        this.dateEnd = dateEnd;
        this.tickekUri = tickekUri;
        this.place = place;
        this.imageUri = imageUri;
        this.description = description;
    }
}
