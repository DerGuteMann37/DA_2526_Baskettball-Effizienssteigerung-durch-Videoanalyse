package at.htlle.backend.controller;

import at.htlle.backend.dto.analysis.AnalysisImportDTO;
import at.htlle.backend.dto.analysis.AnalysisImportResponseDTO;
import at.htlle.backend.service.AnalysisImportService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/analysis")
public class AnalysisImportController {

    private final AnalysisImportService service;

    public AnalysisImportController(AnalysisImportService service) {
        this.service = service;
    }

    @PostMapping("/import")
    public AnalysisImportResponseDTO importAnalysis(@RequestBody AnalysisImportDTO dto) {
        return service.importOne(dto);
    }
}
