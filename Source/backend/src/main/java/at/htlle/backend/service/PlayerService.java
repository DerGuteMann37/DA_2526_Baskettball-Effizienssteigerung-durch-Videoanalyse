package at.htlle.backend.service;

import at.htlle.backend.dto.player.CreatePlayerDTO;
import at.htlle.backend.dto.player.CreatePlayerDTO;
import at.htlle.backend.dto.player.PlayerResponseDTO;
import at.htlle.backend.dto.player.PlayerResponseDTO;
import at.htlle.backend.model.Player;
import at.htlle.backend.repository.PlayerRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PlayerService {

    private final PlayerRepository repo;

    public PlayerService(PlayerRepository repo) {
        this.repo = repo;
    }

    public List<PlayerResponseDTO> getAll() {
        return repo.findAll().stream()
                .map(p -> new PlayerResponseDTO(p.getId(), p.getFirstName(), p.getLastName(), p.getSchoolClass(), p.getBirthdate()))
                .toList();
    }

    public PlayerResponseDTO create(CreatePlayerDTO dto) {
        Player p = new Player();
        p.setFirstName(dto.firstName());
        p.setLastName(dto.lastName());
        p.setSchoolClass(dto.schoolClass());
        p.setBirthdate(dto.birthdate());

        Player saved = repo.save(p);
        return new PlayerResponseDTO(saved.getId(), saved.getFirstName(), saved.getLastName(), saved.getSchoolClass(), saved.getBirthdate());
    }
}
