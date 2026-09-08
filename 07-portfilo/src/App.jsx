import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Services />
        <Contact />
      </main>
      <Footer />
      {/* Download CV Button */}{" "}
      <a
        href="/Yasir-Hamed-CV.pdf"
        download="Yasir-Hamed-CV.pdf"
        className="cv-button"
        aria-label="Download CV"
      >
        {" "}
        <i className="fas fa-download"></i> <span>Download CV</span>{" "}
      </a>
      <a
        href="https://wa.me/923001234567"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-button"
        aria-label="Contact me on WhatsApp"
      >
        <i className="fab fa-whatsapp"></i>
        <span>WhatsApp</span>
      </a>
    </>
  );
}

export default App;
