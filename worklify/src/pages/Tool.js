import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { IoMdCalculator } from 'react-icons/io';
import { GrNext } from 'react-icons/gr';
import { FaStickyNote } from 'react-icons/fa';
import { FaFileExcel } from 'react-icons/fa';

import "../css/tool.css";
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
}));
const Tool = () => {
    const classes = useStyles();
    return (
        <div>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                </Grid>
            </Grid>

            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper className={classes.paper2}>
                        <Typography variant="h4" style={{ color: "#000000", fontWeight: "Bold",paddingBottom:"1vw"}}>
                            All Tools
</Typography>
                        {/* <Typography variant="subtitle1" gutterBottom style={{ color: "#175793" }} >
                            Go to favorite Tools
      </Typography> */}
                        <Grid container spacing={8}>
                            <Grid item xs={2} sm={2}>
                                <Paper className={classes.paper}>
                                <IoMdCalculator className="Toolsize" style={{ color: "#000000" }} />
                                </Paper>
                            </Grid>
                            <Grid item xs={8} sm={8}>
                                <div className="Toolsize2">
                                    <Typography variant="h5" style={{ color: "#000000", fontWeight: "Bold"}}>
                                    Calculator
</Typography>
                                    <Typography variant="subtitle1" gutterBottom  >
                                    Online calculator for quick calculations, along with a large collection of calculators on math, finance, fitness, and more, each with related in-depth information.
      </Typography>
      </div>
                                
                            </Grid>
                            <Grid item xs={2} sm={2}>
                                <GrNext className="Toolsize" style={{ color: "#868686" }} />
                            </Grid>
                        </Grid>

                        <Grid container spacing={8}>
                            <Grid item xs={2} sm={2}>
                                <Paper className={classes.paper}>
                                <FaFileExcel className="Toolsize" style={{ color: "#000000" }} />
                                </Paper>
                            </Grid>
                            <Grid item xs={8} sm={8}>
                                <div className="Toolsize2">
                                    <Typography variant="h5" style={{ color: "#000000", fontWeight: "Bold"}}>
                                    Excel for list table 
</Typography>
                                    <Typography variant="subtitle1" gutterBottom  >
                                    Collaborate for free with Save spreadsheets in website. Edit your spreadsheets and download export file.
      </Typography>
      </div>
                                
                            </Grid>
                            <Grid item xs={2} sm={2}>
                                <GrNext className="Toolsize" style={{ color: "#868686" }} />
                            </Grid>
                        </Grid>

                        <Grid container spacing={8}>
                            <Grid item xs={2} sm={2}>
                                <Paper className={classes.paper}>
                                <FaStickyNote className="Toolsize" style={{ color: "#000000" }} />
                                </Paper>
                            </Grid>
                            <Grid item xs={8} sm={8}>
                                <div className="Toolsize2">
                                    <Typography variant="h5" style={{ color: "#000000", fontWeight: "Bold"}}>
                                    Notepad 
</Typography>
                                    <Typography variant="subtitle1" gutterBottom  >
                                    free online notepad in web browser. A simple text editor is all you need to use.you can create notes (ideas, to-do list, links, or any other plain text) that you would like to write just in a web browser online.
      </Typography>
      </div>
                                
                            </Grid>
                            <Grid item xs={2} sm={2}>
                                <GrNext className="Toolsize" style={{ color: "#868686" }} />
                            </Grid>
                        </Grid>
                    </Paper>

                </Grid>
            </Grid>
        </div>
    )
}
export default Tool;