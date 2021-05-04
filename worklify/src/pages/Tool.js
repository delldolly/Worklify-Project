import React from 'react';
import { Link } from "react-router-dom"

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import { IoMdCalculator } from 'react-icons/io';
import { GrNext } from 'react-icons/gr';
import { FaStickyNote } from 'react-icons/fa';
import { FaFileExcel } from 'react-icons/fa';

import "../css/tool.css";
const useStyles = makeStyles((theme) => ({
    containerStyle: {
        height: 'calc(100vh - 64px)',
        paddingTop: '3vmin',
        paddingBottom: '3vmin',
        overflow: 'auto',
    },
    containerInner: {
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    paper: {
        padding: '6vmin 10vmin',
    },
    buttonGrid: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: '1vmin 0'
    },
    paperInner: {
        padding: theme.spacing(1),
        marginRight: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        backgroundColor: "#5485A0",
    },
    toolDetail: {
        padding: '0 2vmin',
    },
    goBtn: {
        textAlign: 'center',
    }
}));
const Tool = () => {
    const classes = useStyles();

    return (
        <div className={classes.containerStyle}>
            <div className={classes.containerInner}>
                <Paper className={classes.paper}>
                    <Typography variant="h4" style={{ color: "#000000", fontWeight: "Bold", paddingBottom: "1vw" }}>
                        All Tools
                    </Typography>

                    <Button
                        className={classes.buttonGrid}
                        component={Link}
                        to="/"
                    >
                        <Grid item xs={2} sm={2}>
                            <Paper className={classes.paperInner}>
                                <IoMdCalculator className="Toolsize" style={{ color: "#000000" }} />
                            </Paper>
                        </Grid>
                        <Grid item xs={9} sm={9} className={classes.toolDetail}>
                            <div className="Toolsize2">
                                <Typography variant="h5" style={{ color: "#000000", fontWeight: "Bold" }}>
                                    Calculator
                                </Typography>
                                <Typography variant="subtitle1" gutterBottom  >
                                    Online calculator for quick calculations, along with a large collection of calculators on math, finance, fitness, and more, each with related in-depth information.
                                </Typography>
                            </div>

                        </Grid>
                        <Grid item xs={1} sm={1} className={classes.goBtn}>
                            <GrNext className="Toolsize" style={{ color: "#868686" }} />
                        </Grid>
                    </Button>

                    <Button
                        className={classes.buttonGrid}
                        component={Link}
                        to="/"
                    >
                        <Grid item xs={2} sm={2}>
                            <Paper className={classes.paperInner}>
                                <FaFileExcel className="Toolsize" style={{ color: "#000000" }} />
                            </Paper>
                        </Grid>
                        <Grid item xs={9} sm={9} className={classes.toolDetail}>
                            <div className="Toolsize2">
                                <Typography variant="h5" style={{ color: "#000000", fontWeight: "Bold" }}>
                                    Excel for list table
                                </Typography>
                                <Typography variant="subtitle1" gutterBottom  >
                                    Collaborate for free with Save spreadsheets in website. Edit your spreadsheets and download export file.
                                </Typography>
                            </div>

                        </Grid>
                        <Grid item xs={1} sm={1} className={classes.goBtn}>
                            <GrNext className="Toolsize" style={{ color: "#868686" }} />
                        </Grid>
                    </Button>

                    <Button
                        className={classes.buttonGrid}
                        component={Link}
                        to="/"
                    >
                        <Grid item xs={2} sm={2}>
                            <Paper className={classes.paperInner}>
                                <FaStickyNote className="Toolsize" style={{ color: "#000000" }} />
                            </Paper>
                        </Grid>
                        <Grid item xs={9} sm={9}>
                            <div className="Toolsize2" className={classes.toolDetail}>
                                <Typography variant="h5" style={{ color: "#000000", fontWeight: "Bold" }}>
                                    Notepad
                                </Typography>
                                <Typography variant="subtitle1" gutterBottom  >
                                    free online notepad in web browser. A simple text editor is all you need to use.you can create notes (ideas, to-do list, links, or any other plain text) that you would like to write just in a web browser online.
                                </Typography>
                            </div>

                        </Grid>
                        <Grid item xs={1} sm={1} className={classes.goBtn}>
                            <GrNext className="Toolsize" style={{ color: "#868686" }} />
                        </Grid>
                    </Button>
                </Paper>

            </div>
        </div>
    )
}
export default Tool;