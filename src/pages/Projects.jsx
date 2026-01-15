import React from 'react';
import { FiGithub, FiExternalLink, FiFolder } from "react-icons/fi";

const Projects = () => {
  const projectData = [
    {
      title: "Enterprise Inventory Management System",
      description: "Developed a robust inventory solution using ASP.NET Core and MS SQL Server. Features include real-time stock tracking, automated reporting, and role-based access control (RBAC).",
      techStack: [".NET Core", "SQL Server", "Entity Framework"],
      github: "https://github.com/yourusername/project1",
      live: "https://yourproject1.com"
    },
    {
      title: "E-Commerce Web API",
      description: "A RESTful API built with ASP.NET Core Web API for a modern e-commerce platform. Implemented JWT authentication, payment gateway integration, and Swagger documentation.",
      techStack: ["Web API", "C#", "PostgreSQL"],
      github: "https://github.com/yourusername/project2",
      live: "https://yourproject2.com"
    },
    {
      title: "Hospital Management Solution",
      description: "A complete management system for hospitals involving doctor scheduling, patient records, and billing modules using ASP.NET MVC 5 and jQuery AJAX.",
      techStack: ["MVC 5", "AJAX", "MS SQL Server"],
      github: "https://github.com/yourusername/project3",
      live: "https://yourproject3.com"
    },
    {
      title: "Angular Dashboard Portfolio",
      description: "A dynamic dashboard created with Angular and Tailwind CSS to visualize personal analytics and project progress with clean UI/UX components.",
      techStack: ["Angular", "Tailwind CSS", "TypeScript"],
      github: "https://github.com/yourusername/project4",
      live: "https://yourproject4.com"
    },
    {
      title: "Point of Sale (POS) System",
      description: "Desktop and Web-based hybrid POS system focusing on fast transactions, barcode scanning integration, and daily sales analytics.",
      techStack: ["C#", ".NET 6", "Entity Framework Core"],
      github: "https://github.com/yourusername/project5",
      live: "https://yourproject5.com"
    },
    {
      title: "Online Learning Platform",
      description: "A full-stack application for online courses featuring video streaming, student progress tracking, and interactive quizzes.",
      techStack: [".NET Core", "React", "SQL Server"],
      github: "https://github.com/yourusername/project6",
      live: "https://yourproject6.com"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-[#0a192f] text-white">
      <div className="container mx-auto px-6 lg:px-20">
        
        {/* Section Heading */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-4 flex items-center gap-4">
            Feature Projects
            <span className="h-[1px] w-32 bg-blue-600"></span>
          </h2>
          <p className="text-gray-400 max-w-lg italic">
            A selection of my best works in software engineering and web development.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project, index) => (
            <div 
              key={index} 
              className="group bg-[#112240] p-8 rounded-xl border border-transparent hover:border-blue-500/40 hover:-translate-y-2 transition-all duration-300 shadow-xl flex flex-col h-full"
            >
              {/* Card Top Icons */}
              <div className="flex justify-between items-center mb-8">
                <FiFolder className="text-4xl text-blue-500" />
                <div className="flex gap-4 text-xl text-gray-400">
                  <a href={project.github} target="_blank" rel="noreferrer" className="hover:text-blue-500 transition-colors">
                    <FiGithub />
                  </a>
                  <a href={project.live} target="_blank" rel="noreferrer" className="hover:text-blue-500 transition-colors">
                    <FiExternalLink />
                  </a>
                </div>
              </div>

              {/* Project Details */}
              <div className="flex-grow">
                <h3 className="text-xl font-bold mb-4 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              {/* Tech Stack Tags */}
              <div className="mt-auto flex flex-wrap gap-3">
                {project.techStack.map((tech, i) => (
                  <span key={i} className="text-[10px] font-mono text-blue-400 uppercase tracking-wider bg-blue-500/5 px-2 py-1 rounded">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;