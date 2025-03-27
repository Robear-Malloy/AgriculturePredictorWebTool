package com.ein.agriculture_predictor.dtos;

public class GallonsNeededRequest {
    private String crop;
    private String region;
    private String continent;
    private Float soilTemperature;
    private Float humidity;

    public GallonsNeededRequest() {}

    public GallonsNeededRequest(String crop, String region, String continent, Float soilTemperature, Float humidity) {
        this.crop = crop;
        this.continent = continent;
        this.region = region;
        this.soilTemperature = soilTemperature;
        this.humidity = humidity;
    }

    public String getCrop() {
        return crop;
    }

    public void setCrop(String crop) {
        this.crop = crop;
    }

    public String getRegion() {
        return region;
    }

    public void setRegion(String region) {
        this.region = region;
    }

    public String getContinent() {
        return continent;
    }

    public void setContinent(String continent) {
        this.continent = continent;
    }

    public Float getSoilTemperature() {
        return soilTemperature;
    }

    public void setSoilTemperature(Float soilTemperature) {
        this.soilTemperature = soilTemperature;
    }

    public Float getHumidity() {
        return humidity;
    }

    public void setHumidity(Float humidity) {
        this.humidity = humidity;
    }
}