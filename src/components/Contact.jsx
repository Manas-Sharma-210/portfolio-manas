import useScrollReveal from "../hooks/useScrollReveal";

function Contact() {
  useScrollReveal();

  return (
    <section className="contact" id="contact">
      <div className="contact-container">

        {/* LEFT */}
        <div className="contact-text reveal">
          <span className="section-label">Contact</span>

          <h2>Let’s Connect</h2>

          <p>
            I’m always open to conversations around projects, learning,
            collaboration, or just exchanging ideas.
          </p>

          <p>
            If something here resonates with you, feel free to reach out.
          </p>
        </div>

        {/* RIGHT */}
        <div className="contact-actions">

          <a
            href="mailto:manassharma210@gmail.com"
            className="contact-card reveal delay-1"
          >
            <span>Email</span>
            <strong>sahay.contact@gmail.com</strong>
          </a>

          <a
            href="https://github.com/Manas-Sharma-210"
            target="_blank"
            rel="noreferrer"
            className="contact-card reveal delay-2"
          >
            <span>GitHub</span>
            <strong>github.com/Manas-Sharma-210</strong>
          </a>

          <a
            href="https://www.linkedin.com/in/manassahaysharma"
            target="_blank"
            rel="noreferrer"
            className="contact-card reveal delay-3"
          >
            <span>LinkedIn</span>
            <strong>Connect professionally</strong>
          </a>

        </div>

      </div>
    </section>
  );
}

export default Contact;

