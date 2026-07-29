import React from 'react';
import './Projects.css';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Projects = () => {
  const [ref, isVisible] = useScrollAnimation();
  const projects = [
    {
      title: 'Student Attendance Management System',
      description: 'A React-based application for managing student attendance with an intuitive interface and real-time updates.',
      tech: ['React', 'JavaScript', 'CSS'],
      github:'http://github.com/12042005-12/Attendance-Tracker',
    },
    {
      title: 'Thyroid Disease Detection using Machine Learning',
      description: 'A machine learning project that uses ML algorithms to detect thyroid diseases with high accuracy.',
      tech: ['Python', 'Machine Learning', 'Data Science'],
      github: 'https://github.com/12042005-12/Thyroid-detection',
    },
    {
      title: 'AI Resume and Portfolio Builder',
      description: 'An intelligent application that helps users create professional resumes and portfolios using AI assistance.',
      tech: ['React', 'AI/ML', 'JavaScript'],
      github:'https://github.com/12042005-12/AI_RESUME_PORTFOLIO_BUILDER',
    },
    {
      title: 'Make It Wear It',
      description: 'A fashion and clothing application built with modern web technologies.',
      tech: ['React', 'JavaScript', 'CSS'],
      github: 'https://github.com/12042005-12/make-it-wear-it',
    },
    {
  title: 'Birth Rate Analysis',
  description: 'A data analysis project that explores birth rate trends using statistical analysis and visualizations to identify patterns, demographic insights, and key factors influencing birth rates.',
  tech: ['Python', 'Pandas', 'Matplotlib', 'Data Analysis'],
  github: 'https://github.com/12042005-12/Birthrate_analysis',
},
  ];

  return (
    <section id="projects" className="projects" ref={ref}>
      <div className="section-header">
        <h2 className="section-title">Projects</h2>
        <div className="title-underline"></div>
      </div>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`project-card ${isVisible ? 'project-card-enter-active' : 'project-card-enter'}`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="project-icon">
              <svg
                width="50"
                height="50"
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="10"
                  y="10"
                  width="30"
                  height="30"
                  rx="5"
                  fill="#6B73FF"
                  opacity="0.2"
                />
                <path
                  d="M20 25 L30 25 M25 20 L25 30"
                  stroke="#6B73FF"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-tech">
              {project.tech.map((tech, techIndex) => (
                <span key={techIndex} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                View on GitHub →
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;


