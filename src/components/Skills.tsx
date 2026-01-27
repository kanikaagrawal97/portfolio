import { skills } from "../constants/constants";
import { getTechIcon } from "../utils/icons";
import { FaCheckCircle } from "react-icons/fa";
import "./Skills.css";

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>

        <div className="skills-grid">
          {Object.entries(skills.technical).map(([category, items]) => (
            <div key={category} className="skill-category-card">
              <h3 className="skill-category-title">{category}</h3>
              <div className="skill-tags">
                {items.map((skill) => {
                  const { icon: Icon, color } = getTechIcon(skill);
                  return (
                    <span
                      key={skill}
                      className="skill-tag"
                      style={{ "--hover-color": color } as React.CSSProperties}
                    >
                      {Icon && (
                        <Icon className="skill-icon" style={{ color: color }} />
                      )}
                      {skill}
                    </span>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="soft-skills-container">
          <h2 className="section-title">Soft Skills</h2>
          <div className="soft-skills-grid">
            {skills.soft.map((skill) => (
              <div key={skill} className="soft-skill-card">
                <div className="soft-skill-icon">
                  <FaCheckCircle />
                </div>
                <span className="soft-skill-text">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
