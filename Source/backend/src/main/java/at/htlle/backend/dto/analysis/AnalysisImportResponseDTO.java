package at.htlle.backend.dto.analysis;

public record AnalysisImportResponseDTO(
        Long videoId,
        Long sollFlightDataId,
        Long shotId
) {}
