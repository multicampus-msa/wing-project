package wing.api.web.dto.user;


import lombok.Getter;
import wing.api.domain.user.User;

@Getter
public class UserResponseDto {
    // 클라이언트에게 응답
    private String id;
    private String name;

    public UserResponseDto(User entity){
        this.id = entity.getId();
        this.name = entity.getName();
    }
}
