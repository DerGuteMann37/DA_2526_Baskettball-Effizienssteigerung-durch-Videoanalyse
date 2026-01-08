package at.htlle.backend.dto.player;

import java.time.LocalDate;

public record PlayerResponseDTO(
        Long id,
        String firstName,
        String lastName,
        String schoolClass,
        LocalDate birthdate
) { }
