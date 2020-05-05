package wing.api.web.dto.music;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import wing.api.domain.album.Album;
import wing.api.domain.music.Music;

@NoArgsConstructor
@Getter
public class MusicSaveRequestDto {

    private String musicName;
    private String musicGenre;
    private String fileUri;
    private int trackNumber;
    private String lyrics;

    @Builder
    public MusicSaveRequestDto(String musicName, String musicGenre, String fileUri,
                               int trackNumber, String lyrics) {

        this.musicName = musicName;
        this.musicGenre = musicGenre;
        this.fileUri = fileUri;
        this.trackNumber = trackNumber;
        this.lyrics = lyrics;
    }


    public Music toEntity(Album toAlbum) {
        return Music.builder()
                .toAlbum(toAlbum)
                .trackNumber(trackNumber)
                .musicName(musicName)
                .musicGenre(musicGenre)
                .lyrics(lyrics)
                .fileUri(fileUri)
                .build();
    }


}
