import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Thank you! Your message has been submitted.");

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-title">
          <p>Get In Touch</p>
          <h2>
            Contact <span>Me</span>
          </h2>
        </div>

        <div className="contact-container">
          <div className="contact-info">
            <h3>Let's Work Together 🚀</h3>

            <p>
              Have a project in mind? Feel free to contact me. I would love to
              hear about your idea.
            </p>

            <div className="contact-item">
              <span>📧</span>
              <div>
                <strong>Email</strong>
                <p>your-email@example.com</p>
              </div>
            </div>

            <div className="contact-item">
              <span>📍</span>
              <div>
                <strong>Location</strong>
                <p>Pakistan</p>
              </div>
            </div>

            <div className="contact-item">
              <span>💼</span>
              <div>
                <strong>Available For</strong>
                <p>Freelance Projects</p>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit" className="primary-btn">
              Send Message 🚀
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
