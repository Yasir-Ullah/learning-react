// function Footer() {
//   return (
//     <footer className="footer">
//       <div className="container">
//         <a href="#home" className="footer-logo">
//           Yasir<span>.</span>
//         </a>

//         <p>Frontend Developer • Building the web with ❤️</p>

//         <div className="footer-links">
//           <a href="#home">Home</a>
//           <a href="#about">About</a>
//           <a href="#projects">Projects</a>
//           <a href="#contact">Contact</a>
//         </div>

//         <div className="footer-bottom">
//           © 2026 Yasir Hamed. All Rights Reserved.
//         </div>
//       </div>
//     </footer>
//   );
// }

// export default Footer;

function Footer() {
  const whatsappNumber = "923161547154"; // Replace with your WhatsApp number

  return (
    <footer className="footer">
      <div className="container">
        <a href="#home" className="footer-logo">
          Yasir<span>.</span>
        </a>

        <p>Frontend Developer • Building the web with ❤️</p>

        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>

          {/* WhatsApp */}
          <a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>
        </div>

        <div className="footer-bottom">
          © 2026 Yasir Hamed. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
