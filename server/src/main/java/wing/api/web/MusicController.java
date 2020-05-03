package wing.api.web;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;
import wing.api.service.MusicService;
import wing.api.web.dto.music.MusicResponseDto;
import wing.api.web.dto.music.MusicSaveRequestDto;
import wing.api.web.dto.music.MusicUpdateRequestDto;

import java.util.List;


@Api(tags = {"Music Controller"})
@RestController
@AllArgsConstructor
@CrossOrigin
public class MusicController {

    private final MusicService musicService;

    @ApiOperation(value = "음악 조회", notes = "기본 키 (music_id)로 조회")
    @GetMapping("/api/music/{id}")
    private MusicResponseDto findById(@PathVariable("id") Long id) {
        return musicService.findById(id);
    }


    @ApiOperation(value = "음악 검색", notes = "이름으로 검색 후 JSON 리스트로 반환. name 파라미터 필요.")
    @GetMapping("/api/music")
    private List<MusicResponseDto> findByName(@RequestParam("name") String name) {
        return musicService.findByNameContaining(name);
    }


    @ApiOperation(value = "음악 등록", notes = "음악 등록(artist_id, album_id 필요)")
    @PostMapping("/api/music")
    private Long save(@RequestParam Long artistId, @RequestParam Long albumId,
                      @RequestBody MusicSaveRequestDto requestDto) {

        return musicService.save(artistId, albumId, requestDto);
    }


    @ApiOperation(value = "음악 수정", notes = "음악 수정")
    @PutMapping("/api/music/{id}")
    private Long update(@PathVariable Long id, @RequestBody MusicUpdateRequestDto requestDto) {
        return musicService.update(id, requestDto);
    }


    @ApiOperation(value = "음악 삭제", notes = "음악 삭제")
    @DeleteMapping("api/music/{id}")
    private Long delete(@PathVariable Long id) { return musicService.delete(id); }

}
