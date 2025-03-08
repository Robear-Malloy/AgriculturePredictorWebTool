import "./Services.css";

export const Services = () => {
  return (
    <div id="services" className="services-container">
      <h1 className="services-title">Our Services</h1>
      <div className="services-grid">
        <div className="service">
          <h2>Data Analysis</h2>
          <p>
            We provide advanced data analytics to help farmers make informed 
            decisions and optimize crop yields using predictive modeling and AI-driven insights.
          </p>
          <a href="#contact" className="service-btn">Contact Us</a>
        </div>
        <div className="service">
          <h2>Expert Support</h2>
          <p>
            Our team of agricultural specialists is available to offer guidance, 
            ensuring you maximize efficiency and sustainability in your farming practices.
          </p>
          <a href="#contact" className="service-btn">Contact Us</a>
        </div>
        <div className="service">
          <h2>Customized Solutions</h2>
          <p>
            We tailor our services to meet your specific farming needs, providing 
            scalable solutions that fit your goals and operational scale.
          </p>
          <a href="#contact" className="service-btn">Contact Us</a>
        </div>
      </div>
    </div>
  );
};
