package wing.api.web.dto.music;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.Getter;
import wing.api.domain.album.Album;
import wing.api.domain.artist.Artist;
import wing.api.domain.music.Music;
import wing.api.domain.musicInfo.MusicInfo;
import wing.api.web.dto.album.AlbumResponseDto;
import wing.api.web.dto.artist.ArtistResponseDto;

import java.sql.Date;
import java.util.ArrayList;
import java.util.List;

@Getter
public class MusicResponseDto {

    private final String musicName;
    private final String musicGenre;
    private final String fileUri;
    private final int trackNumber;
    private final String lyrics;
    private final Long likeCnt;
    private final Long albumId;
    private final List<ArtistResponseDto> singers;

    public MusicResponseDto(Music entity) {
        this.musicName = entity.getMusicName();
        this.musicGenre = entity.getMusicGenre();
        this.fileUri = entity.getFileUri();
        this.trackNumber = entity.getTrackNumber();
        this.lyrics = entity.getLyrics();
        this.likeCnt = entity.getLikeCnt();
        this.albumId = entity.getToAlbum().getAlbumId();

        this.singers = new ArrayList<>();
        for(MusicInfo info : entity.getInfos())
            singers.add(new ArtistResponseDto(info.getArtist()));

    }

}
