function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <p className="small-title">👋 Hello, I'm</p>

          <h1>
            Yasir <span>Hamed</span>
          </h1>

          <h2>Frontend Developer</h2>

          <p className="hero-description">
            I create modern, responsive and interactive websites using HTML,
            CSS, JavaScript and React.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-btn">
              View Projects
            </a>

            <a href="#contact" className="secondary-btn">
              Contact Me
            </a>
          </div>

          <div className="social-links">
            <a href="https://github.com/" target="_blank">
              GitHub
            </a>

            <a href="https://www.linkedin.com/" target="_blank">
              LinkedIn
            </a>

            <a href="https://www.facebook.com/" target="_blank">
              Facebook
            </a>
          </div>
        </div>

        <div className="hero-image">
          <div className="image-circle">
            <img src="yasir.png" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
