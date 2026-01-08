package at.htlle.backend.controller;

import at.htlle.backend.dto.session.CreateSessionDTO;
import at.htlle.backend.dto.session.SessionResponseDTO;
import at.htlle.backend.service.TrainingSessionService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/sessions")
public class TrainingSessionController {

    private final TrainingSessionService service;

    public TrainingSessionController(TrainingSessionService service) {
        this.service = service;
    }

    // Session anlegen
    @PostMapping
    public SessionResponseDTO create(@RequestBody CreateSessionDTO dTO) {
        return service.create(dTO);
    }

    // Alle Sessions eines Players
    @GetMapping("/player/{playerId}")
    public List<SessionResponseDTO> getByPlayer(@PathVariable Long playerId) {
        return service.getByPlayer(playerId);
    }

    // Optional: alle Sessions
    @GetMapping
    public List<SessionResponseDTO> getAll() {
        return service.getAll();
    }
}
