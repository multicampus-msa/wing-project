package wing.api.web.dto.music;

import lombok.Getter;
import wing.api.domain.music.Music;
import wing.api.domain.musicInfo.MusicInfo;

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
    private final List<Long> artistIdList;

    public MusicResponseDto(Music entity) {
        this.musicName = entity.getMusicName();
        this.musicGenre = entity.getMusicGenre();
        this.fileUri = entity.getFileUri();
        this.trackNumber = entity.getTrackNumber();
        this.lyrics = entity.getLyrics();
        this.likeCnt = entity.getLikeCnt();
        this.albumId = entity.getToAlbum().getAlbumId();

        this.artistIdList = new ArrayList<>();
        for(MusicInfo info : entity.getInfos())
            artistIdList.add(info.getArtist().getArtistId());

    }

}
