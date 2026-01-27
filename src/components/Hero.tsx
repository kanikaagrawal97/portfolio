import { myDetails } from "../constants/constants";
import { FaLinkedin, FaDownload } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "./Hero.css";

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <p
              className="hero-greeting animate-fade-in"
              style={{ animationDelay: "0.1s" }}
            >
              Hi, my name is
            </p>
            <h1
              className="hero-name animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              {myDetails.name}
            </h1>
            <h2
              className="hero-title animate-fade-in"
              style={{ animationDelay: "0.3s" }}
            >
              {myDetails.title}
            </h2>
            <div
              className="hero-summary animate-fade-in"
              style={{ animationDelay: "0.4s" }}
            >
              {myDetails.summary.map((paragraph, index) => (
                <p key={`summary-${index}`}>{paragraph}</p>
              ))}
            </div>

            <div
              className="hero-actions animate-fade-in"
              style={{ animationDelay: "0.5s" }}
            >
              <a
                href={myDetails.linkedinLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-with-icon"
                aria-label="Connect on LinkedIn"
                title="Connect on LinkedIn"
              >
                <span className="btn-icon">
                  <FaLinkedin size={18} />
                </span>
                <span className="btn-label">Connect on LinkedIn</span>
              </a>
              <a
                href={`mailto:${myDetails.email}`}
                className="btn btn-outline btn-with-icon"
                aria-label="Contact via Email"
                title="Contact via Email"
              >
                <span className="btn-icon">
                  <MdEmail size={18} />
                </span>
                <span className="btn-label">Contact Me</span>
              </a>
              <a
                href={`/assets/${myDetails.resume}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-with-icon"
                download
                aria-label="Download Resume"
                title="Download Resume"
              >
                <span className="btn-icon">
                  <FaDownload size={18} />
                </span>
                <span className="btn-label">Download Resume</span>
              </a>
            </div>
          </div>

          <div
            className="hero-avatar-container animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="hero-avatar-wrapper">
              <img
                src={`/assets/${myDetails.avatar}`}
                alt={myDetails.name}
                className="hero-avatar"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
