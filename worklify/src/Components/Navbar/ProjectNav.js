import React, { useState } from 'react';
import {
    Switch,
    Route,
    NavLink
} from "react-router-dom";

// Material UI
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

// icon
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import BuildIcon from '@material-ui/icons/Build';
import SettingsIcon from '@material-ui/icons/Settings';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';

import { RiBookLine } from 'react-icons/ri';
// import { FiCheckSquare } from 'react-icons/fi';

// Image
import logo from '../../img/Logo.png';
import proflie from '../../img/exProfile.jpg';

const drawerWidth = 260;

const useStyles = makeStyles((theme) => ({
    nav: {
        display: 'flex',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        backgroundColor: 'transparent',
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        color: '#fff',
    },
    drawerPaper: {
        width: drawerWidth,
        backgroundColor: '#5485A0',
        boxShadow: "3px 0px 15px 0px rgba(0,0,0,0.5)",
        overflowX: 'hidden',
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        // padding: theme.spacing(3),
        padding: 0,
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginTop: "64px",
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },

    navButton: {
        color: '#fff',
        justifyContent: 'flex-start',
        padding: '0.7rem 1.2rem',
        fontSize: '1rem',
    },
}));


const ProjectNav = () => {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = useState(false);

    const [page, setPage] = useState('');
    const [color, setColor] = useState('#fff');

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.nav}>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar>
                    <IconButton
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, open && classes.hide)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Box
                        display="flex"
                        flexDirection="row"
                        justifyContent="space-between"
                        // justifyContent="flex-end"
                        m={1}
                        style={{ width: '100%' }}
                    >
                        <div />
                        <Typography variant="h5" gutterBottom style={{ color: '#000' }}>
                            {page}
                        </Typography>
                        <Avatar 
                            src={proflie}
                            alt="Remy Sharp"
                            style={{ border: "2px solid #222" }}
                        />
                    </Box>
                </Toolbar>
            </AppBar>

            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </div>
                <Divider />
                <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                    p={1} mb={3}
                    style={{ width: '100%', color: '#fff' }}
                >
                    <Box
                        p={1}
                        style={{ width: "60%" }}
                    >
                        <img
                            src={logo}
                            alt="logo"
                            width="100%"
                        />
                    </Box>
                    <Typography variant="h5" gutterBottom>
                        Project Name
                    </Typography>
                </Box>
                <Divider />
                <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                >
                    <Button
                        startIcon={<FormatListBulletedIcon />}
                        className={classes.navButton}
                        component={NavLink}
                        onClick={() => {
                            setPage('');
                            setColor('#fff');
                        }}
                        activeStyle={{ backgroundColor: "#175793", borderRadius: 0 }}
                        to='/tasks'
                        exact
                    >
                        All Tasks
                    </Button>
                    <Button
                        startIcon={<BuildIcon />}
                        className={classes.navButton}
                        component={NavLink}
                        onClick={() => {
                            setPage('Tools and Utilities');
                            setColor('#5485A0');
                        }}
                        activeStyle={{ backgroundColor: "#175793", borderRadius: 0 }}
                        to='/tools'
                    >
                        Tools
                    </Button>
                    <Button
                        startIcon={<RiBookLine />}
                        className={classes.navButton}
                        component={NavLink}
                        onClick={() => {
                            setPage('Tutorials');
                            setColor('#fff');
                        }}
                        activeStyle={{ backgroundColor: "#175793", borderRadius: 0 }}
                        to='/tutorials'
                    >
                        Tutorials
                    </Button>
                    <Button
                        startIcon={<SettingsIcon />}
                        className={classes.navButton}
                        component={NavLink}
                        onClick={() => {
                            setPage('Project Management');
                            setColor('#fff');
                        }}
                        activeStyle={{ backgroundColor: "#175793", borderRadius: 0 }}
                        to='/manager'
                    >
                        Project Manager
                    </Button>
                    <Button
                        startIcon={<NotificationsActiveIcon />}
                        className={classes.navButton}
                        component={NavLink}
                        onClick={() => {
                            setPage('Notification');
                            setColor('#fff');
                        }}
                        activeStyle={{ backgroundColor: "#175793", borderRadius: 0 }}
                        to='/notification'
                    >
                        Notification
                    </Button>
                </Box>
                <Divider />
            </Drawer>
            <main
                className={clsx(classes.content, {
                    [classes.contentShift]: open,
                })}
            >

                <Switch>
                    <Route exact path='/'>
                        <div>Hello World</div>
                    </Route>
                    <Route path='/tasks'>
                        <div>Tasks</div>
                    </Route>
                    <Route path='/tools'>
                        <div>Tools</div>
                    </Route>
                    <Route path='/tutorials'>
                        <div>Tutorials</div>
                    </Route>
                    <Route path='/manager'>
                        <div>Project Manager</div>
                    </Route>
                    <Route path='/notification'>
                        <div>Notification</div>
                    </Route>
                </Switch>

            </main>
        </div>
    );
}


export default ProjectNav;