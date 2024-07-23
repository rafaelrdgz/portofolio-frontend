function SkillItem({ src, skill }) {
  return (
    <span>
      <img src={src} alt="Skill Icon" />
      <p>{skill}</p>
    </span>
  );
}

export default SkillItem;
