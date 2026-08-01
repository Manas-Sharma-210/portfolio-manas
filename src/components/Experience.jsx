function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="experience-container">
        <h2 className="experience-title">Experience</h2>

        <p className="experience-subtitle">
          Professional experience building and contributing to production software.
        </p>

        <div className="experience-card">
          <div className="experience-header">
            <div>
              <h3>Software Development Intern</h3>
              <h4>HumanCloud Technologies</h4>
            </div>

            <span className="experience-date">
              Apr 2026 – Jul 2026
            </span>
          </div>

          <ul className="experience-list">
            <li>
              Contributed to <strong>VUE</strong>, an internal retail analytics
              dashboard, working on a live enterprise production codebase
              alongside an established engineering team.
            </li>

            <li>
              Independently resolved <strong>7 engineering tickets</strong>
              end-to-end, managing feature development across{" "}
              <strong>7+ parallel branches</strong> and merging them into the
              main branch.
            </li>

            <li>
              Built and decommissioned UI sections independently within an
              existing dashboard architecture while following established coding
              conventions.
            </li>

            <li>
              Implemented filter-driven API calls that enabled users to narrow
              project lists containing thousands of records, improving dashboard
              usability for analysts.
            </li>
          </ul>

          <div className="experience-tags">
            <span>React</span>
            <span>JavaScript</span>
            <span>REST APIs</span>
            <span>Git</span>
            <span>GitHub</span>
            <span>Enterprise Dashboard</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;