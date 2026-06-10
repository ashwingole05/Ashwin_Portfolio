import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import './About.css'

const About = () => {

  const personalInfo = {
    name: "Ashwin Pandurang Gole",
    github:"https://github.com/ashwingole05/",
email: "https://mail.google.com/mail/?view=cm&to=ashwingole05@gmail.com",
    linkedin: "https://www.linkedin.com/in/ashwingole05/" 
  }

  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <p className="greeting"><h2>Hi, Myself </h2></p>
            <h1 className="name">{personalInfo.name}</h1>
            <h2 className="tagline">I build things for the web.</h2>
            <p className="description">
              I'm a Full Stack Developer specializing in building exceptional digital experiences. 
              Currently, I'm focused on building accessible, human-centered products using modern 
              web technologies like React, Spring Boot, and cloud platforms.
            </p>
            <div className="cta-buttons">
              <a href="#contact" className="btn btn-primary">Get In Touch</a>
              <a href="#projects" className="btn btn-secondary">View My Work</a>
            </div>
            <div className="social-links">
              <a 
                href={personalInfo.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="GitHub"
                title="GitHub Profile"
              >
                <FaGithub />
              </a>
              <a 
                href={personalInfo.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="LinkedIn"
                title="LinkedIn Profile"
              >
                <FaLinkedin />
              </a>
              <a 
                 href={personalInfo.email}
                 target="_blank"
                 rel="noopener noreferrer" 
                 aria-label="Email"
                 title="Send Email"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>
          
          <div className="about-image">
            <div className="image-border">
              <img 
                src="images/profile.png" 
                alt="Profile" 
                loading="lazy"
                
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
