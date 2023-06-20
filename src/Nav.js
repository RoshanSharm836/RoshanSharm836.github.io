import "./App.css";
import pdf from "./resume.pdf";

function Nav() {
  return (
    <div className="portfolio-navlink">
      <span className="navlink-item">
        <a className="nav-link home" href="#home">
          home
        </a>
      </span>
      <span className="navlink-item">
        <a className="nav-link about" href="#about">
          about me
        </a>
      </span>

      <span className="navlink-item">
        <a className="nav-link skills" href="#skills">
          skills
        </a>
      </span>

      <span className="navlink-item">
        <a className="nav-link projects" href="#projects">
          project
        </a>
      </span>
      <span className="navlink-item">
        <a className="nav-link contact" href="#contact">
          contact
        </a>
      </span>
      <button className="navlink-item" id="resume-button-1">
        <a
          href={pdf}
          className="nav-link resume"
          download="roshan-resume"
          id="resume-link-1"
        >
          resume
        </a>
      </button>
    </div>
  );
}

export default Nav;
