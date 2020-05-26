package wing.api.service;


import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import wing.api.domain.album.Album;
import wing.api.domain.music.Music;
import wing.api.domain.music.MusicRepository;
import wing.api.domain.user.User;
import wing.api.domain.user.UserRepository;
import wing.api.domain.userLiked.UserLikedMusic;
import wing.api.web.dto.album.AlbumResponseDto;
import wing.api.web.dto.user.UserLikedMusicSaveRequestDto;
import wing.api.web.dto.user.UserLikedMusicResponseDto;
import wing.api.web.dto.user.UserRequestDto;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

@RequiredArgsConstructor
@Service
public class UserService {

    private final UserRepository userRepository;
    private final MusicRepository musicRepository;
    private final UserLikedMusicService userLikedMusicService;

    @Transactional
    public String save(UserRequestDto userRequestDto) {
        userRepository.save(userRequestDto.toEntity());
        return userRequestDto.getName();
    }

    @Transactional
    public Long likedMusic(UserLikedMusicSaveRequestDto requestDto) {

        // UserLikedMusicRepo 에 저장하기
        Music music = musicRepository.findById(requestDto.getMusicId())
                .orElseThrow(() -> new IllegalArgumentException("해당 음악 없음"));


        User user = userRepository.findById(requestDto.getUserId())
                .orElseThrow(() -> new IllegalArgumentException("해당 유저 없음"));


        userLikedMusicService.save(user, music);

        return music.getMusicId();
    }

    public UserLikedMusicResponseDto likedMusicSet(String userId) {

        User user = userRepository.findById(userId).orElseThrow(
                () -> new IllegalArgumentException("해당 유저 없음")
        );

        return new UserLikedMusicResponseDto(user);

    }
}
