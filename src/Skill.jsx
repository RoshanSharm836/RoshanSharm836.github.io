import "./App.css";
import Heading from "./Heading";
import SkillIteam from "./SkillIteam";
// import "../public/";
function Skill() {
  const arr = [
    {
      link: "https://cdn-icons-png.flaticon.com/128/5968/5968292.png",
      name: "JavaScript",
    },
    {
      link: "https://img.icons8.com/color/48/000000/react-native.png",
      name: "React.Js",
    },
    {
      link: "https://cdn-icons-png.flaticon.com/128/174/174854.png",
      name: "HTML",
    },
    {
      link: "https://cdn-icons-png.flaticon.com/128/5968/5968242.png",
      name: "CSS",
    },

    {
      link: "https://th.bing.com/th/id/OIP.4W2t--tEo45Th0Rj-8kwbAHaHw?w=172&h=180&c=7&r=0&o=5&pid=1.7",
      name: "MongoDB",
    },
    {
      link: "https://th.bing.com/th/id/OIP.zxSh2e5d18NJz1iaHwH_agAAAA?pid=ImgDet&rs=1",
      name: "Node.Js",
    },
    {
      link: "https://e7.pngegg.com/pngimages/1006/374/png-clipart-web-development-node-js-socket-io-javascript-network-socket-modernization-miscellaneous-logo-thumbnail.png",
      name: "Express.Js",
    },
    {
      link: "https://th.bing.com/th/id/OIP.R9aFsYjqMtTIjpbNMve9iAAAAA?w=200&h=200&c=7&r=0&o=5&pid=1.7",
      name: "Postman API",
    },
    {
      link: "https://e7.pngegg.com/pngimages/914/758/png-clipart-github-social-media-computer-icons-logo-android-github-logo-computer-wallpaper.png",
      name: "Github",
    },
  ];
  return (
    <div id="skills">
      <Heading title="Skill" />
      <div className="Skill">
        {arr.map((el) => {
          return <SkillIteam link={el.link} name={el.name} />;
        })}
      </div>
    </div>
  );
}
export default Skill;
