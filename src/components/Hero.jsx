// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

function Hero(){
    return(
    <motion.section 
       className="hero" id="home"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
          <div className="bg-layer layer1"></div>
  <div className="bg-layer layer2"></div>
  <div className="bg-layer layer3"></div>
        <div className="hero-content">
            <h1>Hello, I'm <span>Manas</span>
            </h1>
              <h2>Computer Science Student · AI-Focused Learner</h2>
              <p>
                  I’m a computer science student exploring the foundations of Artificial
          Intelligence while building clean, responsive web interfaces. I enjoy
          understanding how intelligent systems work and translating ideas into
          thoughtful digital experiences.
              </p>
            <div className="hero-buttons">
                <a href="#projects" className="btn primary">
                    View Projects
                </a>
                <a href="#contact" className="btn secondary">
                    Contact Me
                </a>
            </div>
        </div>
    </motion.section>
    );
}
export default Hero;