import React from 'react'
import { FaDownload, FaBriefcase, FaGraduationCap, FaAward } from 'react-icons/fa'
import './Resume.css'

const Resume = () => {
  const experience = [
   
  
    {
      title: 'Junior Developer',
      company: 'It Vedanta',
      period: 'Feb 2025 - Oct 2025',
      description: 'Assisted in frontend development and learned modern web technologies. Contributed to various projects and gained hands-on experience.',
      achievements: [
        'Developed reusable React components',
        'Improved page load times by 25%'
      ]
    }
  ]

  const education = [
     {
      degree: 'Secondary School Certificate Examination (SSC) ',
      institution: 'Vakola English School ',
      period: '2021',
      marks: '84.20 %',
      description: 'Maharashtra State Board'
    },
     {
      degree: 'Higher Secondary School Certificate Examination (HSC)',
      institution: 'Karmaveer Bhaurauo Patil College Vashi',
      period: '2023',
      marks: '53.33 %', 
      description:'Maharashtra State Board'
    },
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'Tilak College of Science and Commerce Vashi',
      period: '2025 - 2026',
      marks: '8.5 CGPA', 
      description: ' ( Mumbai University ) | Pursuing in the Third Year (Final Year ) . Focus on Programming and Database Management'
    }
  ]

  const certifications = [
   
   'Java Core -It Vedanta',
   'Spring Boot - It Vedanta',
   'React - It Vedanta',
   'MySQL - It Vedanta'
  ]

  return (
    <section id="resume" className="resume section">
      <div className="container">
        <h2 className="section-title">Resume</h2>
        
        <div className="resume-download">
          <a href="/my-portfolio/resume.pdf" download="resume.pdf" className="download-btn">
            <FaDownload />
            <span>Download Resume</span>
          </a>
        </div>

        <div className="resume-content">
          {/* Experience Section */}
          <div className="resume-section">
            <div className="resume-section-header">
              <FaBriefcase className="section-icon" />
              <h3>Work Experience</h3>
            </div>
            <div className="timeline">
              {experience.map((exp, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <div className="timeline-header">
                      <h4>{exp.title}</h4>
                      <span className="timeline-period">{exp.period}</span>
                    </div>
                    <p className="timeline-company">{exp.company}</p>
                    <p className="timeline-description">{exp.description}</p>
                    <ul className="timeline-achievements">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div className="resume-section">
            <div className="resume-section-header">
              <FaGraduationCap className="section-icon" />
              <h3>Education</h3>
            </div>
            <div className="timeline">
              {education.map((edu, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <div className="timeline-header">
                      <h4>{edu.degree}</h4>
                      <span className="timeline-period">{edu.period}</span>
                    </div>
                    {edu.marks && (
        <span className="marks-badge">{edu.marks}</span>
      )}
                    <p className="timeline-company">{edu.institution}</p>
                    <p className="timeline-description">{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Section */}
          <div className="resume-section">
            <div className="resume-section-header">
              <FaAward className="section-icon" />
              <h3>Certifications</h3>
            </div>
            <div className="certifications-grid">
              {certifications.map((cert, index) => (
                <div key={index} className="certification-card">
                  <FaAward className="cert-icon" />
                  <p>{cert}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Resume