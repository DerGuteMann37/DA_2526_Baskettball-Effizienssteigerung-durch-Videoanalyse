package at.htlle.backend.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "training_session")
public class TrainingSession {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // Viele Sessions gehören zu einem Player
    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "player_id", nullable = false)
    private Player player;

    @Column(nullable = false)
    private LocalDateTime startedAt = LocalDateTime.now();

    private String note; // optional: z.B. "Freiwürfe", "Training 07.01"

    public TrainingSession() {}

    public Long getId() { return id; }

    public Player getPlayer() { return player; }
    public void setPlayer(Player player) { this.player = player; }

    public LocalDateTime getStartedAt() { return startedAt; }
    public void setStartedAt(LocalDateTime startedAt) { this.startedAt = startedAt; }

    public String getNote() { return note; }
    public void setNote(String note) { this.note = note; }
}
