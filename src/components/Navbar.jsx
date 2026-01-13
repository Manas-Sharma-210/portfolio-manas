import { useEffect, useState } from "react";

function Navbar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const sectionIds = ["home", "about", "projects", "skills", "contact"];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const handleScroll = () => {
      const scrollY = window.scrollY + 120;
      let current = "home";

      for (const section of sections) {
        if (scrollY >= section.offsetTop) {
          current = section.id;
        }
      }

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => {
    setOpen(false); // close menu after click
  };

  return (
    <nav className="navbar">
      <div className="nav-inner">
        <span className="nav-logo">Manas</span>

        {/* DESKTOP LINKS */}
        <ul className="nav-links desktop">
          {["home", "about", "projects", "skills", "contact"].map((id) => (
            <li key={id} className={active === id ? "active" : ""}>
              <a href={`#${id}`}>{id.charAt(0).toUpperCase() + id.slice(1)}</a>
            </li>
          ))}
        </ul>

        {/* HAMBURGER */}
        <button
          className={`hamburger ${open ? "open" : ""}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* MOBILE MENU */}
      <div className={`mobile-menu ${open ? "show" : ""}`}>
        {["home", "about", "projects", "skills", "contact"].map((id) => (
          <a
            key={id}
            href={`#${id}`}
            className={active === id ? "active" : ""}
            onClick={handleLinkClick}
          >
            {id.charAt(0).toUpperCase() + id.slice(1)}
          </a>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;



