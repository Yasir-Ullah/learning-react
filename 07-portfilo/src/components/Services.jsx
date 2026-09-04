function Services() {
  const services = [
    {
      icon: "💻",
      title: "Web Development",
      description:
        "Building modern and functional websites for businesses and individuals.",
    },
    {
      icon: "🎨",
      title: "UI Design",
      description:
        "Creating clean, attractive and user-friendly website interfaces.",
    },
    {
      icon: "📱",
      title: "Responsive Design",
      description:
        "Making websites work perfectly on mobile, tablet and desktop.",
    },
    {
      icon: "⚛️",
      title: "React Development",
      description: "Building interactive web applications using React.js.",
    },
  ];

  return (
    <section id="services" className="section services-section">
      <div className="container">
        <div className="section-title">
          <p>What I Do</p>
          <h2>
            My <span>Services</span>
          </h2>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">{service.icon}</div>

              <h3>{service.title}</h3>

              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
