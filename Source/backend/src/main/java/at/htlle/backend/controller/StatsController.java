package at.htlle.backend.controller;

import at.htlle.backend.dto.stats.PlayerStatsDTO;
import at.htlle.backend.dto.stats.PlayerTrendItemDTO;
import at.htlle.backend.dto.stats.SessionStatsDTO;
import at.htlle.backend.service.StatsService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/stats")
public class StatsController {

    private final StatsService service;

    public StatsController(StatsService service) {
        this.service = service;
    }

    // 1) Statistik für eine Session
    @GetMapping("/session/{sessionId}")
    public SessionStatsDTO sessionStats(@PathVariable Long sessionId) {
        return service.sessionStats(sessionId);
    }

    // 2) Gesamtstatistik für einen Player
    @GetMapping("/player/{playerId}")
    public PlayerStatsDTO playerStats(@PathVariable Long playerId) {
        return service.playerStats(playerId);
    }

    // 3) Trend pro Session (für Diagramm)
    @GetMapping("/player/{playerId}/trend")
    public List<PlayerTrendItemDTO> playerTrend(@PathVariable Long playerId) {
        return service.playerTrend(playerId);
    }
}
