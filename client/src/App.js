import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Profile from "./components/Profile";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/profile" component={Login} />
        <Route exact path="/" component={Profile} />
      </Routes>
    </Router>
  );
}

export default App;
