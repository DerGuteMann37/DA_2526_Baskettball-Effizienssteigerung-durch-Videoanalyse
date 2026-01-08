package at.htlle.backend.dto.dashboard;

import at.htlle.backend.dto.stats.PlayerStatsDTO;
import at.htlle.backend.dto.stats.PlayerTrendItemDTO;
import at.htlle.backend.dto.stats.SessionStatsDTO;

import java.time.LocalDateTime;
import java.util.List;

public record PlayerDashboardDTO(
        Long playerId,
        PlayerStatsDTO overall,
        LatestSessionDto latestSession,
        List<PlayerTrendItemDTO> trend
) {
    public record LatestSessionDto(
            Long sessionId,
            LocalDateTime startedAt,
            SessionStatsDTO stats
    ) {}
}
