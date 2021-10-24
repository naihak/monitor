package com.example.monitor;

import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.Unirest;
import com.mashape.unirest.http.exceptions.UnirestException;
import com.mashape.unirest.request.HttpRequest;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
public class PollController {

  @GetMapping("/poll/{url}")
  @CrossOrigin(origins = "http://localhost:4200")
  public boolean poll(@PathVariable String url) {
    url = "https://" + url;
    HttpRequest request = Unirest.get(url);
    try {
      HttpResponse<String> response = request.asString();
      return (response.getStatus() == 200);
    } catch (UnirestException e) {
      return false;
    }
  }
}
