package wing.api.web.dto.user;


import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import wing.api.domain.user.Role;
import wing.api.domain.user.User;

import javax.persistence.*;

@Getter
@NoArgsConstructor
public class UserRequestDto {
    private String userId;
    private String name;
    private String email;
    private String imageUrl;
    private Role role;
    private String tokenId;

    @Builder
    public UserRequestDto(String userId, String name, String email, String imageUrl, Role role, String tokenId) {
        this.userId = userId;
        this.name = name;
        this.email = email;
        this.imageUrl = imageUrl;
        this.role = role;
        this.tokenId = tokenId;
    }

    public UserRequestDto toEntity() {
        return UserRequestDto.builder().userId(userId).name(name).email(email).imageUrl(imageUrl).tokenId(tokenId).build();
    }

}
