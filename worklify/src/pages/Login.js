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

const Login = () => {
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      alert("Signin Success");
      history.push("/Task");
    } catch (error) {
      alert(error);
    }
  };
  return (
    <React.Fragment>
      <CssBaseline />
      {/* {JSON.stringify(currentUser)} */}
      <Container maxWidth="lg">
        <Typography
          component="div"
          style={{
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
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
