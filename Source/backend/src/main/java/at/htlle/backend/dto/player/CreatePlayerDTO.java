package at.htlle.backend.dto.player;

import java.time.LocalDate;

public record CreatePlayerDTO(
        String firstName,
        String lastName,
        String schoolClass,
        LocalDate birthdate
) {
}
