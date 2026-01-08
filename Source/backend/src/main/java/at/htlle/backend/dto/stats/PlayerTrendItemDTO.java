package at.htlle.backend.dto.stats;


import java.time.LocalDateTime;

public record PlayerTrendItemDTO(
        Long sessionId,
        LocalDateTime startedAt,
        long totalShots,
        long madeShots,
        double hitRate,
        Double avgDeviationCm
) {}
