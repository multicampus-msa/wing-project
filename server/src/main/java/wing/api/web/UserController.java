package wing.api.web;


import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;
import wing.api.service.UserService;
import wing.api.web.dto.user.UserLikedMusicRequestDto;
import wing.api.web.dto.user.UserLikedMusicResponseDto;
import wing.api.web.dto.user.UserRequestDto;

@RestController
@Api(tags = {"User Controller"})
@RequestMapping(value = "/api/user")
@CrossOrigin(origins = "http://localhost:3000")
@AllArgsConstructor
public class UserController {
    private final UserService userService;

    // 유저 저장
    @ApiOperation(value = "유저 정보 등록", notes = "이메일로 (email)로 조회")
    @PostMapping("/save")
    public String saveUser(@RequestBody UserRequestDto userRequestDto){
        System.out.println(userRequestDto.toString());
        return userService.save(userRequestDto);
    }

    @ApiOperation(value = "유저 음악 좋아요")
    @PostMapping("/liked")
    public Long userLikedMusicSave(@RequestBody UserLikedMusicRequestDto requestDto){
        return userService.likedMusic(requestDto);
    }

    @ApiOperation(value = "유저 음악 좋아요 취소")
    @DeleteMapping("/liked")
    public Long userLikedMusicDelete(@RequestBody UserLikedMusicRequestDto requestDto){
        return userService.likedMusicDelete(requestDto);
    }

    @ApiOperation(value = "유저 음악 좋아요 목록")
    @GetMapping("/liked/{id}")
    public UserLikedMusicResponseDto userLikedMusicSave(@PathVariable("id") String userId){
        return userService.likedMusicSet(userId);
    }
}
