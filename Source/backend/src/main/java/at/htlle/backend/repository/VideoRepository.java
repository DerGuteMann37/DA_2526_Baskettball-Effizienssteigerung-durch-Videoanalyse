package at.htlle.backend.repository;

import at.htlle.backend.model.Video;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface VideoRepository extends JpaRepository<Video, Long> {
    List<Video> findBySessionId(Long sessionId);
}
