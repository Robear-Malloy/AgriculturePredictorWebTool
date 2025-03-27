package com.ein.agriculture_predictor.config;

import com.ein.agriculture_predictor.service.PredictionService;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class AppConfig {

    @Bean
    public PredictionService predictionService() {
        PredictionService service = new PredictionService();
        service.loadCoefficientData();
        return service;
    }
}
