package at.htlle.backend.repository;

import at.htlle.backend.model.TrainingSession;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;
import java.util.List;

public interface TrainingSessionRepository extends JpaRepository<TrainingSession, Long> {
    List<TrainingSession> findByPlayerIdOrderByStartedAtAsc(Long playerId);
    Optional<TrainingSession> findTopByPlayerIdOrderByStartedAtDesc(Long playerId);
}

