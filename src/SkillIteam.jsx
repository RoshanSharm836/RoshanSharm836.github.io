function SkillIteam({ link, name }) {
  return (
    <div className="newcard skills-card">
      <img
        className="skills-card-img"
        src={link}
        width="100px"
        height="100px"
      />
      <span className="skills-card-name">{name}</span>
    </div>
  );
}

export default SkillIteam;
