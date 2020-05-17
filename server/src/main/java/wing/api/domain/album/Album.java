package wing.api.domain.album;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import wing.api.domain.music.Music;
import wing.api.domain.musicInfo.MusicInfo;

import javax.persistence.*;
import java.sql.Date;
import java.util.HashSet;
import java.util.Set;

@NoArgsConstructor
@Getter
@Entity
public class Album {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long albumId;

    private String albumName;
    private String albumGenre;
    private String company;
    private String distributor;
    private Date date;
    private String imageUri;
    private String description;


    @OneToMany(mappedBy = "album", cascade = CascadeType.ALL)
    Set<MusicInfo> infos = new HashSet<>();

    @OneToMany(mappedBy = "toAlbum", cascade = CascadeType.ALL)
    Set<Music> musicList = new HashSet<>();

    @Builder
    public Album(String albumName, String albumGenre, String company,
                 String distributor, Date date, String imageUri, String description) {

        this.albumName = albumName;
        this.albumGenre = albumGenre;
        this.company = company;
        this.distributor = distributor;
        this.date = date;
        this.imageUri = imageUri;
        this.description = description;
    }

    public void update(String albumName, String albumGenre, String company,
                       String distributor, Date date, String imageUri, String description) {

        this.albumName = albumName;
        this.albumGenre = albumGenre;
        this.company = company;
        this.distributor = distributor;
        this.date = date;
        this.imageUri = imageUri;
        this.description = description;
    }

}
