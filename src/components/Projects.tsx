import {
  personalProjects,
  webosmoticProjects,
  bcubeProjects,
  jeavioProjects,
} from "../constants/constants";
import { getSocialIcon, getTechIcon } from "../utils/icons";
import { getAssetUrl } from "../utils/assets";
import { useState } from "react";
import "./Projects.css";

interface Project {
  title: string;
  description: string;
  links?: {
    webLink?: string;
    githubLink?: string;
    playStoreLink?: string;
  };
  highlights?: string[];
  technologies: string[];
  thumbnail?: string;
}

const ProjectCard = ({ project }: { project: Project }) => {
  const [showAllTech, setShowAllTech] = useState(false);

  const displayedTech = showAllTech
    ? project.technologies
    : project.technologies.slice(0, 4);

  return (
    <div className="project-card">
      <div className="project-content">
        <div className="project-header">
          <h3 className="project-title">{project.title}</h3>
          <div className="project-links">
            {project.links &&
              Object.entries(project.links).map(([key, url]) => {
                const { icon: Icon, color } = getSocialIcon(key);
                return (
                  <a
                    key={key}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={key}
                  >
                    {Icon && <Icon size={20} style={{ color }} />}
                  </a>
                );
              })}
          </div>
        </div>

        {project.thumbnail && (
          <div className="project-thumbnail">
            <img
              src={getAssetUrl(`assets/projects/${project.thumbnail}`)}
              alt={project.title}
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />
          </div>
        )}

        <p className="project-description">{project.description}</p>

        {project.highlights && (
          <ul className="project-highlights">
            {project.highlights
              .slice(0, 2)
              .map((highlight: string, i: number) => (
                <li key={i}>{highlight}</li>
              ))}
          </ul>
        )}

        <div className="project-tech">
          {displayedTech.map((tech: string, i: number) => {
            const { icon: Icon, color } = getTechIcon(tech);
            return (
              <span
                key={i}
                className="tech-tag"
                style={{ border: `1px solid ${color || "transparent"}` }}
              >
                {Icon && (
                  <Icon
                    style={{
                      color: color,
                      marginRight: "4px",
                      verticalAlign: "middle",
                    }}
                  />
                )}
                {tech}
              </span>
            );
          })}
          {!showAllTech && project.technologies.length > 4 && (
            <span
              className="tech-tag"
              onClick={() => setShowAllTech(true)}
              style={{ cursor: "pointer" }}
            >
              +{project.technologies.length - 4}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">Personal Projects</h2>
        <div className="projects-grid">
          {personalProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>

        <h2
          className="section-title"
          style={{ marginTop: "var(--spacing-xl)" }}
        >
          Professional Work
        </h2>

        <h3 className="subsection-title">Jeavio Private Limited</h3>
        <div className="projects-grid">
          {jeavioProjects.map((project) => (
            <ProjectCard key={`jeavio-${project.title}`} project={project} />
          ))}
        </div>

        <h3 className="subsection-title">Webosmotic Private Limited</h3>
        <div className="projects-grid">
          {webosmoticProjects.map((project) => (
            <ProjectCard
              key={`webosmotic-${project.title}`}
              project={project}
            />
          ))}
        </div>

        <h3 className="subsection-title">Bcube Solutions</h3>
        <div className="projects-grid">
          {bcubeProjects.map((project) => (
            <ProjectCard key={`bcube-${project.title}`} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
