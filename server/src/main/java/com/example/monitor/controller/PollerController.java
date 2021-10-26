package com.example.monitor.controller;

import com.example.monitor.dto.PutPollerDTO;
import com.example.monitor.model.Poller;
import com.example.monitor.repository.PollerRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
@RequestMapping("/poller")
@CrossOrigin(origins = "http://localhost:4200")
public class PollerController {

  @Autowired
  private PollerRepository pollerRepository;

  @PostMapping
  public Poller postPoller(@RequestBody PutPollerDTO data) {
    Poller newPoller = new Poller(data);
    return pollerRepository.save(newPoller);
  }

}
