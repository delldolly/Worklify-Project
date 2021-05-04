import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import "../css/notepad.css";
// import { FaFileAlt } from 'react-icons/fa';
import { MdEdit } from 'react-icons/md';
import Lottie from 'lottie-react';
import Iconfile from './lotties/4922-search-files.json';
import FooterGif from './lotties/24393-online-work.json';
const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        backgroundColor: "#5485A0",
    },
    paper2: {
        padding: theme.spacing(10),
    },
    paper3: {
        padding: theme.spacing(2),
        backgroundColor: "#5485A0",
    },
    paper4: {
        padding: theme.spacing(10),
       boxShadow: "0px 0px 0px 0px rgb(0 0 0 / 20%)",
},
}));

  
const Notepad = () => {
    const classes = useStyles();
   
    return (
        <div>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                </Grid>
            </Grid>

            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper className={classes.paper4}>
                        <Grid container spacing={8}>
                            <Grid item xs={3} sm={3}>
                                <Paper className={classes.paper}>
                                <Lottie animationData={Iconfile} style={{height:"14vw"}} />
                                {/* <FaFileAlt className="Toolsize" style={{ color: "#FFFFFF",paddingTop:"2.5vw",paddingBottom:"2.5vw"}} /> */}
                                </Paper>
                            </Grid>
                            <Grid item xs={8} sm={8}>
                                <div className="Toolsize2">
                                <Typography variant="h4" style={{ color: "#000000", fontWeight: "Bold"}}>
                                Project name <MdEdit style={{ color: "#000000", width:"2vw", height:"2vw"}} /></Typography>
                                    <Typography variant="subtitle1" gutterBottom  >
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt utst, links, or any other plain text) that you would like to write just in a web browser online.
      </Typography>
      <Button variant="contained" style={{ backgroundColor: "#5485A0",color: "#FFFFFF",width: "15vw", border:"1vw"}}>EDIT</Button>
      <Button variant="contained" style={{ backgroundColor: "#175793",color: "#FFFFFF",width: "15vw", border:"1vw",marginLeft:"1vw"}}>DELELE PROJECT</Button>
                                    {/* <Typography variant="subtitle1" gutterBottom style={{ color: "#175793" }} >
                                        Go to favorite Tools
      </Typography> */}
                                </div>
                            </Grid>
                            <Grid item xs={1} sm={1}>
                            </Grid>
                        </Grid>
                        {/* <Typography variant="h5" style={{ color: "#000000", fontWeight: "Bold",paddingBottom:"1vw",paddingTop:"2vw"}}>
                        Recent Projects
</Typography>
<Grid container spacing={8}>
<Grid item xs={2} sm={2}>
                                <Paper className={classes.paper}>
                                <AiFillFile className="Toolsize" style={{ color: "#FFFFFF" }} />
                                </Paper>
                                <Typography variant="h6" style={{ color: "#000000", fontWeight: "Bold",paddingBottom:"1vw",paddingTop:"2vw",textAlign: "center"}}>
                        My Project 1
</Typography>
<Button variant="contained" style={{ backgroundColor: "#5485A0",color: "#FFFFFF",width: "11vw", border:"1vw"}}>Edit</Button>

                            </Grid>
                            <Grid item xs={2} sm={2}>
                                <Paper className={classes.paper}>
                                <AiFillFile className="Toolsize" style={{ color: "#FFFFFF" }} />
                                </Paper>
                                <Typography variant="h6" style={{ color: "#000000", fontWeight: "Bold",paddingBottom:"1vw",paddingTop:"2vw",textAlign: "center"}}>
                        My Project 2
</Typography>
<Button variant="contained" style={{ backgroundColor: "#5485A0",color: "#FFFFFF",width: "11vw", border:"1vw"}}>Edit</Button>

                            </Grid>
                            <Grid item xs={2} sm={2}>
                                <Paper className={classes.paper}>
                                <AiFillFile className="Toolsize" style={{ color: "#FFFFFF" }} />
                                </Paper>
                                <Typography variant="h6" style={{ color: "#000000", fontWeight: "Bold",paddingBottom:"1vw",paddingTop:"2vw",textAlign: "center"}}>
                        My Project 3
</Typography>
<Button variant="contained" style={{ backgroundColor: "#5485A0",color: "#FFFFFF",width: "11vw", border:"1vw"}}>Edit</Button>

                            </Grid>
                            <Grid item xs={2} sm={2}>
                                <Paper className={classes.paper}>
                                <AiFillFile className="Toolsize" style={{ color: "#FFFFFF" }} />
                                </Paper>
                                <Typography variant="h6" style={{ color: "#000000", fontWeight: "Bold",paddingBottom:"1vw",paddingTop:"2vw",textAlign: "center"}}>
                        My Project 4
</Typography>
<Button variant="contained" style={{ backgroundColor: "#5485A0",color: "#FFFFFF",width: "11vw", border:"1vw"}}>Edit</Button>

                            </Grid>
                            </Grid> */}
                             <Lottie animationData={FooterGif} style={{height:"20vw"}} />
                    </Paper>

                </Grid>
            </Grid>
        </div>
    )
}
export default Notepad;