package com.example.monitor.controller;

import com.example.monitor.dto.PutPollerDTO;
import com.example.monitor.model.Poller;
import com.example.monitor.repository.PollerRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@Slf4j
@RestController
@RequestMapping("/pollers")
@CrossOrigin(origins = "http://localhost:4200")
public class PollerController {

  @Autowired
  private PollerRepository pollerRepository;

  @PostMapping
  public Poller postPoller(@RequestBody PutPollerDTO data) {
    Poller newPoller = new Poller(data);
    return pollerRepository.save(newPoller);
  }

  @GetMapping
  public List<Poller> getPollers() {
    return pollerRepository.findAll();
  }

  @DeleteMapping("/{id}")
  public Poller deletePoller(@PathVariable String id) {
    Optional<Poller> existing = pollerRepository.findById(id);
    if (existing.isPresent()) {
      pollerRepository.deleteById(id);
      return existing.get();
    }
    return null;
  }
}
