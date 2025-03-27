package com.ein.agriculture_predictor.controller;

import com.ein.agriculture_predictor.dtos.GallonsNeededRequest;
import com.ein.agriculture_predictor.dtos.PredictionResult;
import com.ein.agriculture_predictor.service.PredictionService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@RestController
@RequestMapping("/api/predictor")
public class PredictorController {

    private static final Logger logger = LoggerFactory.getLogger(PredictorController.class);
    private final PredictionService predictionService;

    public PredictorController(PredictionService predictionService) {
        this.predictionService = predictionService;
    }

    @PostMapping("/gallons-needed")
    public ResponseEntity<PredictionResult> getGallonsNeeded(@RequestBody GallonsNeededRequest request) {
        try {
            logger.info("Received prediction request:\n");
            logger.info("Crop: {}\n", request.getCrop());
            logger.info("Continent: {}\n", request.getContinent());
            logger.info("Region: {}\n", request.getRegion());
            logger.info("Humidity: {}\n", request.getHumidity());
            logger.info("Temperature: {}\n", request.getTemperature());
            float gallonsPerAcre = predictionService.getGallonsNeeded(request);
            PredictionResult result = new PredictionResult(gallonsPerAcre);
            return ResponseEntity.ok(result);
        } catch (Exception e) {
            logger.error("Error processing prediction request", e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }
}