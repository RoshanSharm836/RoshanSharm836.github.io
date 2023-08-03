import React from "react";

function Singleproject({
  name,
  ProjectLink,
  ProjectImage,
  githubLink,
  discrip,
  techstack,
  features,
}) {
  {
    //     Image of the project
    // Title : class="project-title"
    // Description : class="project-description"
    // Tech stack used : class="project-tech-stack"
    // Link to GitHub repository : class="project-github-link"
    // Deployed link or video link : class="project-deployed-link"
  }

  return (
    <div className="project-card" style={{ margin: "auto", width: "70%" }}>
      <div>
        <a
          href={ProjectLink}
          target="_blank"
          className="linkpro"
          rel="noreferrer"
        >
          <img src={ProjectImage} alt="img" />
        </a>
        <div className="project-title">
          <a
            className="project-deployed-link"
            href={ProjectLink}
            rel="noreferrer"
            target="_blank"
          >
            <h1>{name} 🔗</h1>
          </a>

          <button className="project-btm">
            <a
              className="project-github-link"
              href={githubLink}
              target="_blank"
              rel="noreferrer"
            >
              Github repo
            </a>
          </button>
        </div>
        <p
          className="project-description"
          style={{ margin: "10px 0", textTransform: "none" }}
        >
          {discrip}
        </p>
        <div className="project-tech-stack">
          <h3>Tech Stack</h3>
          <div className="techstack-grp">
            {techstack.map((el) => {
              return <span className="techstack-item"> {el} </span>;
            })}
          </div>
        </div>
        <div className="project-items" style={{ margin: "20px 10px" }}>
          <div>
            <h3>Features</h3>
            <ul className="project_feature_list">
              {features.map((el) => {
                return <li>{el}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Singleproject;
