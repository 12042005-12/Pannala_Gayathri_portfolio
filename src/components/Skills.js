import React from 'react';
import './Skills.css';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Skills = () => {
  const [ref, isVisible] = useScrollAnimation();
  const skills = [
    { name: 'Python', icon: (
      // Python SVG
      <svg width="40" height="40" viewBox="0 0 40 40"><g><ellipse cx="20" cy="20" rx="20" ry="20" fill="#306998"/><path d="M21 5c5.5 0 5 2.7 5 2.7v2.5h-7.2v1.4h8.6s4.6-.6 4.6 6.6v4.6c0 7-6 6.7-6 6.7h-2.3V25.3c0 .6-.4 1 .8 1h2.8v2.3c0 0-.1 2.7-5 2.7-4.8 0-5-2.7-5-2.7v-2.5h7.2v-1.4h-8.6s-4.7.6-4.7-6.6v-4.6c0-7.3 6.1-6.7 6.1-6.7h2.2V7c0-.7.5-1 1-1h2.6V5H21zm-3.2 1.7a1.2 1.2 0 110 2.3 1.2 1.2 0 010-2.3zm5.6 25.8a1.2 1.2 0 110-2.4 1.2 1.2 0 010 2.4z" fill="#FFD43B"/></g></svg>
    )},
    { name: 'Java', icon: (
      // Java SVG
      <svg width="40" height="40" viewBox="0 0 40 40"><ellipse cx="20" cy="20" rx="20" ry="20" fill="#F7DF1E"/><path d="M24 27c-3.2.9-6.5.8-9.3-.1-.5-.1-.6.2-.2.4 2.7 1.2 6.9 1.2 9.5.1.6-.2.5-.4 0-.4z" fill="#5382A1"/><path d="M25.4 21.6c-1.7-1.6.5-3.1.5-3.1-.6.4-1.1.8-1.4 1.2-2.5-.7-5 .3-5 .3-.1 0-.2-.1-.1-.2.4-.3 1.1-.5 2.3-.8-3.1-.7-4.6 3-4.6 3s-.1.1-.1-.1c0-.7.4-1.2.8-1.8-3-1-6.2 2.2-7.8 4.4.6-5.2 7.1-8.4 10.2-9-2.1-1.2-10.6.9-8.5 6.3.2.7.7.9.7.9 1.8-2.2 5.2-4.9 9.8-3.2z" fill="#E76F00"/></svg>
    )},
    { name: 'React', icon: (
      // React SVG
      <svg width="40" height="40" viewBox="0 0 40 40"><ellipse cx="20" cy="20" rx="20" ry="20" fill="#222"/><g><ellipse cx="20" cy="20" rx="14" ry="5.2" fill="none" stroke="#61DAFB" strokeWidth="2"/><ellipse cx="20" cy="20" rx="5.2" ry="14" fill="none" stroke="#61DAFB" strokeWidth="2"/><ellipse cx="20" cy="20" rx="14" ry="5.2" transform="rotate(60 20 20)" fill="none" stroke="#61DAFB" strokeWidth="2"/><ellipse cx="20" cy="20" rx="14" ry="5.2" transform="rotate(120 20 20)" fill="none" stroke="#61DAFB" strokeWidth="2"/><circle cx="20" cy="20" r="3" fill="#61DAFB"/></g></svg>
    )},
    { name: 'HTML', icon: (
      // HTML SVG
      <svg width="40" height="40" viewBox="0 0 40 40"><circle cx="20" cy="20" r="20" fill="#E34F26"/><path d="M12 11l2 20 6 2 6-2 2-20z" fill="#fff"/><path d="M20 31l-4-1.2-1.4-15.7h5.4V11h-8l.2 2.3 1.7 19.6 7 2z" fill="#F06529"/></svg>
    )},
    { name: 'CSS', icon: (
      // CSS SVG
      <svg width="40" height="40" viewBox="0 0 40 40"><circle cx="20" cy="20" r="20" fill="#2965F1"/><path d="M12 11l2 20 6 2 6-2 2-20z" fill="#fff"/><path d="M20 31l-4-1.2-1.4-15.7h5.4V11h-8l.2 2.3 1.7 19.6 7 2z" fill="#264DE4"/></svg>
    )},
    { name: 'JavaScript', icon: (
      // JS SVG
      <svg width="40" height="40" viewBox="0 0 40 40"><circle cx="20" cy="20" r="20" fill="#F7DF1E"/><path d="M19.2 28.3c-.4.7-1.4 1.4-2.9 1.4-1.5 0-2.4-.6-3-2.2l1.6-1c.3.6.7 1.1 1.3 1.1.7 0 1.1-.3 1.1-1.3v-7.4h2v7.6c0 1.8-.7 3.1-2.6 3.1zm7.7-1.2c-.7 1.3-2.1 1.7-3.2 1.7-1.8 0-2.9-1-3.1-2.5l1.6-1c.3.5.6 1.2 1.5 1.2.6 0 1.1-.2 1.1-1 0-.7-.4-.9-1.4-1.3l-.5-.2c-1.4-.6-2.3-1.3-2.3-2.8 0-1.4 1-2.4 2.7-2.4 1.2 0 2 .4 2.6 1.5l-1.5.9c-.3-.5-.6-.7-.9-.7s-.8.2-.8.7.3.7 1.1 1l.5.2c1.7.7 2.6 1.5 2.6 3.1 0 .5-.2 1-.4 1.4z" fill="#222"/></svg>
    )},
    { name: 'Machine Learning', icon: (
      // ML generic SVG (brain style)
      <svg width="40" height="40" viewBox="0 0 40 40"><ellipse cx="20" cy="20" rx="20" ry="20" fill="#7D4EFF"/><g><ellipse cx="16" cy="20" rx="6" ry="9" fill="#fff" opacity="0.8"/><ellipse cx="24" cy="20" rx="6" ry="9" fill="#fff" opacity="0.6"/><circle cx="16" cy="14" r="1" fill="#7D4EFF"/><circle cx="24" cy="18" r="1.2" fill="#7D4EFF"/><circle cx="20" cy="22" r="1.1" fill="#7D4EFF"/><circle cx="18" cy="26" r="0.9" fill="#7D4EFF"/><circle cx="24" cy="26" r="0.8" fill="#7D4EFF"/></g></svg>
    )},
  ];

  return (
    <section id="skills" className="skills" ref={ref}>
      <div className="section-header">
        <h2 className="section-title">Skills</h2>
        <div className="title-underline"></div>
      </div>
      <div className={`skills-container ${isVisible ? 'section-enter-active' : 'section-enter'}`}>
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <div className="skill-icon">{skill.icon}</div>
            <span className="skill-name">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};
       
export default Skills;


