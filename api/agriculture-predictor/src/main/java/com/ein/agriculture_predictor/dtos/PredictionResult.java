package com.ein.agriculture_predictor.dtos;

public class PredictionResult {
    private float gallonsPerAcre;

    public PredictionResult() {}

    public PredictionResult(float gallonsPerAcre) {
        this.gallonsPerAcre = gallonsPerAcre;
    }

    public float getGallonsPerAcre() {
        return gallonsPerAcre;
    }

    public void setGallonsPerAcre(float gallonsPerAcre) {
        this.gallonsPerAcre = gallonsPerAcre;
    }
}