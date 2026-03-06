import React from "react";
import { getTechIcon } from "../utils/icons";
import "./TechStack.css";

const TechStack: React.FC = () => {
  const techLogos = [
    { name: "React JS", category: "Frontend" },
    { name: "React Native", category: "Frontend" },
    { name: "Firebase", category: "Firebase" },
    { name: "Redux", category: "State Management" },
    { name: "Husky", category: "Code Quality" },
    { name: "Socket.io", category: "Real-Time" },
    { name: "Stripe", category: "Payments" },
    { name: "Razorpay", category: "Payments" },
    { name: "MobX", category: "State Management" },
  ];

  return (
    <section className="tech-stack-section">
      <div className="container">
        <h2 className="tech-stack-title">Tech Stack</h2>
        <p className="tech-stack-subtitle">Technologies I work with</p>

        <div className="tech-grid">
          {techLogos.map((tech, index) => {
            const { icon: Icon, color } = getTechIcon(tech.name);
            return (
              <div
                key={tech.name}
                className="tech-item"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div
                  className="tech-icon"
                  style={{
                    background: `linear-gradient(135deg, ${color}20, ${color}10)`,
                    color: color,
                    borderColor: `${color}40`,
                  }}
                >
                  {Icon && <Icon />}
                </div>
                <div className="tech-info">
                  <h3 className="tech-name">{tech.name}</h3>
                  <span className="tech-category">{tech.category}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
