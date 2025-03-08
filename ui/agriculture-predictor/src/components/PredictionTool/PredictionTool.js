import { useState } from 'react';
import './PredictionTool.css';

export const PredictionTool = () => {
  const [landSize, setLandSize] = useState('');
  const [region, setRegion] = useState('');
  const [prediction, setPrediction] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const examplePrediction = {
      crop: 'Wheat',
      waterAmount: '500 liters per acre',
    };
    setPrediction(examplePrediction);
  };

  return (
    <div id="prediction-tool" className="prediction-tool-container">
      <h2 className="prediction-tool-header">Prediction Tool</h2>
      <form className="prediction-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="land-size" className="form-label">Land Size (in acres):</label>
          <input
            type="number"
            id="land-size"
            className="form-input"
            value={landSize}
            onChange={(e) => setLandSize(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="region" className="form-label">Region:</label>
          <select
            id="region"
            className="form-select"
            value={region}
            onChange={(e) => setRegion(e.target.value)}
            required
          >
            <option value="">Select Region</option>
            <option value="north-america">North America</option>
            <option value="south-america">South America</option>
            <option value="europe">Europe</option>
            <option value="asia">Asia</option>
            <option value="africa">Africa</option>
            <option value="australia">Australia</option>
          </select>
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
      {prediction && (
        <div className="prediction-result">
          <h3>Prediction Results:</h3>
          <p><strong>Crop:</strong> {prediction.crop}</p>
          <p><strong>Water Amount:</strong> {prediction.waterAmount}</p>
        </div>
      )}
    </div>
  );
};
