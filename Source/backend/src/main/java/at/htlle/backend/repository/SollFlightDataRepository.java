package at.htlle.backend.repository;

import at.htlle.backend.model.SollFlightData;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface SollFlightDataRepository extends JpaRepository<SollFlightData, Long> {
    Optional<SollFlightData> findByVideoId(Long videoId);
}
