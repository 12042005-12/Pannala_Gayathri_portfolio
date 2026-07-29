import React from 'react';
import './Home.css';

const Home = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="home">
      <div className="home-content">
        <div className="home-text">
          <h1 className="home-title">
            Hi, I'm <span className="highlight"> Pannala Gayathri</span>
          </h1>
          <h2 className="home-subtitle">Aspiring  Software Engineer</h2>
          <p className="home-description">
            A passionate 3rd year Computer Science student with a keen interest in 
            software development and machine learning. I love building innovative solutions 
            and turning ideas into reality through code.
          </p>
          <div className="home-buttons">
            <button className="btn btn-primary" onClick={scrollToContact}>
              Get In Touch
            </button>
            <a
              href="#projects"
              className="btn btn-secondary"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
              }}
            >
              View My Work
            </a>
            <a
              href="/Pannala_Gayathri_Resume(2).pdf"
              className="btn btn-resume"
              download
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 13.3333L5 8.33333H7.5V3.33333H12.5V8.33333H15L10 13.3333Z"
                  fill="currentColor"
                />
                <path
                  d="M16.6667 15H3.33333V16.6667H16.6667V15Z"
                  fill="currentColor"
                />
              </svg>
              Download Resume
            </a>
          </div>
        </div>
        <div className="home-image">
  <img
    src="/profile.jpeg"
    alt="Pannala Gayathri"
    className="profile-photo"
  />
</div>

      </div>
    </section>
  );
};

export default Home;

