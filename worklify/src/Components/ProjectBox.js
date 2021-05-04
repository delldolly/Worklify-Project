import React from "react";

// Material UI
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import img from '../image/Logo-project.png';

const useStyles = makeStyles((theme) => ({
    projectCard: {
        width: '400px',
        height: '100%',
        padding: '3vmin',
        display: 'inline-block',
        whiteSpace: 'normal',
        wordBreak: 'break-all',
    },
    projectBox: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        '& h4': {
            margin: 0,
            wordWrap: 'break-word',
            overflow: 'hidden',
            textOverflow: 'ellipsis', 
            maxHeight: '3.6em',
        }
    }
}));

const Project = ({name, desc}) => {
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
                    <h1>{name}</h1>
                    <h4>{desc}</h4>
                </div>
            </Button>
        </div>
    );
};

export default Project;
