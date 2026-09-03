import { useState } from "react";
import Navbar from "./compontes/Navbar";
import Home from "./compontes/Home";
import About from "./compontes/About";
import User from "./compontes/User";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/user">
            <User />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
