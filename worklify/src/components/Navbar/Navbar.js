import React, { useEffect } from "react";
import {
  Switch,
  Route,
  useLocation,
  NavLink,
  matchPath,
  Link,
  Redirect,
} from "react-router-dom";

// Material UI
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

// Image
import logo from "../../image/Logo.png";

// Page Component
import Home from "../../pages/Home";
import Login from "../../pages/Login";
import Signup from "../../pages/Signup";
import ProjectSelection from "../../pages/ProjectSelection";
import { useAuth } from "../../contexts/AuthContext";

// alert
import { SnackbarProvider } from "notistack";

const useStyles = makeStyles((theme) => ({
  nav: {
    display: "flex",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor: "#5485A0",
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  contentProjectSelection: {
    flexGrow: 1,
    padding: 0,
    marginTop: "64px",
    width: "100vw",
  },
  logOutBtn: {
    color: "#fff",
    textTransform: "capitalize",
  },
}));

const Navbar = () => {
  const { pageLocation, currentUser, logout } = useAuth();
  const classes = useStyles();
  const location = useLocation();
  console.log(location);

  const match = matchPath(location.pathname, { path: "/project/" });
  useEffect(() => {
    console.log(pageLocation, currentUser);
  }, [pageLocation, currentUser]);

  return (
    <>
      {match == null ? (
        <div className={classes.nav}>
          <CssBaseline />
          <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
              <Box
                display="flex"
                flexDirection="row"
                justifyContent="space-between"
                m={1}
                style={{ width: "100%" }}
              >
                <Box
                  p={1}
                  style={{ height: "45px", outline: 0 }}
                  component={NavLink}
                  to={currentUser !== "null" ? "/ProjectSelection" : "/"}
                >
                  <img src={logo} alt="logo" height="100%" />
                </Box>
                <Box display="flex" flexDirection="row" alignItems="center">
                  <Box px={2}>
                    {currentUser ? currentUser.displayName : null}
                  </Box>
                  <Box px={2}>
                    {currentUser !== "null" ? (
                      <Button className={classes.logOutBtn} onClick={logout}>
                        Log out
                      </Button>
                    ) : (
                      <Button
                        className={classes.logOutBtn}
                        component={Link}
                        to="/Login"
                      >
                        Login
                      </Button>
                    )}
                  </Box>
                </Box>
              </Box>
            </Toolbar>
          </AppBar>

          <main className={classes.contentProjectSelection}>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/Login">
                <SnackbarProvider maxSnack={3}>
                  <Login />
                </SnackbarProvider>
              </Route>
              <Route path="/Signup">
                <SnackbarProvider maxSnack={3}>
                  <Signup />
                </SnackbarProvider>
              </Route>
              <Route path="/ProjectSelection">
                <SnackbarProvider maxSnack={3}>
                  {currentUser === "null" ? (
                    <Redirect to="/" />
                  ) : (
                    <ProjectSelection />
                  )}
                </SnackbarProvider>
              </Route>
            </Switch>
          </main>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Navbar;
