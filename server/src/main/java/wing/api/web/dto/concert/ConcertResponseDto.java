package wing.api.web.dto.concert;

import lombok.Builder;
import lombok.Getter;
import wing.api.domain.album.Album;
import wing.api.domain.artist.Artist;
import wing.api.domain.concert.Concert;
import wing.api.domain.music.Music;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;

@Getter
public class ConcertResponseDto {

    private final Long concertId;
    private final String concertName;
    private final LocalDateTime dateStart;
    private final LocalDateTime dateEnd;
    private final String tickekUri;
    private final String place;
    private final String imageUri;
    private final String description;
//    private final Set<Map<String, String>> artistList;

    public ConcertResponseDto(Concert entity) {
        this.concertId = entity.getConcertId();
        this.concertName = entity.getConcertName();
        this.dateStart = entity.getDateStart();
        this.dateEnd = entity.getDateEnd();
        this.tickekUri = entity.getTickekUri();
        this.place = entity.getPlace();
        this.imageUri = entity.getImageUri();
        this.description = entity.getDescription();

//        this.artistList = new HashSet<>();
//        for(Artist artist : entity.getArtistsList()) {
//            Map<String, String> artistObj = new HashMap<>();
//            artistObj.put("artistId", artist.getArtistId().toString());
//            artistObj.put("artistName", artist.getArtistName());
//            artistList.add(artistObj);
//        }
    }


}
