import React from "react";
import {
  BrowserRouter as Router,
} from "react-router-dom";
import './App.css';

import ProjectNav from './Components/Navbar/ProjectNav';

function App() {
  return (
    <Router>
      <ProjectNav />
    </Router>
  );
}

export default App;
