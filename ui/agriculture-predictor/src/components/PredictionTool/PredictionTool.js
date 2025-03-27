import { useState, useEffect } from 'react';
import './PredictionTool.css';

export const PredictionTool = () => {
  const [crop, setCrop] = useState('');
  const [continent, setContinent] = useState('');
  const [region, setRegion] = useState('');
  const [regions, setRegions] = useState([]);
  const [temperature, setTemperature] = useState('');
  const [humidity, setHumidity] = useState('');
  const [prediction, setPrediction] = useState(null);
  
  const continentRegions = {
     'north-america' : ['Northeast', 'Tropical', 'Western', 'Southwest', 'Southeast', 'Central'],
     'south-america' : ['Brazil', 'West-Center', 'North', 'South'],
     'africa' : ['Northern Africa', 'Western Africa', 'Central Africa', 'Eastern Africa', 'Southern Africa'],
     'europe' : ['Northern Europe', 'Eastern Europe', 'Southern Europe', 'Western Europe', 'British Isles'],
     'asia' : ['Northern Asia', 'Central Asia', 'Eastern Asia', 'Southern Asia', 'Western Asia', 'Southeast Asia'],
     'australia' : ['Western Australia', 'Northern Australia', 'Southern Australia', 'Queensland', 'New South Wales', 'Victoria', 'Tasmania'],
  };
  
  const formatRegion = (str) => {
     return str.toLowerCase().replace(/\s+/g, '-');
  };
  
  // Update regions when the continent changes
  useEffect(() => {
    if (continent) {
      setRegions(continentRegions[continent] || []);
      setRegion(''); // Reset city when country changes
    }
  }, [continent]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    /*const examplePrediction = {
      gallonsPerAcre: region,
    };*/
    
    const requestData = {crop: crop, continent: continent, region: region, temperature: temperature, humidity: humidity};
    try
    {
       const response = await fetch("http://localhost:8080/api/predictor/gallons-needed", 
       {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(requestData),
       });
       
       if(!response.ok)
       {
          throw new Error('Request failed');
       }
       
       const result = await response.json();
       setPrediction(result);
    } catch (error)
    {
       console.error('Error during POST request: ', error);
    }
    
  };

  return (
    <div id="prediction-tool" className="prediction-tool-container">
      <h2 className="prediction-tool-header">Prediction Tool</h2>
      <form className="prediction-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="crop-type" className="form-label">Crop:</label>
          <select
            id="crop"
            className="form-select"
            value={crop}
            onChange={(e) => setCrop(e.target.value)}
            required
          >
            <option value="">Select Crop</option>
            <option value="corn">Corn</option>
            <option value="potato">Potato</option>
            <option value="tomato">Tomato</option>
          </select>
        </div>
        <div className="form-group">
        <label htmlFor="continent" className="form-label">Continent:</label>
          <select
            id="continent"
            className="form-select"
            value={continent}
            onChange={(e) => setContinent(e.target.value)}
            required
          >
            <option value="">Select Continent</option>
            <option value="north-america">North America</option>
            <option value="south-america">South America</option>
            <option value="europe">Europe</option>
            <option value="asia">Asia</option>
            <option value="africa">Africa</option>
            <option value="australia">Australia</option>
          </select>
          <label htmlFor="region" className="form-label">Region:</label>
          <select
            id="region"
            className="form-select"
            value={region}
            onChange={(e) => setRegion(e.target.value)}
            disabled={!continent}
            required
          >
            <option value="">Select Region</option>
            {regions.map((regionOption) => (
              <option key={regionOption} value={formatRegion(regionOption)}>
                {regionOption}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="temperature" className="form-label">Temperature (in celcius):</label>
          <input
            type="number"
            id="temperature"
            className="form-input"
            value={temperature}
            onChange={(e) => setTemperature(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="humidity" className="form-label">Humidity:</label>
          <input
            type="number"
            id="humidity"
            className="form-input"
            value={humidity}
            onChange={(e) => setHumidity(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
      {prediction && (
        <div className="prediction-result">
          <h3>Prediction Results:</h3>
          <p><strong>Gallons/Acre:</strong> {prediction.gallonsPerAcre}</p>
        </div>
      )}
    </div>
  );
};
