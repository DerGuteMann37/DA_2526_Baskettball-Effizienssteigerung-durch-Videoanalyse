package at.htlle.backend.service;

import at.htlle.backend.dto.dashboard.PlayerDashboardDTO;
import at.htlle.backend.dto.stats.PlayerStatsDTO;
import at.htlle.backend.dto.stats.PlayerTrendItemDTO;
import at.htlle.backend.dto.stats.SessionStatsDTO;
import at.htlle.backend.exception.NotFoundException;
import at.htlle.backend.model.TrainingSession;
import at.htlle.backend.repository.PlayerRepository;
import at.htlle.backend.repository.TrainingSessionRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DashboardService {

    private final PlayerRepository playerRepo;
    private final TrainingSessionRepository sessionRepo;
    private final StatsService statsService;

    public DashboardService(PlayerRepository playerRepo,
                            TrainingSessionRepository sessionRepo,
                            StatsService statsService) {
        this.playerRepo = playerRepo;
        this.sessionRepo = sessionRepo;
        this.statsService = statsService;
    }

    public PlayerDashboardDTO playerDashboard(Long playerId) {
        if (!playerRepo.existsById(playerId)) {
            throw new NotFoundException("Player not found: " + playerId);
        }

        PlayerStatsDTO overall = statsService.playerStats(playerId);
        List<PlayerTrendItemDTO> trend = statsService.playerTrend(playerId);

        var latestOpt = sessionRepo.findTopByPlayerIdOrderByStartedAtDesc(playerId);

        PlayerDashboardDTO.LatestSessionDto latest = null;
        if (latestOpt.isPresent()) {
            TrainingSession s = latestOpt.get();
            SessionStatsDTO latestStats = statsService.sessionStats(s.getId());
            latest = new PlayerDashboardDTO.LatestSessionDto(
                    s.getId(),
                    s.getStartedAt(),
                    latestStats
            );
        }

        return new PlayerDashboardDTO(playerId, overall, latest, trend);
    }
}
