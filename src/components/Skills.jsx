import useScrollReveal from "../hooks/useScrollReveal";

function Skills() {
  useScrollReveal();

  return (
    <section className="skills" id="skills">
      <div className="skills-container">

        <h2 className="skills-heading reveal">Skills</h2>

        <p className="skills-eyebrow reveal delay-1">Tech Stack</p>

        <p className="skills-subtitle reveal delay-2">
          Technologies I work with and areas I’m actively exploring.
        </p>

        <div className="skills-grid">

          {/* Frontend */}
          <div className="skill-card reveal delay-1">
            <h3>Frontend</h3>
            <ul>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript (ES6+)</li>
              <li>React</li>
            </ul>
          </div>

          {/* Backend */}
          <div className="skill-card reveal delay-2">
            <h3>Backend (Learning)</h3>
            <ul>
              <li>Node.js</li>
              <li>REST APIs</li>
              <li>Express (Basics)</li>
            </ul>
          </div>

          {/* Tools */}
          <div className="skill-card reveal delay-3">
            <h3>Tools</h3>
            <ul>
              <li>Git & GitHub</li>
              <li>Chrome DevTools</li>
            </ul>
          </div>

          {/* Future */}
          <div className="skill-card reveal delay-4">
            <h3>Future Focus</h3>
            <ul>
              <li>Backend Architecture</li>
              <li>Databases</li>
              <li>AI & Machine Learning</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Skills;
