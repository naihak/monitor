package com.example.monitor.controller;

import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.Unirest;
import com.mashape.unirest.http.exceptions.UnirestException;
import com.mashape.unirest.request.HttpRequest;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PollController {

  @PostMapping("/poll")
  @CrossOrigin(origins = "http://localhost:4200")
  public boolean poll(@RequestBody String url) {
    HttpRequest request = Unirest.get(url);
    try {
      HttpResponse<String> response = request.asString();
      return (response.getStatus() == 200);
    } catch (UnirestException e) {
      return false;
    }
  }
}
