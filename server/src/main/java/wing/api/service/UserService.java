package wing.api.service;


import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import wing.api.domain.user.UserRepository;
import wing.api.web.dto.user.UserRequestDto;

@RequiredArgsConstructor
@Service
public class UserService {

    private final UserRepository userRepository;

    @Transactional
    public String save(UserRequestDto userRequestDto) {
        userRepository.save(userRequestDto.toEntity());
        return userRequestDto.getName();
    }

}
