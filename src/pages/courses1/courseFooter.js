import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ContactSection = () => {
  return (
    <section className="contact-section bg-warning text-dark py-5">
      <div className="container d-flex justify-content-between align-items-center">
        <div>
          <h2 className="fw-bold">Get In Touch</h2>
          <p className="text-muted">Lorem ipsum dolor sit amet, consectetur</p>
        </div>
        <div className="input-group w-50 shadow-sm">
          <input
            type="text"
            className="form-control border-0"
            placeholder="Your Message"
          />
          <button className="btn btn-warning border-0 fw-bold">SEND</button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
