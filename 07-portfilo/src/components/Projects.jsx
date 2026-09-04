function Projects() {
  const projects = [
    {
      title: "NewsMonkey",
      description:
        "A responsive news application built with React and News API.",
      tech: "React • API • Bootstrap",
      link: "#",
    },
    {
      title: "Medical Clinic",
      description:
        "A modern responsive medical clinic website with multiple sections.",
      tech: "HTML • CSS • JavaScript",
      link: "#",
    },
    {
      title: "DoorHub",
      description: "A modern landing page created using Tailwind CSS.",
      tech: "HTML • Tailwind CSS",
      link: "#",
    },
    {
      title: "Restaurant Website",
      description:
        "A responsive restaurant website with modern UI and animations.",
      tech: "HTML • CSS • JavaScript",
      link: "#",
    },
    {
      title: "JavaScript Calculator",
      description: "A simple calculator application built using JavaScript.",
      tech: "HTML • CSS • JavaScript",
      link: "#",
    },
    {
      title: "QR Code Generator",
      description: "Generate QR codes dynamically using JavaScript and an API.",
      tech: "JavaScript • API",
      link: "#",
    },
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-title">
          <p>My Recent Work</p>
          <h2>
            My <span>Projects</span>
          </h2>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-image">
                <span>&lt;/&gt;</span>
              </div>

              <div className="project-content">
                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <span className="tech">{project.tech}</span>

                <div className="project-buttons">
                  <a href={project.link}>Live Demo ↗</a>

                  <a href={project.link}>GitHub ↗</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
