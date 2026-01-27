import { education } from "../constants/constants";
import "./Education.css";

const Education = () => {
  return (
    <section id="education" className="education-section">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="education-grid">
          {education.map((edu, index) => (
            <div key={index} className="education-card">
              <h3 className="institution">{edu.institution}</h3>
              <p className="degree">{edu.degree}</p>
              <span className="edu-duration">{edu.duration}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
