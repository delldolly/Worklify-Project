import React from 'react';
import "./../css/Signup.css"
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const Login = () => {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg">
                <Typography component="div" style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                    <Paper className="setPaper" elevation={3}>
                        <p className="head">Sign up</p>
                        <TextField
                            id="name"
                            label="Name"
                            style={{ margin: 8 }}
                            placeholder="Enter Name"
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            style={{width:'60%',height:'1rem'}}
                            variant="outlined"
                        />
                        <TextField
                            id="username"
                            label="Email (or username)"
                            style={{ margin: 8 }}
                            placeholder="e.g., abc1234@xxx.com"
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            style={{width:'60%',height:'1rem'}}
                            variant="outlined"
                        />
                        <TextField
                            id="password"
                            label="Password"
                            style={{ margin: 8 }}
                            placeholder="e.g, ***********"
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            style={{width:'60%',height:'1rem'}}
                            variant="outlined"
                        />
                        <Button className="button-login">Sign up</Button>
                    </Paper>
                </Typography>
            </Container>
        </React.Fragment>
    );
}
export default Login;