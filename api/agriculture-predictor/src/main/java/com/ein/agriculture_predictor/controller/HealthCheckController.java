package com.ein.agriculture_predictor.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@RestController
@RequestMapping("/api/health")
public class HealthCheckController {

    private static final Logger logger = LoggerFactory.getLogger(HealthCheckController.class);

    @GetMapping
    public ResponseEntity<String> healthCheck() {
        try {
            logger.info("Health Check: App is healthy");
            return ResponseEntity.ok("Healthy");
        } catch (Exception e) {
            logger.error("Health Check: App is unhealthy - " + e.getMessage(), e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Unhealthy");
        }
    }
}
