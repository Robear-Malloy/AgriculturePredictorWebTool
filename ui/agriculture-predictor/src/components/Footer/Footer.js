import { useState, useEffect } from "react";
import "./Footer.css";

export const Footer = () => {
  const [healthStatus, setHealthStatus] = useState("Checking...");
  const [isHealthy, setIsHealthy] = useState(null);

  useEffect(() => {
    const checkHealth = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/health");
        if (response.ok) {
          setHealthStatus("Healthy");
          setIsHealthy(true);
        } else {
          setHealthStatus("Unhealthy");
          setIsHealthy(false);
        }
      } catch (error) {
        setHealthStatus("Unhealthy");
        setIsHealthy(false);
      }
    };

    checkHealth();
    const interval = setInterval(checkHealth, 5000); 

    return () => clearInterval(interval); 
  }, []);

  return (
    <div id="footer" className="footer-container">
      <div className="footer-content">
        <p className="footer-text">© All Rights Reserved. Principles of Engineering Management</p>
        <div className="health-status">
          <span>Status: {healthStatus}</span>
          <span className={`health-indicator ${isHealthy === null ? "blinking-grey" : isHealthy ? "blinking-green" : "blinking-red"}`}></span>
        </div>
      </div>
    </div>
  );
};
