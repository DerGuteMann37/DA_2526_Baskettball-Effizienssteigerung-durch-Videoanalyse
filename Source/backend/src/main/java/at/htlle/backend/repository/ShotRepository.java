package at.htlle.backend.repository;

import at.htlle.backend.model.Shot;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ShotRepository extends JpaRepository<Shot, Long> {

    List<Shot> findBySessionId(Long sessionId);

    // --- Session Aggregation ---
    @Query("""
        select
          count(s),
          sum(case when s.made = true then 1 else 0 end),
          avg(s.deviationCm),
          avg(s.releaseSpeedMS),
          avg(s.releaseAngleDeg)
        from Shot s
        where s.session.id = :sessionId
    """)
    Object[] aggregateBySession(@Param("sessionId") Long sessionId);

    // --- Player Aggregation (über alle Sessions) ---
    @Query("""
        select
          count(s),
          sum(case when s.made = true then 1 else 0 end),
          avg(s.deviationCm),
          avg(s.releaseSpeedMS),
          avg(s.releaseAngleDeg)
        from Shot s
        where s.session.player.id = :playerId
    """)
    Object[] aggregateByPlayer(@Param("playerId") Long playerId);
}
