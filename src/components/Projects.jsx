function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <h2 className="projects-title">Projects</h2>
        <p className="projects-subtitle">
          A few projects I’ve built while learning modern web development and
          backend systems.
        </p>

        <div className="projects-grid">

          {/* =============================
              Project: VectorShift Assessment
          ============================== */}
          <div className="project-card featured">
            <h3>
              Node-Based Workflow Builder
              <span className="badge">Assessment</span>
            </h3>

            <p>
              Built as part of VectorShift’s technical frontend assessment, this
              project implements a node-based workflow builder with drag-and-drop
              functionality, dynamic nodes, and real-time backend validation.
            </p>

            <p>
              A FastAPI backend parses pipeline data, validates DAG structure,
              computes nodes and edges, and communicates results back to the UI
              via REST APIs. Completed and submitted under a strict deadline.
            </p>

            <div className="project-tags">
              <span>React</span>
              <span>ReactFlow</span>
              <span>JavaScript</span>
              <span>FastAPI</span>
              <span>REST APIs</span>
              <span>DAG Validation</span>
            </div>

            <div className="project-links">
              <a
                className="btn primary"
                href="https://github.com/Manas-Sharma-210/workflow-builder-assessment"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>

          {/* =============================
              Project: AI Knowledge Assistant
          ============================== */}
          <div className="project-card">
            <h3>AI PDF Knowledge Assistant</h3>

            <p>
              An AI-powered assistant that allows users to upload PDFs —
              including scanned, image-heavy documents — and ask questions in
              natural language. The system extracts, understands, and retrieves
              answers using a full Retrieval-Augmented Generation (RAG) pipeline.
            </p>

            <p>
              Designed to handle real-world challenges such as unreliable OCR
              scans, LLM response control, and clean backend architecture while
              keeping answers grounded strictly in the document content.
            </p>

            <div className="project-tags">
              <span>FastAPI</span>
              <span>Python</span>
              <span>RAG</span>
              <span>LLMs</span>
              <span>OCR</span>
              <span>Vector DB</span>
            </div>

            <div className="project-links">
              <a
                className="btn primary"
                href="https://github.com/Manas-Sharma-210/ai-knowledge-assistant"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>

          {/* =============================
              Project: Netflix Clone
          ============================== */}
          <div className="project-card">
            <h3>Netflix Clone</h3>

            <p>
              A Netflix-inspired UI built using React, focusing on component
              structure, reusable layouts, and responsive design.
            </p>

            <div className="project-tags">
              <span>React</span>
              <span>CSS</span>
            </div>

            <div className="project-links">
              <a
                className="btn primary"
                href="https://netfliix-clone-manas.netlify.app"
                target="_blank"
                rel="noreferrer"
              >
                Live Demo
              </a>
              <a
                className="btn secondary"
                href="https://github.com/Manas-Sharma-210/NETFLIX-CLONE"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>

          {/* =============================
              Project: SahayKrit
          ============================== */}
          <div className="project-card in-progress">
            <h3>
              SahayKrit <span className="badge">In Progress</span>
            </h3>

            <p>
              A creative photography platform currently under development,
              focused on clean UI, visual storytelling, and a calm, minimal
              browsing experience.
            </p>

            <div className="project-tags">
              <span>React</span>
              <span>JavaScript</span>
              <span>HTML</span>
              <span>CSS</span>
              <span className="muted">APIs (soon)</span>
              <span className="muted">Backend (planned)</span>
            </div>

            <div className="project-links">
              <button className="btn disabled">Coming Soon</button>
            </div>
          </div>

        </div>

        <p className="projects-footer">
          More projects coming as I continue learning backend development and
          Artificial Intelligence.
        </p>
      </div>
    </section>
  );
}

export default Projects;
