function Skills() {
  const skills = [
    {
      name: "HTML5",
      level: "100%",
    },
    {
      name: "CSS3",
      level: "100%",
    },
    {
      name: "JavaScript",
      level: "90%",
    },
    {
      name: "React.js",
      level: "95%",
    },
    {
      name: "Tailwind CSS",
      level: "80%",
    },
    {
      name: "Bootstrap",
      level: "90%",
    },
  ];

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <div className="section-title">
          <p>My Expertise</p>
          <h2>
            My <span>Skills</span>
          </h2>
        </div>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-card" key={index}>
              <div className="skill-header">
                <h3>{skill.name}</h3>
                <span>{skill.level}</span>
              </div>

              <div className="progress">
                <div
                  className="progress-bar"
                  style={{ width: skill.level }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
