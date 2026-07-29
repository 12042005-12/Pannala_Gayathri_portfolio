import React from 'react';
import './About.css';
import useScrollAnimation from '../hooks/useScrollAnimation';

const About = () => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section id="about" className="about" ref={ref}>
      <div className="section-header">
        <h2 className="section-title">About Me</h2>
        <div className="title-underline"></div>
      </div>
      <div className={`about-content ${isVisible ? 'section-enter-active' : 'section-enter'}`}>
        <div className="about-text">
          <p>
            I'm a 3rd year Computer Science student passionate about building innovative 
            software solutions. As a Software Engineer Intern at Yugayatra Solutions, I 
            develop real-world applications that solve complex problems and deliver value 
            to users.
          </p>
          <p>
            My expertise spans web development and machine learning, with a strong foundation 
            in modern technologies including React, Python, and JavaScript. I specialize in 
            creating responsive, user-friendly interfaces and developing intelligent systems 
            that leverage data-driven insights.
          </p>
          <p>
            I'm driven by the challenge of transforming ideas into functional applications. 
            Whether it's building interactive web experiences or developing ML models for 
            predictive analytics, I approach each project with attention to clean code, 
            best practices, and scalable architecture.
          </p>
        </div>
        <div className="about-stats">
          <div className="stat-item">
            <h3>Final Year</h3>
            <p>Information TechnologyStudent</p>
          </div>
          <div className="stat-item">
            <h3>Software Engineer</h3>
            <p>Intern at Yugayatra Solutions</p>
          </div>
          <div className="stat-item">
            <h3>4+</h3>
            <p>Projects Completed</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;


