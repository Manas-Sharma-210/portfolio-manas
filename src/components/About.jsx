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
            I’m a pre-final year <strong>Computer Science student</strong> with a
            growing interest in how software systems are built, scaled, and made
            intelligent.
          </p>

          <p>
            I currently work with{" "}
            <strong>HTML5, CSS, and React</strong>, and I’m learning{" "}
            <strong>Node.js</strong> and backend development to understand
            complete systems beyond the frontend.
          </p>

          <p>
            My long-term goal is to move deeper into{" "}
            <strong>Artificial Intelligence</strong> after building strong
            backend and computer science foundations.
          </p>

          {/* current focus */}
          <ul className="about-current">
            <li>Building projects with React</li>
            <li>Learning backend with Node.js</li>
            <li>Strengthening CS fundamentals</li>
            <li>Preparing to explore AI & ML</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;

