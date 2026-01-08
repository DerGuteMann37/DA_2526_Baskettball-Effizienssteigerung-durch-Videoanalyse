package at.htlle.backend.service;

import at.htlle.backend.dto.session.CreateSessionDTO;
import at.htlle.backend.dto.session.SessionResponseDTO;
import at.htlle.backend.exception.NotFoundException;
import at.htlle.backend.model.Player;
import at.htlle.backend.model.TrainingSession;
import at.htlle.backend.repository.PlayerRepository;
import at.htlle.backend.repository.TrainingSessionRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class TrainingSessionService {

    private final TrainingSessionRepository sessionRepo;
    private final PlayerRepository playerRepo;

    public TrainingSessionService(TrainingSessionRepository sessionRepo, PlayerRepository playerRepo) {
        this.sessionRepo = sessionRepo;
        this.playerRepo = playerRepo;
    }

    public SessionResponseDTO create(CreateSessionDTO dto) {
        Player player = playerRepo.findById(dto.playerId())
                .orElseThrow(() -> new NotFoundException("Player not found: " + dto.playerId()));

        TrainingSession s = new TrainingSession();
        s.setPlayer(player);
        s.setNote(dto.note());

        if (dto.startedAt() != null) {
            s.setStartedAt(dto.startedAt());
        } else {
            s.setStartedAt(LocalDateTime.now());
        }

        TrainingSession saved = sessionRepo.save(s);
        return toDto(saved);
    }

    public List<SessionResponseDTO> getByPlayer(Long playerId) {
        // Optional: check ob Player existiert (schöner Fehler)
        if (!playerRepo.existsById(playerId)) {
            throw new NotFoundException("Player not found: " + playerId);
        }

        return sessionRepo.findByPlayerIdOrderByStartedAtAsc(playerId)
                .stream()
                .map(this::toDto)
                .toList();
    }

    public List<SessionResponseDTO> getAll() {
        return sessionRepo.findAll().stream().map(this::toDto).toList();
    }

    private SessionResponseDTO toDto(TrainingSession s) {
        return new SessionResponseDTO(
                s.getId(),
                s.getPlayer().getId(),
                s.getStartedAt(),
                s.getNote()
        );
    }
}
