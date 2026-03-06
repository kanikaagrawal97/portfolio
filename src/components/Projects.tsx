import { webosmoticProjects, neoyug } from "../constants/constants";
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
  const [showAllHighlights, setShowAllHighlights] = useState(false);
  const [imgError, setImgError] = useState(false);

  const mainTech = project.technologies[0] || "";
  const { icon: MainIcon, color: techColor } = getTechIcon(mainTech);

  const displayedTech = showAllTech
    ? project.technologies
    : project.technologies.slice(0, 4);

  const displayedHighlights = showAllHighlights
    ? project.highlights
    : project.highlights?.slice(0, 2);

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

        {project.thumbnail && !imgError ? (
          <div className="project-thumbnail">
            <img
              src={getAssetUrl(`assets/projects/${project.thumbnail}`)}
              alt={project.title}
              onError={() => setImgError(true)}
            />
          </div>
        ) : (
          <div
            className="project-placeholder"
            style={{
              background: `linear-gradient(135deg, ${techColor}22 0%, ${techColor}44 100%)`,
              border: `1px solid ${techColor}33`,
            }}
          >
            {MainIcon && (
              <MainIcon size={48} style={{ color: techColor, opacity: 0.8 }} />
            )}
          </div>
        )}

        <div className="project-body">
          {project.description && (
            <p className="project-description">{project.description}</p>
          )}

          {project.highlights && (
            <div className="highlights-container">
              <ul className="project-highlights">
                {displayedHighlights?.map((highlight: string, i: number) => (
                  <li key={i}>{highlight}</li>
                ))}
              </ul>
              {project.highlights.length > 2 && (
                <button
                  className="toggle-highlights"
                  onClick={() => setShowAllHighlights(!showAllHighlights)}
                >
                  {showAllHighlights ? "Show less" : "Show more"}
                </button>
              )}
            </div>
          )}
        </div>

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
          {project.technologies.length > 4 && (
            <span
              className="tech-tag clickable"
              onClick={() => setShowAllTech(!showAllTech)}
            >
              {showAllTech
                ? "Show less"
                : `+${project.technologies.length - 4}`}
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
        <h2
          className="section-title"
          style={{ marginTop: "var(--spacing-xl)" }}
        >
          Projects
        </h2>

        <h3 className="subsection-title">Webosmotic Private Limited</h3>
        <div className="projects-grid">
          {webosmoticProjects.map((project) => (
            <ProjectCard
              key={`webosmotic-${project.title}`}
              project={project}
            />
          ))}
        </div>

        <h3 className="subsection-title">Neoyug Tech</h3>
        <div className="projects-grid">
          {neoyug.map((project) => (
            <ProjectCard key={`neoyug-${project.title}`} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
