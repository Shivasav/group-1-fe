import React from "react";
import "./ContactUs.css"; // Create a CSS file for styling if needed

const ContactUs = () => {
  return (
    <div className="contact-page">
      <h1>Contact Us</h1>

      {/* Contact Information Section */}
      <div className="contact-info">
        <div className="info-item">
          <h3>Location:</h3>
          <p>1234 Main St, Suite 100, Cityville, Country</p>
        </div>
        <div className="info-item">
          <h3>Phone:</h3>
          <p>+1 (234) 567-8901</p>
        </div>
        <div className="info-item">
          <h3>Email:</h3>
          <p>contact@company.com</p>
        </div>
      </div>

      {/* Google Map Section */}
      <div className="map-section">
        <h3>Find Us Here:</h3>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345098047!2d144.95373531531735!3d-37.81627997975195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43bf1ab947%3A0x506f74c62d57a00!2s1234%20Main%20St%2C%20Cityville%2C%20Country!5e0!3m2!1sen!2s!4v1610000000000!5m2!1sen!2s"
          width="100%"
          height="400"
          allowFullScreen=""
          loading="lazy"
          title="Company Location"
        ></iframe>
      </div>

      {/* Contact Form */}
      <div className="contact-form">
        <h3>Get in Touch</h3>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject:</label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Subject"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Your Message"
              required
            ></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
