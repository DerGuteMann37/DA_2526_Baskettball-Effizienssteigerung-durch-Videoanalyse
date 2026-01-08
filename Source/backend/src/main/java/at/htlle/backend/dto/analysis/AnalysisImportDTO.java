package at.htlle.backend.dto.analysis;

public record AnalysisImportDTO(
        Long sessionId,

        // Video-Metadaten
        String clip,
        String video,

        // Soll-Daten (aus deiner Tabelle)
        Integer chosenFrame,
        Double releasePxX,
        Double releasePxY,
        Double rimPxX,
        Double rimPxY,
        Double scaleMPerPx,
        Double rimHeightM,
        Double v0MS,
        Double thetaDeg,
        String overlayImage,
        String timestamp,

        // Ist / Ergebnis (minimal fürs Backend)
        Boolean made,              // Treffer ja/nein
        Double istSpeedMS,         // optional
        Double istAngleDeg,        // optional
        Double deviationCm         // optional (wenn Videoanalyse das schon liefert)
) {}