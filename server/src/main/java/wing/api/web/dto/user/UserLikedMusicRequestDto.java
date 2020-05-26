package wing.api.web.dto.user;


import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class UserLikedMusicRequestDto {

    private String userId;
    private Long musicId;


}
