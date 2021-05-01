import React from "react";

// Material UI
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import img from '../img/Logo-project.png';

const useStyles = makeStyles((theme) => ({
    projectCard: {
        width: '400px',
        height: '100%',
        padding: '3vmin',
        display: 'inline-block',
    },
    projectBox: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    }
}));

const Project = () => {
    const classes = useStyles();

    return (
        <div className={classes.projectCard}>
            <Button
                variant="contained"
                style={{ width: '100%', height: '100%', backgroundColor: '#fff', border: '1px solid #555' }}
            >
                <div className={classes.projectBox}>
                    <div>
                        <img src={img} alt="img" width="60%" />
                    </div>
                    <h1>Project name</h1>
                    <h4>Description</h4>
                </div>
            </Button>
        </div>
    );
};

export default Project;
