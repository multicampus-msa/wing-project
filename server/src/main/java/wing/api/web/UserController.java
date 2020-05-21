package wing.api.web;


import io.swagger.annotations.Api;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import wing.api.service.UserService;

@Api(tags = {"User Controller"})
@RequestMapping("/api")
@RestController
@RequiredArgsConstructor
@CrossOrigin
public class UserController {

    private final UserService userService;


}
