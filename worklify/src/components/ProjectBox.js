import React from "react";
import { Link } from "react-router-dom"
// Material UI
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import img from '../image/Logo-project.png';


//firebase and Auth
import { useAuth } from "../contexts/AuthContext"

const useStyles = makeStyles((theme) => ({
    projectCard: {
        width: '50vmin',
        height: '100%',
        padding: '3vmin',
        display: 'inline-block',
        whiteSpace: 'normal',
        wordBreak: 'break-all',
        [theme.breakpoints.down(600)]: {
          width: '100vw'
        }
    },
    projectBox: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        '& h4': {
            margin: 0,
            wordWrap: 'break-word',
            overflow: 'hidden',
            textOverflow: 'ellipsis', 
            maxHeight: '3.6em',
        }
    }
}));

const ProjectBox = ({name, desc}) => {
    const classes = useStyles();
    const {setCookieName} = useAuth();
    return (
        <div className={classes.projectCard}>
            <Button
                variant="contained"
                style={{ width: '100%', height: '100%', backgroundColor: '#fff', border: '1px solid #555' }}
                component={Link}
                to= {"/project/tasks/" + name}
                onClick={()=>{setCookieName(name)}}
            >
                <div className={classes.projectBox}>
                    <div style={{ textAlign: 'center' }}>
                        <img src={img} alt="img" width="60%" />
                    </div>
                    <h1>{name}</h1>
                    <h4>{desc}</h4>
                </div>
            </Button>
        </div>
    );
};

export default ProjectBox;
