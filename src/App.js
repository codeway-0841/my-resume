import "./App.css";
import {
  experienceData,
  educationData,
  projectsData,
  skillsData,
} from "./data.js";
import "./app.scss";

const Socials = () => {
  return (
    <div className="socials">
      <a className="blue" href="https://github.com/codeway-0841" title="Github">
        <i class="fab fa-github"></i>
        <p>codeway-0841</p>
      </a>
      <a className="blue" href="mailto: public.codeway@gmail.com" title="Mail">
        <i class="far fa-envelope"></i>
        <p>public.codeway@gmail.com</p>
      </a>
      <a
        className="blue"
        href="https://www.linkedin.com/in/ruslan-ablyamitov-0841/"
        title="LinkedIn"
      >
        <i class="fab fa-linkedin"></i>
        <p>Ruslan Ablyamitov</p>
      </a>
      <a
        className="blue"
        href="https://www.codeway.io/"
        title="Personal website"
      >
        <i class="fas fa-globe-europe"></i>
        <p>codeway.io</p>
      </a>
      <a className="blue" href="tel:+998901180841" title="Phone">
        <i class="fas fa-phone-alt"></i>
        <p>+998 90 118 08 41</p>
      </a>
    </div>
  );
};

const Experience = ({ experience }) => {
  return (
    <div className="experience">
      <img className="logo" src={experience.logo} alt="company-logo" />

      <div className="title">
        <p>
          {experience.title} at {experience.company}
        </p>
        <p>
          <i class="fas fa-map-marker-alt"></i> {experience.city}{" "}
          <i class="fas fa-calendar-alt"></i> {experience.date}
        </p>
      </div>

      {experience.description}
    </div>
  );
};

const Education = ({ education }) => {
  return (
    <div className="education">
      <h3>education.name</h3>
      <p>toto</p>
    </div>
  );
};

const Project = ({ project }) => {
  return (
    <div className="project">
      <h3>project.name</h3>
      <p>toto</p>
    </div>
  );
};

const Tag = ({ tag }) => {
  return <div className="tag">Tag</div>;
};

const Skills = ({ skills }) => {
  return (
    <div className="skills">
      <div className="programming">
        <h4>Programming languages</h4>
        {skills["programming"].map((tag) => (
          <Tag tag={tag} />
        ))}
      </div>

      <div className="tools">
        <h4>Tools</h4>
        {skills["tools"].map((tag) => (
          <Tag tag={tag} />
        ))}
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="app">
      <div className="resume">
        <div className="body">
          <div className="header">
            <div className="text">
              <h3 className="blue">Ruslan Ablyamitov</h3>
              <p>Frontend Developer</p>
            </div>
            <Socials />
            <span className="vertical-bar" />
          </div>

          <div className="sections">
            <div className="section-experience">
              <h2>Professional experience</h2>
              {experienceData.map((exp) => (
                <Experience experience={exp} />
              ))}
            </div>

            <div className="section-education">
              <h2>Education</h2>
              {educationData.map((ed) => (
                <Education education={ed} />
              ))}
            </div>

            <div className="section-projects">
              <h2>Projects</h2>
              {projectsData.map((proj) => (
                <Project project={proj} />
              ))}
            </div>

            <div className="section-skills">
              <h2>Skills</h2>
              <Skills skills={skillsData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
