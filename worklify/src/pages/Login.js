import React, { useState } from "react";
import "./../css/Login.css";
import CssBaseline from "@material-ui/core/CssBaseline";

import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useAuth } from "../contexts/AuthContext";
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';

import { useSnackbar } from 'notistack';

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

const Login = () => {
  const classes = useStyles();
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      successClick("Signin Success");
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
            <p className="head">Log in</p>
            <TextField
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="outlined-uncontrolled"
              label="Enter Email"
              variant="outlined"
              style={{ width: "60%", height: "1rem" }}
            />
            <TextField
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="outlined-uncontrolled"
              label="Enter Password"
              variant="outlined"
              style={{ width: "60%", height: "1rem" }}
            />
            <Button onClick={handleSubmitLogin} className="button-login">
              Log in
            </Button>
          </Paper>
        </Typography>
      </Container>
    </React.Fragment>
  );
};
export default Login;
