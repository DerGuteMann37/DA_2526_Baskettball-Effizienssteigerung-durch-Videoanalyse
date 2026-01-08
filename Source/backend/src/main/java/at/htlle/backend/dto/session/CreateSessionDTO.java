package at.htlle.backend.dto.session;

import java.time.LocalDateTime;

public record CreateSessionDTO(
        Long playerId,
        String note,
        LocalDateTime startedAt // optional: wenn null -> Server setzt "now"
) { }
