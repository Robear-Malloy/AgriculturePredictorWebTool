package com.ein.agriculture_predictor.service;

import com.ein.agriculture_predictor.dtos.GallonsNeededRequest;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.nio.charset.StandardCharsets;
import java.util.*;

@Service
public class PredictionService {
    private static final Logger logger = LoggerFactory.getLogger(PredictionService.class);

    private final Map<int[], Float> soilTempCoefficients = new HashMap<>();
    private final Map<int[], Float> humidityCoefficients = new HashMap<>();
    private final Map<String, Float> cropWaterUsage = new HashMap<>();

    public void loadCoefficientData() {
        logger.info("Loading coefficient data from CSV...");
        try (BufferedReader reader = new BufferedReader(new InputStreamReader(
                getClass().getClassLoader().getResourceAsStream("coefficients.csv"), StandardCharsets.UTF_8))) {

            String line;
            boolean isFirstLine = true;

            while ((line = reader.readLine()) != null) {
                if (isFirstLine) {
                    isFirstLine = false;
                    continue;
                }

                String[] values = line.split(",");
                if (values.length < 3) {
                    logger.warn("Skipping invalid row: {}", line);
                    continue;
                }

                String type = values[0].trim();

                if (type.equalsIgnoreCase("Crop")) {
                    cropWaterUsage.put(values[1].trim(), Float.parseFloat(values[2].trim()));
                } else {
                    int min = Integer.parseInt(values[1].trim());
                    int max = Integer.parseInt(values[2].trim());
                    float coefficient = Float.parseFloat(values[3].trim());

                    if (type.equalsIgnoreCase("SoilTemperature")) {
                        soilTempCoefficients.put(new int[]{min, max}, coefficient);
                    } else if (type.equalsIgnoreCase("Humidity")) {
                        humidityCoefficients.put(new int[]{min, max}, coefficient);
                    }
                }
            }

            logger.info("Successfully loaded coefficient data.");
        } catch (Exception e) {
            logger.error("Error loading CSV data", e);
            throw new RuntimeException("Failed to load coefficients data", e);
        }
    }

    public float getGallonsNeeded(GallonsNeededRequest request) {
        logger.info("Calculating gallons needed for request: {}", request);

        Float cropGallons = cropWaterUsage.get(request.getCrop());
        if (cropGallons == null) {
            logger.error("Crop not found: {}", request.getCrop());
            throw new IllegalArgumentException("Unknown crop: " + request.getCrop());
        }

        float soilTempCoefficient = getCoefficient(request.getTemperature(), soilTempCoefficients);
        float humidityCoefficient = getCoefficient(request.getHumidity(), humidityCoefficients);

        return soilTempCoefficient * humidityCoefficient * cropGallons;
    }

    private float getCoefficient(Float value, Map<int[], Float> coefficients) {
        for (Map.Entry<int[], Float> entry : coefficients.entrySet()) {
            int[] range = entry.getKey();
            if (value >= range[0] && value <= range[1]) {
                return entry.getValue();
            }
        }
        throw new IllegalArgumentException("Value out of range: " + value);
    }
}
