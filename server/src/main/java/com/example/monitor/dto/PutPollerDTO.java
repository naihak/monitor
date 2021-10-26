package com.example.monitor.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class PutPollerDTO {
  private String name;

  private String url;
}
