package at.htlle.backend.service;

import at.htlle.backend.model.Player;
import at.htlle.backend.repository.PlayerRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.regex.Pattern;

@Service
@RequiredArgsConstructor
public class PlayerService {
    private final PlayerRepository playerRepository;

    private static final Pattern EMAIL_PATTERN = Pattern.compile(
            "^[A-Za-z0-9.%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}$"
    );

    public Player registerPlayer(String firstName,String lastName, String email, String password) {

        String normalizedEmail = email == null ? "" : email.trim().toLowerCase();

        if (normalizedEmail.isEmpty()) {
            throw new IllegalArgumentException("Email darf nicht leer sein");
        }

        if (!EMAIL_PATTERN.matcher(normalizedEmail).matches()) {
            throw new IllegalArgumentException("Ungültiges Email-Format");
        }

        if (playerRepository.findByEmail(normalizedEmail).isPresent()) {
            throw new IllegalArgumentException("Email bereits registriert");
        }

        Player player = new Player();
        player.setFirstName(firstName);
        player.setLastName(lastName);
        player.setEmail(normalizedEmail);
        player.setPassword(password);

        return playerRepository.save(player);
    }

    public Optional<Player> loginPlayer(String email, String password) {
        Optional<Player> player = playerRepository.findByEmail(email);
        if (player.isPresent() && player.get().getPassword().equals(password)) {
            return player;
        }
        return Optional.empty();
    }

    public Optional<Player> getUserById(Long id) {
        return playerRepository.findById(id);
    }

}

