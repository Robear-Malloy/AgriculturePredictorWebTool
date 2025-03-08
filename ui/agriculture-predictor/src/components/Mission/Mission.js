import "./Mission.css";

export const Mission = () => {
  return (
    <div id="mission" className="mission-container">
      <div className="mission-overlay">
        <div className="mission-content">
          <h1 className="company-name">Increase Crop Yield Inc.</h1>
          <h2 className="mission-title">Empowering Agriculture with Data-Driven Insights</h2>
          <p className="mission-text">
            Welcome to <strong>Increase Crop Yield Inc.</strong> Our innovative agriculture prediction tool helps 
            farmers and agribusinesses maximize yields, reduce waste, and make informed decisions with 
            <strong> real-time analytics.</strong>
          </p>
          <a href="#contact" className="mission-cta">Get in Touch</a>
        </div>
      </div>
    </div>
  );
};
