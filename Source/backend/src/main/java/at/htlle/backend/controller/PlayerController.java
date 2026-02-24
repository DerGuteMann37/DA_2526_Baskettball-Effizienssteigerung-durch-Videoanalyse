package at.htlle.backend.controller;

import at.htlle.backend.dto.player.ApiResponse;
import at.htlle.backend.dto.player.LoginRequest;
import at.htlle.backend.dto.player.RegisterRequest;
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
    private final PlayerService playerService;

    @PostMapping("/register")
    public ResponseEntity<ApiResponse> register(@RequestBody RegisterRequest request) {
        try {
            Player player = playerService.registerPlayer(request.getFirstName(),request.getLastName(), request.getEmail(), request.getPassword());
            return ResponseEntity.ok(new ApiResponse(true, "Registrierung erfolgreich", player));
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(new ApiResponse(false, e.getMessage(), null));
        }
    }

    @PostMapping("/login")
    public ResponseEntity<ApiResponse> login(@RequestBody LoginRequest request) {
        Optional<Player> player = playerService.loginPlayer(request.getEmail(), request.getPassword());
        if (player.isPresent()) {
            return ResponseEntity.ok(new ApiResponse(true, "Login erfolgreich", player.get()));
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body(new ApiResponse(false, "Ungültige Anmeldedaten", null));
        }
    }



    @GetMapping("/{playerId}")
    public ResponseEntity<ApiResponse> getPlayer(@PathVariable Long playerId) {
        Optional<Player> player = playerService.getUserById(playerId);
        if (player.isPresent()) {
            return ResponseEntity.ok(new ApiResponse(true, "Benutzer gefunden", player.get()));
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
