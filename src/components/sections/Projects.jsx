import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce platform with product management, cart functionality, and payment processing.',
      image: 'bg-gradient-to-r from-blue-500 to-purple-600',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      githubLink: 'https://github.com',
      liveLink: 'https://example.com'
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates and team collaboration features.',
      image: 'bg-gradient-to-r from-green-500 to-teal-500',
      technologies: ['Vue.js', 'Firebase', 'Tailwind CSS'],
      githubLink: 'https://github.com',
      liveLink: 'https://example.com'
    },
    {
      title: 'Health & Fitness Tracker',
      description: 'A mobile application for tracking fitness goals, nutrition, and health metrics with data visualization.',
      image: 'bg-gradient-to-r from-red-500 to-orange-500',
      technologies: ['React Native', 'Redux', 'Express', 'PostgreSQL'],
      githubLink: 'https://github.com',
      liveLink: 'https://example.com'
    },
    {
      title: 'AI Content Generator',
      description: 'A web application that leverages AI to generate content for marketing, blogs, and social media.',
      image: 'bg-gradient-to-r from-purple-500 to-pink-500',
      technologies: ['React', 'Python', 'TensorFlow', 'OpenAI API'],
      githubLink: 'https://github.com',
      liveLink: 'https://example.com'
    },
    {
      title: 'Real Estate Platform',
      description: 'A platform for property listings with advanced search, virtual tours, and appointment scheduling.',
      image: 'bg-gradient-to-r from-yellow-400 to-amber-500',
      technologies: ['Next.js', 'Node.js', 'MongoDB', 'Google Maps API'],
      githubLink: 'https://github.com',
      liveLink: 'https://example.com'
    },
    {
      title: 'Social Media Dashboard',
      description: 'A dashboard for managing and analyzing social media accounts with scheduling and analytics.',
      image: 'bg-gradient-to-r from-cyan-500 to-blue-500',
      technologies: ['React', 'Express', 'Chart.js', 'Social Media APIs'],
      githubLink: 'https://github.com',
      liveLink: 'https://example.com'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-800 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <div className="w-16 h-1 bg-blue-400 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-300 text-lg">
            Here are some of the projects I've worked on. Each one represents a unique challenge and solution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-blue-500/10 transition-all hover:-translate-y-1"
            >
              <div className={`h-48 ${project.image} flex items-center justify-center text-2xl font-bold text-white`}>
                {project.title.charAt(0)}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-gray-700 text-xs px-2 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between">
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    <FaGithub /> Code
                  </a>
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
