function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">
        
        {/* PHOTO */}
        <div className="about-photo">
          <img src="/me.webp.webp" alt="Manas" />
        </div>

        {/* CONTENT */}
        <div className="about-content">
          {/* section label */}
          <span className="label">About</span>

          <h2>About Me</h2>

          <p>
            I’m a pre-final year <strong>Computer Science student</strong> who
            enjoys building real software systems—frontends that feel
            intentional, and backends that do meaningful work.
          </p>

          <p>
            I work primarily with <strong>React, JavaScript, and CSS</strong>,
            and I’m actively expanding into backend development using{" "}
            <strong>FastAPI</strong> and <strong>Node.js</strong>, focusing on
            how systems are structured, validated, and scaled.
          </p>

          <p>
            I’ve built projects ranging from clean UI-focused applications to
            more complex systems like <strong>node-based workflow builders</strong>{" "}
            and <strong>AI-powered knowledge assistants</strong> involving OCR,
            vector search, and retrieval-augmented generation (RAG).
          </p>

          <p>
            I care about writing code that’s readable, modular, and grounded in
            real-world constraints—whether that’s validating data flows,
            handling imperfect inputs, or shipping something people can actually
            use.
          </p>

          {/* current focus */}
          <ul className="about-current">
            <li>Building real-world projects with React</li>
            <li>Designing backend APIs with FastAPI & Node.js</li>
            <li>Working with OCR, vector search, and RAG pipelines</li>
            <li>Preparing to grow deeper into AI-driven systems</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
