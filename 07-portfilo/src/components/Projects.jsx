// function Projects() {
//   const projects = [
//     {
//       title: "NewsMonkey",
//       description:
//         "A responsive news application built with React and News API.",
//       tech: "React • API • Bootstrap",
//       link: "https://door-hub-seven.vercel.app/",
//       img: "image.png",
//     },
//     {
//       title: "Medical Clinic",
//       description:
//         "A modern responsive medical clinic website with multiple sections.",
//       tech: "HTML • CSS • JavaScript",
//       link: "#",
//     },
//     {
//       title: "DoorHub",
//       description: "A modern landing page created using Tailwind CSS.",
//       tech: "HTML • Tailwind CSS",
//       link: "#",
//     },
//     {
//       title: "Restaurant Website",
//       description:
//         "A responsive restaurant website with modern UI and animations.",
//       tech: "HTML • CSS • JavaScript",
//       link: "#",
//     },
//     {
//       title: "JavaScript Calculator",
//       description: "A simple calculator application built using JavaScript.",
//       tech: "HTML • CSS • JavaScript",
//       link: "#",
//     },
//     {
//       title: "QR Code Generator",
//       description: "Generate QR codes dynamically using JavaScript and an API.",
//       tech: "JavaScript • API",
//       link: "#",
//     },
//   ];

//   return (
//     <section id="projects" className="section">
//       <div className="container">
//         <div className="section-title">
//           <p>My Recent Work</p>
//           <h2>
//             My <span>Projects</span>
//           </h2>
//         </div>

//         <div className="projects-grid">
//           {projects.map((project, index) => (
//             <div className="project-card" key={index}>
//               <div className="project-image">
//                 <img src="" alt="" />
//                 <span>&lt;/&gt;</span>
//               </div>

//               <div className="project-content">
//                 <h3>{project.title}</h3>

//                 <p>{project.description}</p>

//                 <span className="tech">{project.tech}</span>

//                 <div className="project-buttons">
//                   <a href={project.link}>Live Demo ↗</a>

//                   <a href={project.link}>GitHub ↗</a>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Projects;

function Projects() {
  const projects = [
    {
      title: "NewsMonkey",
      description:
        "A responsive news application built with React and News API.",
      tech: "React • API • Bootstrap",
      liveLink: "https://door-hub-seven.vercel.app/",
      githubLink: "#",
      img: "/image.png",
    },
    {
      title: "Blinkit UI Clone",

      description:
        "A modern and responsive Blinkit UI clone featuring a clean grocery shopping interface, product sections, categories, and an intuitive user experience.",
      tech: "HTML • CSS • JavaScript",
      liveLink: "https://blinkit-ui-clone-nine.vercel.app/",
      githubLink: "https://github.com/Yasir-Ullah/blinkit-ui-clone",
      img: "/blinkit.png",
    },
    {
      title: "DoorHub",
      description: "A modern landing page created using Tailwind CSS.",
      tech: "HTML • Tailwind CSS",
      liveLink: "https://door-hub-seven.vercel.app/",
      githubLink: "https://github.com/Yasir-Ullah/DoorHub",
      img: "/doorhub.png",
    },
    {
      title: "Popup Notification",

      description:
        "A responsive popup notification application built with HTML, CSS, and JavaScript with smooth animations and interactive notifications.",
      tech: "HTML • CSS • JavaScript",
      liveLink: "https://random-password-generator-js-rg9d.vercel.app/",
      githubLink:
        "https://github.com/Yasir-Ullah/responsive-popup-notification",
      img: "/pop.png",
    },
    {
      title: "JavaScript Calculator",
      description: "A simple calculator application built using JavaScript.",
      tech: "HTML • CSS • JavaScript",
      liveLink: "https://calculator-project-five-sage.vercel.app/",
      githubLink: "https://github.com/Yasir-Ullah/calculator-project",
      img: "/calculator.png",
    },
    {
      title: "QR Code Generator",
      description: "Generate QR codes dynamically using JavaScript and an API.",
      tech: "JavaScript • API",
      liveLink: "https://random-password-generator-js-ashen.vercel.app/",
      githubLink: "https://github.com/Yasir-Ullah/random-password-generator-js",
      img: "/qr-code.png",
    },
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        {/* Section Title */}
        <div className="section-title">
          <p>My Recent Work</p>

          <h2>
            My <span>Projects</span>
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              {/* Project Image */}
              <div className="project-image">
                <img
                  src={project.img}
                  alt={`${project.title} project`}
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />

                {/* <span>&lt;/&gt;</span> */}
              </div>

              {/* Project Content */}
              <div className="project-content">
                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <span className="tech">{project.tech}</span>

                {/* Buttons */}
                <div className="project-buttons">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo ↗
                  </a>

                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub ↗
                  </a>
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
