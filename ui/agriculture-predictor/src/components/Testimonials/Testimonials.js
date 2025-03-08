import { useState } from "react";
import { testimonials } from "./TestimonialsData.js";
import "./Testimonials.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export const Testimonials = () => {
  const [index, setIndex] = useState(0);

  const nextTestimonial = () => {
    setIndex((prevIndex) => (prevIndex + 3) % testimonials.length);
  };

  const prevTestimonial = () => {
    setIndex((prevIndex) => (prevIndex - 3 + testimonials.length) % testimonials.length);
  };

  return (
    <div id="testimonials" className="testimonials-container">
      <h1 className="testimonials-title">Client Testimonials</h1>
      <div className="testimonials-content">
        <button className="nav-button left" onClick={prevTestimonial}>
          <FaChevronLeft />
        </button>

        <div className="testimonials-grid">
          {testimonials.slice(index, index + 4).map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <img src={testimonial.image} alt={testimonial.name} className="testimonial-img" />
              <h3 className="testimonial-name">{testimonial.name}</h3>
              <p className="testimonial-text">"{testimonial.testimony}"</p>
            </div>
          ))}
        </div>

        <button className="nav-button right" onClick={nextTestimonial}>
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};
