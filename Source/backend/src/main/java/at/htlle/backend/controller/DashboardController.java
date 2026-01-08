package at.htlle.backend.controller;


import at.htlle.backend.dto.dashboard.PlayerDashboardDTO;
import at.htlle.backend.service.DashboardService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/dashboard")
public class DashboardController {

    private final DashboardService service;

    public DashboardController(DashboardService service) {
        this.service = service;
    }

    @GetMapping("/player/{playerId}")
    public PlayerDashboardDTO dashboard(@PathVariable Long playerId) {
        return service.playerDashboard(playerId);
    }
}
