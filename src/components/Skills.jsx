import React from 'react'
import { 
  FaReact,  FaHtml5, FaCss3Alt, FaJs, FaPython, 
  FaGitAlt,  FaJava 
} from 'react-icons/fa'
import { 
  SiSpringboot, SiBootstrap,
  SiPostman, SiMysql 
} from 'react-icons/si'
import './Skills.css'

const Skills = () => {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: [
        { name: 'React', icon: <FaReact />, level: 90 },
        { name: 'JavaScript', icon: <FaJs />, level: 95 },
        { name: 'HTML5', icon: <FaHtml5 />, level: 95 },
        { name: 'CSS3', icon: <FaCss3Alt />, level: 90 },
        { name: 'Bootstrap', icon: <SiBootstrap />, level: 88 },
      ]
    },
    {
      category: 'Backend',
      skills: [
        { name: 'Spring Boot', icon: <SiSpringboot />, level: 88 },
        { name: 'Java', icon: <FaJava />, level: 85 }
      ]
    },
    {
      category: 'Database',
      skills: [
        { name: 'SQL', icon: <SiMysql />, level: 83 }
      ]
    },
    {
      category: 'Tools & DevOps',
      skills: [
        { name: 'GitHub', icon: <FaGitAlt />, level: 90 },
        { name: 'Postman', icon: <SiPostman />, level: 85 }
      ]
    }
  ]

  return (
    <section id="skills" className="skills section">
      <div className="container">
        <h2 className="section-title">Skills & Technologies</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3 className="category-title">{category.category}</h3>
              <div className="skills-list">
                {category.skills.map((skill, idx) => (
                  <div key={idx} className="skill-item">
                    <div className="skill-header">
                      <div className="skill-name">
                        <span className="skill-icon">{skill.icon}</span>
                        <span className="skill-text">{skill.name}</span>
                      </div>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills