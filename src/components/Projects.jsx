
import React from 'react'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import './Projects.css'
import realImage from '/images/real.png'
import careerflowImage from '/images/careerflow.png'
import movieImage from '/images/movie.png'
import WeatherImage from '/images/weather.png'
import todoImage from '/images/todo.png'
import BookImage from '/images/book.png'
import RecipeImage from '/images/recipe.png'
import aiWorkspaceImage from '/images/aiworkspace.png'
import fieldServiceImage from '/images/fieldservice.png'
import imageStorageImage from '/images/imagestorage.png'
const Projects = () => {
  const projects = [
      {
          id: 1,
          title: 'Field Service Management System',
          description: 'Developed as an internship project using Spring Boot and React to manage work orders, service requests, technician assignments, SLA tracking, dashboards, parts and time tracking, and role-based access',
          technologies: ['Java', 'SpringBoot', 'React', 'TypeScript', 'PostgreSQL', 'JWT', 'HTML', 'CSS', 'JavaScript'],
          github: 'https://github.com/ashwingole05/Field_Service_Management_System',
          live: 'https://keystone-fieldservice.onrender.com',
          image: fieldServiceImage,
      },
      {
          id: 2,
          title: 'CareerFlow AI',
          description: 'An AI-powered career development platform that helps users create resumes, generate cover letters, explore career insights, and prepare for interviews with personalized AI assistance.',
          technologies: [ 'JavaScript', 'PostgreSQL', 'Prisma ORM', 'Google Gemini AI', 'Clerk','Next.js'],
          github: 'https://github.com/ashwingole05/CareerFlow',
          live: 'https://career-flow-mu.vercel.app/',
          image: careerflowImage,

      },
      {
          id: 3,
          title: 'AI Workspace',
          description: 'Developed an AI-powered workspace using Spring Boot and React that allows users to ask questions, generate recipes for special dishes, and create AI-generated images using Google Gemini and Pixazo.ai APIs',
          technologies: ['Java', 'SpringBoot', 'React', 'Google Gemini API', 'Pixazo.ai API', 'HTML', 'CSS', 'JavaScript'],
          github: 'https://github.com/ashwingole05/AI_workspace',
          live: 'https://ashwin-ai-workspace.onrender.com',
          image: aiWorkspaceImage,
      },

     {
      id: 4,
      title: 'Real-Time Chat Application',
      description: 'Developed a real-time chat application using Spring Boot, WebSocket, SockJS, and Thymeleaf, enabling instant communication between connected users with a responsive web interface',
      technologies: ['Java', 'SpringBoot', 'WebSocket', 'SockJs', 'Thymeleaf','Html' ,'Css','JavaScript'],
      github: 'github.com/ashwingole05/real_time_chat_application', 
      live: ' https://real-time-chat-application-xzl5.onrender.com/chat',
      image:realImage,
      
    },
      {
          id: 5,
          title: 'Image Storage Application',
          description: 'Developed an image storage application using Spring Boot and React to upload, store, and retrieve images using NeonDB PostgreSQL with support for searching images by ID and name',
          technologies: ['Java', 'SpringBoot', 'React', 'PostgreSQL', 'NeonDB', 'JPA', 'HTML', 'CSS', 'JavaScript'],
          github: 'https://github.com/ashwingole05/image-storage',
          live: 'https://image-storage-u8n8.onrender.com',
          image: imageStorageImage,
      },





     {
      id: 6,
      title: 'Movie Search  application',
      description: 'A dynamic React-based movie discovery application that enables users to search for films and access comprehensive movie details. The platform provides an intuitive interface for exploring vast movie databases with real-time search capabilities.',
      technologies: ['React', 'JavaScript', 'HTML', 'CSS', 'Movie API'],
      github: 'https://github.com/ashwingole05/movie_search_website.git', 
      live: 'https://ashwin-movie.netlify.app/',
      image:movieImage,
      
    },
      {
  id: 7,
  title: 'Todo List Application',
  description: 'A full-stack task management application built with Spring Boot and Thymeleaf, allowing users to create, update, complete, and delete tasks with persistent PostgreSQL database storage.',
  technologies: ['Java', 'Spring Boot', 'Thymeleaf', 'PostgreSQL', 'NeonDB', 'Spring Data JPA', 'Hibernate'],
  github: 'https://github.com/ashwingole05/TodoList',
  image: todoImage,
},
    {
      id: 8,
      title: 'Online Bookstore Application',
      description: 'A comprehensive React-based e-commerce platform for book purchasing with complete end-to-end testing implementation using React Testing Library and Jest.',
      technologies: ['React', 'JavaScript', 'HTML', 'CSS'],
      github: 'https://github.com/ashwingole05/online_book_store.git', 
      live: 'https://ashwin-bookstore.netlify.app/',
      image:BookImage,
    },


    {
      id: 9,
      title: 'Weather Dashboard',
      description: 'A responsive React application that provides real-time weather data for any city worldwide. The dashboard fetches current weather conditions from the Weatherbit API and displays key meteorological information in an intuitive, visually appealing interface.',
      technologies: ['React', 'JavaScript', 'HTML', 'CSS', 'Weatherbit API'],
      github: 'https://github.com/ashwingole05/weather_dashboard.git', 
      live: 'https://ashwin-weather-project.netlify.app/',
      image: WeatherImage,
    },
    {
      id: 10,
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