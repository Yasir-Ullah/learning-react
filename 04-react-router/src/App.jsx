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

  const removeBodyClass = () => {
    document.body.classList.remove("bg-primary");
    document.body.classList.remove("bg-success");
    document.body.classList.remove("bg-danger");
    document.body.classList.remove("bg-warning");
    document.body.classList.remove("bg-info");
    document.body.classList.remove("bg-dark");
    document.body.classList.remove("bg-light");
  };
  const toggleMode = (cls) => {
    removeBodyClass();
    if (cls) {
      document.body.classList.add("bg-" + cls);
      showAlert(`${cls} mode has been enabled`, "success");
      return;
    }
    console.log(cls);
    document.body.classList.add("bg-" + cls);

    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };

  return (
    <Router>
      <Navbar mode={mode} toggleMode={toggleMode} aboutText="About" />

      <Alert alert={alert} />

      <div className="container my-3">
        <Switch>
          <Route exact path="/about">
            <About mode={mode} />
          </Route>

          <Route exact path="/">
            <Textform
              heading="Try TextUtils - word conter,remove extra spaces"
              mode={mode}
              showAlert={showAlert}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
