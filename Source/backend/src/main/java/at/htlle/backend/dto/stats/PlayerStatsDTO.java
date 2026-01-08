package at.htlle.backend.dto.stats;


public record PlayerStatsDTO(
        Long playerId,
        long totalShots,
        long madeShots,
        double hitRate,
        Double avgDeviationCm,
        Double avgSpeedMS,
        Double avgAngleDeg
) {}
