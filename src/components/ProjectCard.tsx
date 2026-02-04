import React from 'react';
import { Link } from 'react-router-dom';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const statusColors = {
    Ongoing: 'bg-gradient-to-r from-secondary to-secondaryDark',
    Completed: 'bg-gradient-to-r from-accent to-green-600',
    Upcoming: 'bg-gradient-to-r from-primary to-primaryDark',
  };

  return (
    <Link
      to={`/project/${project.id}`}
      className="group block card-modern transform hover:-translate-y-3"
    >
      <div className="relative h-72 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10"></div>
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
        <div className={`absolute top-4 right-4 px-4 py-2 rounded-full text-white text-xs font-bold shadow-lg backdrop-blur-sm ${statusColors[project.status]}`}>
          {project.status}
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
          <h3 className="text-2xl font-bold text-white mb-2 group-hover:scale-105 transition-transform">
            {project.title}
          </h3>
        </div>
      </div>
      <div className="p-6">
        <p className="text-gray-600 mb-3 flex items-center text-sm">
          <svg className="w-5 h-5 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          {project.location}
        </p>
        <p className="text-gray-700 text-sm line-clamp-2 mb-4">
          {project.description}
        </p>
        <div className="flex items-center text-primary font-semibold group-hover:gap-2 transition-all">
          <span>Explore Project</span>
          <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </div>
      </div>
    </Link>
  );
};
