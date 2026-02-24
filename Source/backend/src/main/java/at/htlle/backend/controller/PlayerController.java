package at.htlle.backend.controller;

import at.htlle.backend.dto.player.ApiResponse;
import at.htlle.backend.model.Player;
import at.htlle.backend.service.PlayerService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import lombok.RequiredArgsConstructor;

import java.util.Optional;

@RestController
@RequestMapping("/api/users")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class PlayerController {
    private final PlayerService userService;

    @PostMapping("/register")
    public ResponseEntity<ApiResponse> register(@RequestBody RegisterRequest request) {
        try {
            Player player = PlayerService.registerPlayer(request.getName(), request.getEmail(), request.getPassword());
            return ResponseEntity.ok(new ApiResponse(true, "Registrierung erfolgreich", player));
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(new ApiResponse(false, e.getMessage(), null));
        }
    }

    @PostMapping("/login")
    public ResponseEntity<ApiResponse> login(@RequestBody LoginRequest request) {
        Optional<Player> player = PlayerService.loginPlayer(request.getEmail(), request.getPassword());
        if (player.isPresent()) {
            return ResponseEntity.ok(new ApiResponse(true, "Login erfolgreich", player.get()));
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body(new ApiResponse(false, "Ungültige Anmeldedaten", null));
        }
    }



    @GetMapping("/{playerId}")
    public ResponseEntity<ApiResponse> getUser(@PathVariable Long userId) {
        Optional<Player> user = playerService.getPlayerById(playerId);
        if (user.isPresent()) {
            return ResponseEntity.ok(new ApiResponse(true, "Benutzer gefunden", user.get()));
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
