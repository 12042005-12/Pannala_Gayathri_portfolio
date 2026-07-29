import React, { useState } from 'react';
import './Contact.css';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Contact = () => {
  const [ref, isVisible] = useScrollAnimation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  const mailtoLink = `mailto:gayathriravinderreddy@gmail.com?subject=${encodeURIComponent(
    `Contact from ${formData.name}`
  )}&body=${encodeURIComponent(
    `Email: ${formData.email}\n\nMessage:\n${formData.message}`
  )}`;

  window.location.href = mailtoLink;

  setFormData({
    name: '',
    email: '',
    message: '',
  });
};

  return (
    <section id="contact" className="contact" ref={ref}>
      <div className="section-header">
        <h2 className="section-title">Get In Touch</h2>
        <div className="title-underline"></div>
        <p className="section-subtitle">
          I'm always open to discussing new opportunities and interesting projects.
        </p>
      </div>
      <div className={`contact-container ${isVisible ? 'section-enter-active' : 'section-enter'}`}>
        <div className="contact-info">
          <div className="contact-item">
            <div className="contact-icon">
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 7C5 5.89543 5.89543 5 7 5H23C24.1046 5 25 5.89543 25 7V23C25 24.1046 24.1046 25 23 25H7C5.89543 25 5 24.1046 5 23V7Z"
                  stroke="#6B73FF"
                  strokeWidth="2"
                />
                <path
                  d="M5 9L15 16L25 9"
                  stroke="#6B73FF"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <div>
              <h4>Email</h4>
              <a href="mailto:gayathriravinderreddy@gmail.com">gayathriravinderreddy@gmail.com</a>
            </div>
          </div>
          <div className="contact-item">
            <div className="contact-icon">
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 25C20.5228 25 25 20.5228 25 15C25 9.47715 20.5228 5 15 5C9.47715 5 5 9.47715 5 15C5 20.5228 9.47715 25 15 25Z"
                  stroke="#6B73FF"
                  strokeWidth="2"
                />
                <path
                  d="M15 10C12.7909 10 11 11.7909 11 14C11 16.2091 12.7909 18 15 18C17.2091 18 19 16.2091 19 14C19 11.7909 17.2091 10 15 10Z"
                  stroke="#6B73FF"
                  strokeWidth="2"
                />
              </svg>
            </div>
            <div>
              <h4>LinkedIn</h4>
              <a
                href="https://linkedin.com/in/pannala-gayathrireddy12"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/pannala-gayathrireddy12
              </a>
            </div>
          </div>
          <div className="contact-item">
            <div className="contact-icon">
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 5C10 5 6 9 6 14C6 18 8.5 21.5 12 23C12.5 23.1 12.7 22.8 12.7 22.5V20.5C10.2 21 9.5 19.5 9.5 19.5C9 18.5 8.5 18.2 8.5 18.2C7.5 17.5 8.6 17.5 8.6 17.5C9.7 17.6 10.2 18.6 10.2 18.6C11.2 20.1 12.7 19.6 12.8 19.4C12.9 18.7 13.2 18.2 13.5 17.9C10.5 17.5 7.3 16.4 7.3 12.5C7.3 11.4 7.7 10.5 8.2 9.8C8.1 9.5 7.7 8.3 8.4 6.8C8.4 6.8 9.3 6.5 12.7 8.2C13.6 8 14.6 7.9 15.6 7.9C16.6 7.9 17.6 8 18.5 8.2C21.9 6.5 22.8 6.8 22.8 6.8C23.5 8.3 23.1 9.5 23 9.8C23.5 10.5 23.9 11.4 23.9 12.5C23.9 16.4 20.7 17.5 17.7 17.9C18.1 18.3 18.4 19 18.4 20V22.5C18.4 22.8 18.6 23.1 19.1 23C22.6 21.5 25 18 25 14C25 9 21 5 15 5Z"
                  fill="#6B73FF"
                />
              </svg>
            </div>
            <div>
              <h4>GitHub</h4>
              <a
                href="https://github.com/12042005-12"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/12042005-12
              </a>
            </div>
          </div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="6"
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;


