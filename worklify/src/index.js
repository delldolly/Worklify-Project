import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./index.css";
// import App from './App';
import reportWebVitals from "./reportWebVitals";
import { AuthProvider } from "./contexts/AuthContext";
import Loading from "./components/Loading";
// import Navbar from "./components/Navbar/Navbar";
// import ProjectNav from "./components/Navbar/ProjectNav";
const Navbar = React.lazy(() => import("./components/Navbar/Navbar"));
const ProjectNav = React.lazy(() => import("./components/Navbar/ProjectNav"));
ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <Suspense fallback={<Loading />}>
        <Router>
          <Switch>
            <Route path="/project">
              <ProjectNav />
            </Route>
            <Route strict path="/">
              <Navbar />
            </Route>
          </Switch>
          {/* <TaskBoard/> */}
        </Router>
      </Suspense>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
