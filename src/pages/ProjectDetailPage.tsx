import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { SectionContainer } from '../components/SectionContainer';
import { LeadForm } from '../components/LeadForm';
import projectsData from '../data/projects.json';
import { Project } from '../types';

const allProjects = projectsData as Project[];

export const ProjectDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = allProjects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="pt-20 md:pt-24">
        <SectionContainer>
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Project Not Found</h1>
            <Link to="/projects/ongoing" className="text-primary hover:underline">
              View all projects
            </Link>
          </div>
        </SectionContainer>
      </div>
    );
  }

  const statusColors = {
    Ongoing: 'bg-yellow-500',
    Completed: 'bg-green-500',
    Upcoming: 'bg-blue-500',
  };

  return (
    <div>
      {/* Hero Image */}
      <div className="pt-20 md:pt-24">
        <div className="relative h-64 md:h-96 lg:h-screen">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
            <div className="max-w-7xl mx-auto">
              <div className={`inline-block px-4 py-2 rounded-full text-white text-sm font-semibold mb-4 ${statusColors[project.status]}`}>
                {project.status}
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                {project.title}
              </h1>
              <p className="text-xl md:text-2xl text-gray-200">{project.location}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Project Overview */}
      <SectionContainer className="bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Overview</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">{project.description}</p>

          {project.specifications && (
            <div className="bg-gray-50 rounded-lg p-6 md:p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Specifications</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.specifications.area && (
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Total Area</h4>
                    <p className="text-gray-700">{project.specifications.area}</p>
                  </div>
                )}
                {project.specifications.units && (
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Total Units</h4>
                    <p className="text-gray-700">{project.specifications.units}</p>
                  </div>
                )}
                {project.specifications.type && (
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Unit Types</h4>
                    <p className="text-gray-700">{project.specifications.type}</p>
                  </div>
                )}
                {project.specifications.amenities && (
                  <div className="md:col-span-2">
                    <h4 className="font-semibold text-gray-900 mb-2">Amenities</h4>
                    <ul className="grid grid-cols-2 md:grid-cols-3 gap-2">
                      {project.specifications.amenities.map((amenity, index) => (
                        <li key={index} className="text-gray-700 flex items-center">
                          <span className="text-primary mr-2">✓</span>
                          {amenity}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Gallery */}
          {project.gallery && project.gallery.length > 0 && (
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Gallery</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {project.gallery.map((image, index) => (
                  <div key={index} className="relative h-64 overflow-hidden rounded-lg">
                    <img
                      src={image}
                      alt={`${project.title} - Image ${index + 1}`}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </SectionContainer>

      {/* Lead Form */}
      <SectionContainer className="bg-brandDark">
        <div className="max-w-2xl mx-auto">
          <LeadForm title="Register to Explore" showWhatsApp={true} />
        </div>
      </SectionContainer>
    </div>
  );
};
