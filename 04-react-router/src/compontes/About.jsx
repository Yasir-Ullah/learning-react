import React from "react";

export default function About(props) {
  const mystyle = {
    color: props.mode === "dark" ? "white" : "#042743",
    backgroundColor: props.mode === "dark" ? "#042743" : "white",
    border: "1px solid",
    borderColor: props.mode === "dark" ? "white" : "#042743",
    padding: "10px",
    borderRadius: "8px",
  };

  const accordionStyle = {
    color: props.mode === "dark" ? "white" : "#042743",
    backgroundColor: props.mode === "dark" ? "#042743" : "white",
    border: props.mode === "dark" ? "1px solid white" : "1px solid #042743",
  };

  return (
    <div className="container my-3" style={mystyle}>
      <h1>About Us</h1>

      <div className="accordion" id="accordionExample">
        {/* Item 1 */}
        <div className="accordion-item" style={accordionStyle}>
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              style={accordionStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              html5 #1
            </button>
          </h2>

          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={accordionStyle}>
              <strong>HTML5 (HyperText Markup Language version 5).</strong>
              is the latest major version of HTML used to create and structure
              web pages and web applications. It provides improved support for
              multimedia, graphics, and interactive content without requiring
              additional plugins.
            </div>
          </div>
        </div>

        {/* Item 2 */}
        <div className="accordion-item" style={accordionStyle}>
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              style={accordionStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Css3 #2
            </button>
          </h2>

          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={accordionStyle}>
              <strong>CSS3 (Cascading Style Sheets Level 3).</strong>
              is the latest major version of CSS used to control the appearance
              and layout of web pages. It allows developers to add colors,
              fonts, animations, transitions, responsive designs, and visual
              effects to HTML elements.
            </div>
          </div>
        </div>

        {/* Item 3 */}
        <div className="accordion-item" style={accordionStyle}>
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              style={accordionStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              JavaScript #3
            </button>
          </h2>

          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={accordionStyle}>
              <strong>
                JavaScript is a programming language used to make web pages
                interactive and dynamic.
              </strong>
              It allows developers to add functionality such as buttons, forms,
              animations, sliders, pop-ups, and real-time updates to websites.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
