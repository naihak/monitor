package com.example.monitor.model;

import com.example.monitor.dto.PutPollerDTO;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Document
@Data
@NoArgsConstructor
public class Poller {

  @Id
  private String id;

  private String name;

  private String url;

  private Date creationDate = new Date();

  public Poller(PutPollerDTO dto) {
    name = dto.getName();
    url = dto.getUrl();
  }
}
