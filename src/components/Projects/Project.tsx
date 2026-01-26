import React from "react";
import { motion } from "framer-motion";
import "./Project.scss";
import {
  personalProjects,
  webosmoticProjects,
  technologiesIconMapper,
} from "../../constants/constants";
import TooltipWrapper from "../TooltipWrapper/TooltipWrapper";
import GitHubIcon from "@mui/icons-material/GitHub";

function Project() {
  const renderProjectCard = (project: any) => (
    <motion.div
      className="project"
      key={project.title}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <a target="_blank" rel="noreferrer">
        <img
          src={`./assets/${project.thumbnail}`}
          alt={project.title}
          className={`zoom ${project.showFullImage ? "full-image" : ""}`}
          width="100%"
        />
      </a>
      <a target="_blank" rel="noreferrer">
        <h2>{project.title}</h2>
      </a>
      <div
        style={{
          display: "flex",
          gap: 4,
        }}
      >
        {project.technologies.map((technology: string) => (
          <TooltipWrapper tooltipText={technology} key={technology}>
            <img
              src={`./assets/icons/${(technologiesIconMapper as any)[technology]}`}
              alt={technology}
              className="techImage"
            />
          </TooltipWrapper>
        ))}
      </div>
      <p>{project.description}</p>
      <ul>
        {project.highlights?.map((highlight: string) => {
          return <li key={highlight}>{highlight}</li>;
        })}
      </ul>
      {project.links && (
        <div
          style={{
            display: "flex",
            gap: 8,
            justifyContent: "flex-end",
          }}
        >
          {Object.keys(project.links).map((linkType) => {
            return (
              <a
                target="_blank"
                key={linkType}
                rel="noreferrer"
                href={(project.links as any)[linkType]}
                className="externalLink"
              >
                {linkType === "githubLink" ? (
                  <GitHubIcon className="linkIcon" style={{ color: "black" }} />
                ) : (
                  <img
                    src={`./assets/icons/${
                      linkType === "playStoreLink"
                        ? "google-play-store.png"
                        : linkType === "appStore"
                          ? "apple-app-store.svg"
                          : "external-link.svg"
                    }`}
                    className="linkIcon"
                    alt={linkType}
                  />
                )}
              </a>
            );
          })}
        </div>
      )}
    </motion.div>
  );

  return (
    <div className="projects-container" id="projects">
      <h1>Projects</h1>

      <h2 className="section-title">Personal Projects</h2>
      <div className="projects-grid">
        {personalProjects.map((project: any) => renderProjectCard(project))}
      </div>

      <h2 className="section-title" style={{ marginTop: "80px" }}>
        Webosmotic Projects
      </h2>
      <div className="projects-grid">
        {webosmoticProjects.map((project: any) => renderProjectCard(project))}
      </div>
    </div>
  );
}

export default Project;
