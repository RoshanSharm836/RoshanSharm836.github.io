import "./App.css";
import pdf from "./resume.pdf";
import Heading from "./Heading";

function About(props) {
  return (
    <div className="portfolio-about" id="about">
      {/* <video autoplay muted loop className='about-bg'>
 <source autoplay muted loop className='about-backgd' src="bgvid.mp4" type="video/mp4" />
Your browser does not support the video tag.
</video> */}
      <Heading title="about" />
      <div className="about-item">
        <p id="user-detail-intro" className="home-heading">
          Analytical And Detail-Oriented Aspiring Full Stack Developer. Capable
          Of Writing Production-Ready Code Using ReactJS, Redux, And CSS On The
          Frontend, NodeJS And Express On The Backend To Build Single Page
          Applications. Passionate About Coding And Strongly Interested In
          Working In A Product-Based Company.
        </p>
        <div className="about-box">
          <button className="home-btm" id="resume-button-2">
            <a href={pdf} download="roshan-resume" id="resume-link-2">
              Download CV
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
export default About;
