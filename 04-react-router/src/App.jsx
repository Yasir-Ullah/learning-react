import { useState } from "react";
import Textform from "./compontes/Textform";
import Navbar from "./compontes/Navbar";
import Alert from "./compontes/Alert";
import About from "./compontes/About";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  const toggleMode = (color) => {
    if (color === "light") {
      setMode("light");
      document.body.style.backgroundColor = "white";
    } else if (color === "dark") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
    } else if (color === "red") {
      setMode("dark");
      document.body.style.backgroundColor = "#dc3545";
    } else if (color === "green") {
      setMode("dark");
      document.body.style.backgroundColor = "#198754";
    } else if (color === "blue") {
      setMode("dark");
      document.body.style.backgroundColor = "#0d6efd";
    }
  };

  return (
    <Router>
      <Navbar mode={mode} toggleMode={toggleMode} aboutText="About" />

      <Alert alert={alert} />

      <div className="container my-3">
        <Switch>
          <Route exact path="/about">
            <About />
          </Route>

          <Route exact path="/">
            <Textform
              heading="Enter the text to analyze"
              mode={mode}
              showAlert={showAlert}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
