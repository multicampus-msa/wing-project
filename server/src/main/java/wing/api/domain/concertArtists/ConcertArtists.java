package wing.api.domain.concertArtists;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import wing.api.domain.artist.Artist;
import wing.api.domain.concert.Concert;

import javax.persistence.*;

@NoArgsConstructor
@Entity
@Getter
public class ConcertArtists {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "concert_id")
    private Concert concert;

    @ManyToOne
    @JoinColumn(name = "artist_id")
    private Artist artist;

    @Builder
    public ConcertArtists(Concert concert, Artist artist) {
        this.concert = concert;
        this.artist = artist;
    }
}
