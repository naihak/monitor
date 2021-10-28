package com.example.monitor.repository;

import com.example.monitor.model.Poller;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface PollerRepository extends MongoRepository<Poller, String>  {}
