package at.htlle.backend.controller;

import at.htlle.backend.dto.player.CreatePlayerDTO;
import at.htlle.backend.dto.player.PlayerResponseDTO;
import at.htlle.backend.service.PlayerService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/players")
public class PlayerController {

    private final PlayerService service;

    public PlayerController(PlayerService service) {
        this.service = service;
    }

    @GetMapping
    public List<PlayerResponseDTO> getAllPlayers() {
        return service.getAll();
    }

    @PostMapping
    public PlayerResponseDTO createPlayer(@RequestBody CreatePlayerDTO dto) {
        return service.create(dto);
    }
}
