import React from 'react';
import './Experience.css';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Experience = () => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section id="experience" className="experience" ref={ref}>
      <div className="section-header">
        <h2 className="section-title">Experience</h2>
        <div className="title-underline"></div>
      </div>
      <div className="experience-container">
        <div className={`experience-card ${isVisible ? 'section-enter-active' : 'section-enter'}`}>
          <div className="experience-header">
            <div className="experience-icon">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="5"
                  y="5"
                  width="30"
                  height="30"
                  rx="5"
                  fill="#6B73FF"
                  opacity="0.2"
                />
                <path
                  d="M15 20 L18 23 L25 16"
                  stroke="#6B73FF"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="experience-info">
              <h3 className="experience-title">Software Engineer Intern</h3>
              <p className="experience-company">Yugayatra Solutions</p>
            </div>
          </div>
          <div className="experience-details">
            <p className="experience-description">
              Currently working as a Software Engineer Intern, gaining hands-on experience 
              in software development, collaborating with cross-functional teams, and 
              contributing to real-world projects. Learning industry best practices and 
              modern development methodologies.
            </p>
            <ul className="experience-list">
              <li>Developing and maintaining web applications</li>
              <li>Collaborating with team members on project development</li>
              <li>Learning and implementing best coding practices</li>
              <li>Contributing to software design and architecture</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;


