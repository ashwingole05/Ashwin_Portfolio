import React from 'react'
import { FaDownload, FaBriefcase, FaGraduationCap, FaAward } from 'react-icons/fa'
import './Resume.css'

const Resume = () => {
  const experience = [
   
  
    {
      title: 'Java Full Stack Developer Intern',
      company: 'Zidio Development',
      period: '1 Month',
      type: 'Internship',
      verificationLinks: [
        {
          label: 'Intern ID',
          value: '6a4942bb247c6d64ce4381f8',
          url: 'https://zidio.in/p/6a4942bb247c6d64ce4381f8'
        },
        {
          label: 'Internship Certificate',
          value: 'https://zidio.in/verify/ZID-V-F3726F4514B5',
          url: 'https://zidio.in/verify/ZID-V-F3726F4514B5'
        },
        {
          label: 'Training Completion Certificate',
          value: 'https://zidio.in/verify/ZID-V-85541C886C75',
          url: 'https://zidio.in/verify/ZID-V-85541C886C75'
        },
        {
          label: 'Experience Certificate',
          value: 'https://zidio.in/verify/ZID-V-311D927703F9',
          url: 'https://zidio.in/verify/ZID-V-311D927703F9'
        }
      ],
      description: 'Worked on full-stack application development using Java, Spring Boot, React.js, and PostgreSQL, including REST API development, database integration, CRUD operations, debugging, and version control using Git and GitHub.',
      achievements: [
        'Gained hands-on industry experience by developing REST APIs, database integrations, role-based authentication, and CRUD functionality using Spring Boot and PostgreSQL.',
        'Successfully applied Java Full Stack development skills in a real-world project using Spring Boot, React.js, PostgreSQL, Git, GitHub, and Postman.'
      ]
    }
  ]

  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'Tilak College of Science and Commerce Vashi',
      period: '2025 - 2026',
      marks: '8.40 CGPA',
      description: ' Mumbai University'
    },
     {
      degree: 'Higher Secondary School Certificate Examination (HSC)',
      institution: 'Karmaveer Bhaurao Patil College Vashi',
      period: '2023',
      marks: '53.33 %', 
      description:'Maharashtra State Board'
    },

    {
      degree: 'Secondary School Certificate Examination (SSC) ',
      institution: 'Vakola English School ',
      period: '2021',
      marks: '84.20 %',
      description: 'Maharashtra State Board'
    }
  ]

  const certifications = [
    {
      title: 'Java Core - It Vedanta'
    },
    {
      title: 'Spring Boot - It Vedanta'
    },
    {
      title: 'React - It Vedanta'
    },
    {
      title: 'MySQL - It Vedanta'
    },
    {
      title: 'Internship Completion Certificate',
      tag: 'Internship - Zidio Development'
    },
    {
      title: 'Training Completion Certificate',
      tag: 'Internship - Zidio Development'
    },
    {
      title: 'Experience Certificate',
      tag: 'Internship - Zidio Development'
    }
  ]

  return (
    <section id="resume" className="resume section">
      <div className="container">
        <h2 className="section-title">Resume</h2>
        
        <div className="resume-download">
          <a href="/resume.pdf" download="resume.pdf" className="download-btn">
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
                      <div>
                        <h4>{exp.title}</h4>
                        {exp.type && <span className="experience-tag">{exp.type}</span>}
                      </div>
                      <span className="timeline-period">{exp.period}</span>
                    </div>
                    {exp.verificationLinks && (
                      <div className="timeline-verifications">
                        {exp.verificationLinks.map((link, idx) => (
                          <a
                            key={idx}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="timeline-verification"
                          >
                            <span>{link.label}:</span>
                            <span>{link.value}</span>
                          </a>
                        ))}
                      </div>
                    )}
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
                  <div>
                    {cert.tag && <span className="certification-tag">{cert.tag}</span>}
                    <p>{cert.title}</p>
                  </div>
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
