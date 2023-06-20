import React from "react";
import Heading from "./Heading";

function Github() {
  return (
    <div className="react-activity-calendar">
      <Heading title={"GitHub statistics"} />
      <div className="git">
        <img
          id="github-top-langs"
          align="middle"
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=roshanrocked&theme=highcontrast"
          alt="roshankr"
        />
        <img
          id="github-streak-stats"
          align="center"
          src="https://github-readme-streak-stats.herokuapp.com?user=roshanrocked&theme=highcontrast"
        />
        <img
          id="github-stats-card"
          align="center"
          src="https://github-readme-stats.vercel.app/api?username=roshanrocked&count_private=true&show_icons=true&theme=highcontrast"
          alt="roshankr"
        />
      </div>
    </div>
  );
}

export default Github;
