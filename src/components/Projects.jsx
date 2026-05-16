
import React from 'react'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import './Projects.css'
import movieImage from '/images/movie.png'
import WeatherImage from '/images/weather.png'
import BookImage from '/images/book.png'
import RecipeImage from '/images/recipe.png'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Movie Search  application',
      description: 'A dynamic React-based movie discovery application that enables users to search for films and access comprehensive movie details. The platform provides an intuitive interface for exploring vast movie databases with real-time search capabilities.',
      technologies: ['React', 'JavaScript', 'HTML', 'CSS', 'Movie API'],
      github: 'https://github.com/ashwingole05/movie_search_website.git', 
      live: 'https://ashwin-movie.netlify.app/',
      image:movieImage,
      
    },
    {
      id: 2,
      title: 'Online Bookstore Application',
      description: 'A comprehensive React-based e-commerce platform for book purchasing with complete end-to-end testing implementation using React Testing Library and Jest.',
      technologies: ['React', 'JavaScript', 'HTML', 'CSS'],
      github: 'https://github.com/ashwingole05/online_book_store.git', 
      live: 'https://ashwin-bookstore.netlify.app/',
      image:BookImage,
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A responsive React application that provides real-time weather data for any city worldwide. The dashboard fetches current weather conditions from the Weatherbit API and displays key meteorological information in an intuitive, visually appealing interface.',
      technologies: ['React', 'JavaScript', 'HTML', 'CSS', 'Weatherbit API'],
      github: 'https://github.com/ashwingole05/weather_dashboard.git', 
      live: 'https://ashwin-weather-project.netlify.app/',
      image: WeatherImage,
    },
    {
      id: 4,
      title: ' Recipe Book Application',
      description: 'A comprehensive React-based e-commerce platform for book purchasing with complete end-to-end testing implementation using React Testing Library and Jest.',
      technologies: ['React', 'JavaScript', 'HTML', 'CSS'],
      github: 'https://github.com/ashwingole05/recipe_book.git', 
      live: 'https://ashwin-recipe-app.netlify.app/',
      image:RecipeImage,
    }
  ]

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} loading="lazy" />
                <div className="project-overlay">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="project-link"
                    title="View Code on GitHub"
                  >
                    <FaGithub />
                  </a>
                  <a 
                    href={project.live} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="project-link"
                    title="View Live Demo"
                  >
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-badge">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects