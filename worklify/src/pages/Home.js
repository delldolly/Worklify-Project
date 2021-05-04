import React from 'react';
import { Link } from 'react-router-dom';
import "./../css/Home.css"

import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

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
        [theme.breakpoints.down(560)]: {
            height: 'auto',
            justifyContent: 'flex-start',
        }
    },
    buttonBox: {
        display: 'flex', 
        marginTop: '6vmin', 
        width: '100%', 
        justifyContent: 'space-around',
    },
    buttonStyle: {
        width: '20%', 
        padding: '0.5rem', 
        color: 'white',
        [theme.breakpoints.down(780)]: {
            width: '40%', 
        }
    },
}));

const Home = () => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg" className={classes.containerStyle}>
                <Typography component="div" className={classes.typographyStyle}>
                    <p className="header">Welcome to Worklify</p>
                    <span className="content">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel lobortis justo. Integer blandit
                        sollicitudin eros, a sollicitudin lectus congue eget. Mauris vitae maximus lectus. Nulla nisi sem, porta
                        nec viverra eu, blandit vel tortor. Integer sed ipsum dignissim, ullamcorper sapien quis, porta augue.
                        Ut a augue dapibus velit viverra dictum eget suscipit neque. Vivamus dignissim neque nec congue
                        pharetra. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel lobortis justo. Integer blandit
                        sollicitudin eros, a sollicitudin lectus congue eget. Mauris vitae maximus lectus. Nulla nisi sem, porta
                        nec viverra eu, blandit vel tortor. Integer sed ipsum dignissim, ullamcorper sapien quis, porta augue.
                        Ut a augue dapibus velit viverra dictum eget suscipit neque. Vivamus dignissim neque nec congue
                        pharetra.
                    </span>
                    <div className={classes.buttonBox}>
                        <Button
                            className={classes.buttonStyle}
                            style={{ backgroundColor: '#5485A0' }}
                            component={Link}
                            to="/Login"
                        >
                            Log in
                        </Button>
                        <Button 
                            className={classes.buttonStyle} 
                            style={{ backgroundColor: '#175793' }}
                            component={Link}
                            to="/Signup"
                        >
                            Sign up
                        </Button>
                    </div>
                </Typography>
            </Container>
        </React.Fragment>
    );
}
export default Home;