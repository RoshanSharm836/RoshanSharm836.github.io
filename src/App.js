import About from "./About";
import "./App.css";
import Edu from "./Edu";
import Main from "./Main";
import Nav from "./Nav";
import Contact from "./Contact";
import Skill from "./Skill";
import Project from "./Project";
import Github from "./Github";

function App() {
  return (
    <header className="container">
      <nav className="portfolio" id="nav-menu">
        {/* <div className="portofolio-deatail"> */}
        <div className="bg-blur"></div>
        <img src="./a.jpg" alt="roshan kr" className="portfolio-img home-img" />
        <span id="user-detail-name" className="portfolio-h3">
          roshan Kumar
        </span>
        <p className="portfolio-p">Full Stack Developer</p>
        <Nav />
        {/* </div> */}
      </nav>
      <div className="portfolio-main">
        <Main />
        <About />
        <Edu />
        <Skill />
        <Project />
        <Github />
        <Contact />
      </div>
    </header>
  );
}

export default App;
