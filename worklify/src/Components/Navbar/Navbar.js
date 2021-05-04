import React from 'react';
import {
    Switch,
    Route,
    NavLink
} from "react-router-dom";

// Material UI
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

// Image
import logo from '../../img/Logo.png';

// Page Component
import ProjectSelection from '../../pages/ProjectSelection';

const useStyles = makeStyles((theme) => ({
    nav: {
        display: 'flex',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        backgroundColor: '#5485A0',
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    contentProjectSelection: {
        flexGrow: 1,
        padding: 0,
        marginTop: '64px',
        width: '100vw',
    },
}));

const Navbar = () => {
    const classes = useStyles();

    return (
        <div className={classes.nav}>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={classes.appBar}
            >
                <Toolbar>
                    <Box
                        display="flex"
                        flexDirection="row"
                        justifyContent="space-between"
                        m={1}
                        style={{ width: '100%' }}
                    >
                        <Box
                            p={1}
                            style={{ height: "45px", outline: 0 }}
                            component={NavLink}
                            to='/'
                            exact
                        >
                            <img
                                src={logo}
                                alt="logo"
                                height="100%"
                            />
                        </Box>
                        <Box
                            display="flex"
                            flexDirection="row"
                            alignItems="center"
                        >
                            <Box className="Navbar-user" px={2}>
                                User
                                {/* { condition ? 'User' : 'Sign up' } */}
                            </Box>
                            <Box className="Navber-logout" px={2}>
                                Log out
                                {/* { condition ? 'Log out' : 'Login' } */}
                            </Box>
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>

            <main className={classes.contentProjectSelection}>
                
                <Switch>
                    <Route exact path='/'>
                        <ProjectSelection />
                    </Route>
                </Switch>

            </main>
        </div>
    );
}


export default Navbar;