import React, { useState } from "react";
import "./../css/Signup.css";

import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useAuth } from "../contexts/AuthContext";
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";
import { useSnackbar } from 'notistack';
import { render } from "@testing-library/react";

const useStyles = makeStyles((theme) => ({
  containerStyle: {
    height: 'calc(100vh - 64px)',
    paddingTop: '3vmin',
    paddingBottom: '3vmin',
    overflow: 'auto',
  },
  typographyStyle: {
    height: '100%',
    padding: '3vmin 0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
}));

const Signup = () => {
  const classes = useStyles();
  const history = useHistory();
  const { signup } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const handleSubmitSignup = async (e) => {
    e.preventDefault();
    try {
      await signup(name, email, password);
      setName("");
      setEmail("");
      setPassword("");
      successClick("Signup Success");
      history.push("/ProjectSelection");
    } catch (error) {
      errorClick(error.message);
    }
  };

  const successClick = (message) => {
    enqueueSnackbar(message, {
      variant: 'success',
      anchorOrigin: {
        vertical: 'top',
        horizontal: 'right',
      }
    });
  };

  const errorClick = (message) => {
    enqueueSnackbar(message, {
      variant: 'error',
      anchorOrigin: {
        vertical: 'top',
        horizontal: 'right',
      }
    });
  };

  return (
    <React.Fragment>
      <CssBaseline />
      {/* {JSON.stringify(currentUser)} */}
      <Container maxWidth="lg" className={classes.containerStyle}>
        <Typography
          component="div"
          className={classes.typographyStyle}
        >
          <Paper className="setPaper" elevation={3}>
            <p className="head">Sign up</p>
            <TextField
              onChange={(e) => {
                setName(e.target.value);
              }}
              value={name}
              id="name"
              label="Name"
              style={{ margin: 8 }}
              placeholder="Enter Name"
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              required
              style={{ width: "60%", height: "1rem" }}
              variant="outlined"
            />
            <TextField
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
              id="username"
              label="Email (or username)"
              style={{ margin: 8 }}
              required
              placeholder="e.g., abc1234@xxx.com"
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              style={{ width: "60%", height: "1rem" }}
              variant="outlined"
            />
            <TextField
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              value={password}
              required
              type="password"
              id="password"
              label="Password"
              style={{ margin: 8 }}
              placeholder="e.g, ***********"
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              style={{ width: "60%", height: "1rem" }}
              variant="outlined"
            />
            <Button onClick={handleSubmitSignup} className="button-login">
              Sign up
            </Button>
          </Paper>
        </Typography>
      </Container>
    </React.Fragment>
  );
};
export default Signup;
