package at.htlle.backend.model;

import jakarta.persistence.*;

@Entity
@Table(name = "soll_flight_data")
public class SollFlightData {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // Ein Soll-Datensatz gehört zu genau einem Video (1:1)
    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "video_id", nullable = false, unique = true)
    private Video video;

    private Integer chosenFrame;

    private Double releasePxX;
    private Double releasePxY;

    private Double rimPxX;
    private Double rimPxY;

    private Double scaleMPerPx;
    private Double rimHeightM;

    private Double v0MS;
    private Double thetaDeg;

    private String overlayImage;  // optional: Pfad/Base64/Name
    private String timestamp;     // optional

    public SollFlightData() {}

    public Long getId() { return id; }

    public Video getVideo() { return video; }
    public void setVideo(Video video) { this.video = video; }

    public Integer getChosenFrame() { return chosenFrame; }
    public void setChosenFrame(Integer chosenFrame) { this.chosenFrame = chosenFrame; }

    public Double getReleasePxX() { return releasePxX; }
    public void setReleasePxX(Double releasePxX) { this.releasePxX = releasePxX; }

    public Double getReleasePxY() { return releasePxY; }
    public void setReleasePxY(Double releasePxY) { this.releasePxY = releasePxY; }

    public Double getRimPxX() { return rimPxX; }
    public void setRimPxX(Double rimPxX) { this.rimPxX = rimPxX; }

    public Double getRimPxY() { return rimPxY; }
    public void setRimPxY(Double rimPxY) { this.rimPxY = rimPxY; }

    public Double getScaleMPerPx() { return scaleMPerPx; }
    public void setScaleMPerPx(Double scaleMPerPx) { this.scaleMPerPx = scaleMPerPx; }

    public Double getRimHeightM() { return rimHeightM; }
    public void setRimHeightM(Double rimHeightM) { this.rimHeightM = rimHeightM; }

    public Double getV0MS() { return v0MS; }
    public void setV0MS(Double v0MS) { this.v0MS = v0MS; }

    public Double getThetaDeg() { return thetaDeg; }
    public void setThetaDeg(Double thetaDeg) { this.thetaDeg = thetaDeg; }

    public String getOverlayImage() { return overlayImage; }
    public void setOverlayImage(String overlayImage) { this.overlayImage = overlayImage; }

    public String getTimestamp() { return timestamp; }
    public void setTimestamp(String timestamp) { this.timestamp = timestamp; }
}
