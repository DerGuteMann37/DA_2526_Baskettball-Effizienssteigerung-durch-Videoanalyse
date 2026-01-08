package at.htlle.backend.dto.session;

import java.time.LocalDateTime;

public record SessionResponseDTO(
        Long id,
        Long playerId,
        LocalDateTime startedAt,
        String note
) { }
