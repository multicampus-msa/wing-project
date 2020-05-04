package wing.api.web.dto.album;

import lombok.Getter;
import wing.api.domain.album.Album;
import wing.api.domain.music.Music;

import java.sql.Date;
import java.util.ArrayList;
import java.util.List;

@Getter
public class AlbumResponseDto {

    private final Long albumId;
    private final String albumName;
    private final String albumGenre;
    private final String company;
    private final String distributor;
    private final Date date;
    private final String imageUri;
    private final String description;
    private final List<Long> musicIdList;

    public AlbumResponseDto(Album entity) {
        this.albumId = entity.getAlbumId();
        this.albumName = entity.getAlbumName();
        this.albumGenre = entity.getAlbumGenre();
        this.company = entity.getCompany();
        this.distributor = entity.getDistributor();
        this.date = entity.getDate();
        this.imageUri = entity.getImageUri();
        this.description = entity.getDescription();

        this.musicIdList = new ArrayList<>();
        for(Music music : entity.getMusicList())
            musicIdList.add(music.getMusicId());

    }
}
