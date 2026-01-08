package at.htlle.backend.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "shot")
public class Shot {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // Wurf gehört zu einer Session
    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "session_id", nullable = false)
    private TrainingSession session;

    // Wurf gehört zu einem Video (optional, aber sinnvoll)
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "video_id")
    private Video video;

    @Column(nullable = false)
    private Boolean made; // Treffer?

    private Double releaseAngleDeg; // Ist-Winkel (falls ihr den habt)
    private Double releaseSpeedMS;  // Ist-Speed

    private Double deviationCm; // Abweichung von Soll (wenn berechnet)

    @Column(nullable = false)
    private LocalDateTime createdAt = LocalDateTime.now();

    public Shot() {}

    public Long getId() { return id; }

    public TrainingSession getSession() { return session; }
    public void setSession(TrainingSession session) { this.session = session; }

    public Video getVideo() { return video; }
    public void setVideo(Video video) { this.video = video; }

    public Boolean getMade() { return made; }
    public void setMade(Boolean made) { this.made = made; }

    public Double getReleaseAngleDeg() { return releaseAngleDeg; }
    public void setReleaseAngleDeg(Double releaseAngleDeg) { this.releaseAngleDeg = releaseAngleDeg; }

    public Double getReleaseSpeedMS() { return releaseSpeedMS; }
    public void setReleaseSpeedMS(Double releaseSpeedMS) { this.releaseSpeedMS = releaseSpeedMS; }

    public Double getDeviationCm() { return deviationCm; }
    public void setDeviationCm(Double deviationCm) { this.deviationCm = deviationCm; }

    public LocalDateTime getCreatedAt() { return createdAt; }
    public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }
}
