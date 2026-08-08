import { useState } from "react";

import Textform from "./compontes/Textform";
import Navbar from "./compontes/Navbar";
import Alert from "./compontes/Alert";

import "./App.css";

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
      document.title = "TextUtils - Light Mode";
      showAlert("Light mode has been enabled", "success");
    } else if (color === "dark") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      document.title = "TextUtils - Dark Mode";
      showAlert("Dark mode has been enabled", "success");
    } else if (color === "red") {
      setMode("dark");
      document.body.style.backgroundColor = "#dc3545";
      document.title = "TextUtils - Red Mode";
      showAlert("Red mode has been enabled", "success");
    } else if (color === "blue") {
      setMode("dark");
      document.body.style.backgroundColor = "#0d6efd";
      document.title = "TextUtils - Blue Mode";
      showAlert("Blue mode has been enabled", "success");
    } else if (color === "green") {
      setMode("dark");
      document.body.style.backgroundColor = "#198754";
      document.title = "TextUtils - Green Mode";
      showAlert("Green mode has been enabled", "success");
    }
  };

  return (
    <div>
      <Navbar mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my3">
        <Textform
          heading="Enter the text to analyza"
          mode={mode}
          showAlert={showAlert}
        />
      </div>
    </div>
  );
}
