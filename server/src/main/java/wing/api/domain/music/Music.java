package wing.api.domain.music;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import wing.api.domain.album.Album;
import wing.api.domain.musicInfo.MusicInfo;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor
@Getter
@Entity
public class Music {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long musicId;

    private String musicName;
    private String musicGenre;
    private String fileUri;
    private int trackNumber;
    private String lyrics;
    private Long likeCnt;

    @ManyToOne(targetEntity = Album.class, fetch = FetchType.EAGER)
    @JoinColumn(name="album_id")
    private Album toAlbum;


    @OneToMany(mappedBy = "music", cascade = CascadeType.ALL)
    List<MusicInfo> infos = new ArrayList<>();


    @Builder
    public Music(String musicName, String musicGenre, String fileUri,
                 int trackNumber, String lyrics, Long likeCnt, Album toAlbum) {

        this.musicName = musicName;
        this.musicGenre = musicGenre;
        this.fileUri = fileUri;
        this.trackNumber = trackNumber;
        this.lyrics = lyrics;
        this.likeCnt = likeCnt;
        this.toAlbum = toAlbum;
    }

    public void update(String musicName, String musicGenre, String fileUri,
                       int trackNumber, String lyrics, Long likeCnt, Album toAlbum) {

        this.musicName = musicName;
        this.musicGenre = musicGenre;
        this.fileUri = fileUri;
        this.trackNumber = trackNumber;
        this.lyrics = lyrics;
        this.likeCnt = likeCnt;
        this.toAlbum = toAlbum;
    }
}
