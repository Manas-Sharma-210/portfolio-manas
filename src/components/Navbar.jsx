import { useEffect, useState } from "react";

function Navbar() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sectionIds = ["home", "about", "projects", "skills", "contact"];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const handleScroll = () => {
      const scrollY = window.scrollY + 120; // navbar height offset
      let current = "home";

      for (const section of sections) {
        if (scrollY >= section.offsetTop) {
          current = section.id;
        }
      }

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run once on load

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="navbar">
      <div className="nav-inner">
        <span className="nav-logo">Manas' Portfolio</span>

        <ul className="nav-links">
          <li className={active === "home" ? "active" : ""}>
            <a href="#home">Home</a>
          </li>
          <li className={active === "about" ? "active" : ""}>
            <a href="#about">About</a>
          </li>
          <li className={active === "projects" ? "active" : ""}>
            <a href="#projects">Projects</a>
          </li>
          <li className={active === "skills" ? "active" : ""}>
            <a href="#skills">Skills</a>
          </li>
          <li className={active === "contact" ? "active" : ""}>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;


