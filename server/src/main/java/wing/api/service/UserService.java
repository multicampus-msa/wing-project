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
    
    // 유저 정보 저장
    @Transactional
    public String save(String id, UserRequestDto requestDto){
        return userRepository.save(requestDto.toEntity().getId());
    }

}
