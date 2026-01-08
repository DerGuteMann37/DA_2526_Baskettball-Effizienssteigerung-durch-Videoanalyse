package at.htlle.backend.service;

import at.htlle.backend.dto.analysis.AnalysisImportDTO;
import at.htlle.backend.dto.analysis.AnalysisImportResponseDTO;
import at.htlle.backend.exception.NotFoundException;
import at.htlle.backend.model.SollFlightData;
import at.htlle.backend.model.Shot;
import at.htlle.backend.model.TrainingSession;
import at.htlle.backend.model.Video;
import at.htlle.backend.repository.SollFlightDataRepository;
import at.htlle.backend.repository.ShotRepository;
import at.htlle.backend.repository.TrainingSessionRepository;
import at.htlle.backend.repository.VideoRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class AnalysisImportService {

    private final TrainingSessionRepository sessionRepo;
    private final VideoRepository videoRepo;
    private final SollFlightDataRepository sollRepo;
    private final ShotRepository shotRepo;

    public AnalysisImportService(
            TrainingSessionRepository sessionRepo,
            VideoRepository videoRepo,
            SollFlightDataRepository sollRepo,
            ShotRepository shotRepo
    ) {
        this.sessionRepo = sessionRepo;
        this.videoRepo = videoRepo;
        this.sollRepo = sollRepo;
        this.shotRepo = shotRepo;
    }

    @Transactional
    public AnalysisImportResponseDTO importOne(AnalysisImportDTO dto) {
        TrainingSession session = sessionRepo.findById(dto.sessionId())
                .orElseThrow(() -> new NotFoundException("Session not found: " + dto.sessionId()));

        // 1) Video anlegen
        Video video = new Video();
        video.setSession(session);
        video.setFilename(dto.video() != null ? dto.video() : (dto.clip() != null ? dto.clip() : "unknown"));
        video.setOriginalPath(null); // optional
        Video savedVideo = videoRepo.save(video);

        // 2) SollFlightData anlegen
        SollFlightData soll = new SollFlightData();
        soll.setVideo(savedVideo);
        soll.setChosenFrame(dto.chosenFrame());
        soll.setReleasePxX(dto.releasePxX());
        soll.setReleasePxY(dto.releasePxY());
        soll.setRimPxX(dto.rimPxX());
        soll.setRimPxY(dto.rimPxY());
        soll.setScaleMPerPx(dto.scaleMPerPx());
        soll.setRimHeightM(dto.rimHeightM());
        soll.setV0MS(dto.v0MS());
        soll.setThetaDeg(dto.thetaDeg());
        soll.setOverlayImage(dto.overlayImage());
        soll.setTimestamp(dto.timestamp());

        SollFlightData savedSoll = sollRepo.save(soll);

        // 3) Shot anlegen
        Shot shot = new Shot();
        shot.setSession(session);
        shot.setVideo(savedVideo);

        // made ist wichtig; wenn null -> false (damit DB nicht crasht)
        shot.setMade(dto.made() != null ? dto.made() : false);

        // Ist Werte optional
        shot.setReleaseSpeedMS(dto.istSpeedMS());
        shot.setReleaseAngleDeg(dto.istAngleDeg());
        shot.setDeviationCm(dto.deviationCm());

        Shot savedShot = shotRepo.save(shot);

        return new AnalysisImportResponseDTO(savedVideo.getId(), savedSoll.getId(), savedShot.getId());
    }
}
