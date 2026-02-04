import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';

import { SectionContainer } from '../components/SectionContainer';
import { ProjectGrid } from '../components/ProjectGrid';

import projectsData from '../data/projects.json';
import { Project, ProjectStatus } from "../types";

// Helper to convert JSON status to typed ProjectStatus
const mapStatus = (status: string): ProjectStatus => {
  const upper = status.toLowerCase();
  if (upper === "ongoing") return "Ongoing";
  if (upper === "completed") return "Completed";
  if (upper === "upcoming") return "Upcoming";
  return "Upcoming"; // fallback
};

// Convert JSON to strongly typed Project[]
const allProjects: Project[] = projectsData.map((p) => ({
  ...p,
  status: mapStatus(p.status),
}));

export const ProjectsPage: React.FC = () => {
  const { status } = useParams<{ status: string }>();

  const filteredProjects = useMemo(() => {
    if (!status || status.toLowerCase() === "all") {
      return allProjects;
    }
    return allProjects.filter(
      (project) => project.status.toLowerCase() === status.toLowerCase()
    );
  }, [status]);

  const pageTitle = status
    ? `${status.charAt(0).toUpperCase() + status.slice(1)} Projects`
    : "All Projects";

  return (
    <div>
      {/* HERO SECTION */}
      <div className="pt-20 md:pt-24 bg-brandDark text-white">
        <SectionContainer>
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {pageTitle}
            </h1>
            <p className="text-xl md:text-2xl text-gray-300">
              Discover our portfolio of exceptional developments
            </p>
          </div>
        </SectionContainer>
      </div>

      {/* PROJECT GRID */}
      <SectionContainer className="bg-white">
        {filteredProjects.length > 0 ? (
          <ProjectGrid projects={filteredProjects} />
        ) : (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">
              No projects found in this category.
            </p>
          </div>
        )}
      </SectionContainer>
    </div>
  );
};
