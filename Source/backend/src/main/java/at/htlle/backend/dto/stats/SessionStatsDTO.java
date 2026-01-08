package at.htlle.backend.dto.stats;

public record SessionStatsDTO(
        Long sessionId,
        long totalShots,
        long madeShots,
        double hitRate,          // 0..1
        Double avgDeviationCm,   // kann null sein
        Double avgSpeedMS,       // kann null sein
        Double avgAngleDeg       // kann null sein
) {}
