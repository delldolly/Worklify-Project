import React from "react";
import {
  BrowserRouter as Router,
} from "react-router-dom";
import './App.css';

import ProjectNav from './Components/Navbar/ProjectNav';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <Router>
      <ProjectNav />
      {/* <Navbar /> */}
    </Router>
  );
}

export default App;
