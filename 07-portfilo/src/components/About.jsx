function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-title">
          <p>Get To Know Me</p>
          <h2>
            About <span>Me</span>
          </h2>
        </div>

        <div className="about-container">
          <div className="about-card">
            <img src="/yasir.png" alt="Yasir Hamed" className="about-img" />
          </div>

          <div className="about-content">
            <h3>I'm a Frontend Developer</h3>

            <p>
              I'm passionate about creating beautiful and functional websites. I
              enjoy turning ideas into real-world web applications.
            </p>

            <p>
              I work with modern frontend technologies and continuously improve
              my skills by building real projects.
            </p>

            <div className="about-info">
              <div>
                <strong>Name:</strong>
                <span>Yasir Hamed</span>
              </div>

              <div>
                <strong>Role:</strong>
                <span>Frontend Developer</span>
              </div>

              <div>
                <strong>Technology:</strong>
                <span>React.js</span>
              </div>

              <div>
                <strong>Experience:</strong>
                <span>Projects & Learning</span>
              </div>
            </div>

            <a href="#contact" className="primary-btn">
              Hire Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
