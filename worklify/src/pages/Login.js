import React from 'react';
import "./../css/Login.css"
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
                        <p className="head">Log in</p>
                        <TextField
                            id="outlined-uncontrolled"
                            label="Enter Email"
                            variant="outlined"
                            style={{width:'60%', height:'1rem'}}
                        />
                        <TextField
                            id="outlined-uncontrolled"
                            label="Enter Password"
                            variant="outlined"
                            style={{width:'60%', height:'1rem'}}
                        />
                        <Button className="button-login">Log in</Button>
                    </Paper>
                </Typography>
            </Container>
        </React.Fragment>
    );
}
export default Login;