package at.htlle.backend.service;

import at.htlle.backend.dto.stats.PlayerStatsDTO;
import at.htlle.backend.dto.stats.PlayerTrendItemDTO;
import at.htlle.backend.dto.stats.SessionStatsDTO;
import at.htlle.backend.exception.NotFoundException;
import at.htlle.backend.model.TrainingSession;
import at.htlle.backend.repository.PlayerRepository;
import at.htlle.backend.repository.ShotRepository;
import at.htlle.backend.repository.TrainingSessionRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StatsService {

    private final ShotRepository shotRepo;
    private final TrainingSessionRepository sessionRepo;
    private final PlayerRepository playerRepo;

    public StatsService(ShotRepository shotRepo, TrainingSessionRepository sessionRepo, PlayerRepository playerRepo) {
        this.shotRepo = shotRepo;
        this.sessionRepo = sessionRepo;
        this.playerRepo = playerRepo;
    }

    public SessionStatsDTO sessionStats(Long sessionId) {
        if (!sessionRepo.existsById(sessionId)) {
            throw new NotFoundException("Session not found: " + sessionId);
        }

        Object[] row = shotRepo.aggregateBySession(sessionId);
        return toSessionDto(sessionId, row);
    }

    public PlayerStatsDTO playerStats(Long playerId) {
        if (!playerRepo.existsById(playerId)) {
            throw new NotFoundException("Player not found: " + playerId);
        }

        Object[] row = shotRepo.aggregateByPlayer(playerId);
        return toPlayerDto(playerId, row);
    }

    public List<PlayerTrendItemDTO> playerTrend(Long playerId) {
        if (!playerRepo.existsById(playerId)) {
            throw new NotFoundException("Player not found: " + playerId);
        }

        List<TrainingSession> sessions = sessionRepo.findByPlayerIdOrderByStartedAtAsc(playerId);

        return sessions.stream().map(s -> {
            Object[] row = shotRepo.aggregateBySession(s.getId());
            long total = ((Number) row[0]).longValue();
            long made = row[1] == null ? 0L : ((Number) row[1]).longValue();
            Double avgDev = (Double) row[2];

            double hitRate = total == 0 ? 0.0 : (double) made / (double) total;

            return new PlayerTrendItemDTO(
                    s.getId(),
                    s.getStartedAt(),
                    total,
                    made,
                    hitRate,
                    avgDev
            );
        }).toList();
    }

    private SessionStatsDTO toSessionDto(Long sessionId, Object[] row) {
        long total = ((Number) row[0]).longValue();
        long made = row[1] == null ? 0L : ((Number) row[1]).longValue();

        Double avgDev = (Double) row[2];
        Double avgSpeed = (Double) row[3];
        Double avgAngle = (Double) row[4];

        double hitRate = total == 0 ? 0.0 : (double) made / (double) total;

        return new SessionStatsDTO(sessionId, total, made, hitRate, avgDev, avgSpeed, avgAngle);
    }

    private PlayerStatsDTO toPlayerDto(Long playerId, Object[] row) {
        long total = ((Number) row[0]).longValue();
        long made = row[1] == null ? 0L : ((Number) row[1]).longValue();

        Double avgDev = (Double) row[2];
        Double avgSpeed = (Double) row[3];
        Double avgAngle = (Double) row[4];

        double hitRate = total == 0 ? 0.0 : (double) made / (double) total;

        return new PlayerStatsDTO(playerId, total, made, hitRate, avgDev, avgSpeed, avgAngle);
    }
}
