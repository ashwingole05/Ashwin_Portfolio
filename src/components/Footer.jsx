import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  // UPDATE THESE WITH YOUR ACTUAL INFORMATION
  const socialLinks = {
    github: "https://github.com/ashwingole05",
    linkedin: "https://linkedin.com/in/ashwingole05/",
    email: "https://mail.google.com/mail/?view=cm&to=ashwingole05@gmail.com"
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-logo">
              <span className="logo-bracket">{'<'}</span>
           Ashwin
              <span className="logo-bracket">{'/>'}</span>
            </h3>
            <p className="footer-description">
              Building digital experiences that make a difference.
            </p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#resume">Resume</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Connect</h4>
            <div className="footer-social">
              <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href={socialLinks.email}target="_blank" rel="noopener noreferrer" aria-label="Email">
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {currentYear} Ashwin. Built with <FaHeart className="heart-icon" /> using React
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer