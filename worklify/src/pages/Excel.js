import React, { useState } from 'react';
import { Link } from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import "@grapecity/spread-excelio";
import * as Excel from "@grapecity/spread-excelio";
import "@grapecity/spread-sheets/styles/gc.spread.sheets.excel2013white.css";
import { SpreadSheets, Worksheet } from "@grapecity/spread-sheets-react";
import { saveAs } from "file-saver";

import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { FaFileExcel } from 'react-icons/fa';

import '../css/tool.css';

const useStyles = makeStyles((theme) => ({
  containerStyle: {
    height: 'calc(100vh - 64px)',
    width: '100vw',
    paddingTop: '3vmin',
    paddingBottom: '3vmin',
    overflow: 'auto',
  },
  containerInner: {
    padding: '2vmin 5vmin',
  },
  backBtn: {
    fontSize: '2.5vmin',
    [theme.breakpoints.down(600)]: {
      fontSize: '3vmin',
    },
  },
  containerGrid: {
    padding: '3vmin 0',
  },
  paper: {
    height: "100%",
    width: 'auto',
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    backgroundColor: "#5485A0",
    display: "flex",
    alignItems: "center",
  },
  exclePaper: {
    margin: '5vmin 0',
    padding: '7vmin 10vmin',
    borderRadius: '10px',
    boxShadow: "0px 0px 5px 2px rgb(0 0 0 / 20%)",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));


const Excels = () => {
  const classes = useStyles();

  const [spread, setSheet] = useState(null)

  return (
    <div className={classes.containerStyle}>
      <div className={classes.containerInner}>
        <Button
          className={classes.backBtn}
          component={Link}
          to="/project/tools"
        >
          <ArrowBackIosIcon />
          Back
        </Button>

        {/* header */}
        <Grid container spacing={3} className={classes.containerGrid}>
          <Grid item xs={12} sm={4} md={2}>
            <Paper className={classes.paper}>
              <FaFileExcel className="tool-icon" style={{ color: "#000000" }} />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={8} md={10}>
            <div className="tool-desc">
              <Typography
                variant="h4"
                style={{ color: "#000000", fontWeight: "Bold" }}
              >
                Excel for list table
              </Typography>
              <Typography variant="h5" gutterBottom>
                Collaborate for free with Save spreadsheets in website.
                Edit your spreadsheets and download export file.
              </Typography>

              <div className="button-box">
                <Button
                  variant="contained"
                  onClick={() => {
                    if (spread != null) {
                      var excelio = new Excel.IO();
                      excelio.save(
                        spread.toJSON(),
                        (blob) => {
                          saveAs(blob, "downlode.xlsx");
                        }
                      )
                    }
                  }}>
                  Export File (.xsl)
                </Button>
              </div>
            </div>
          </Grid>
        </Grid>

        {/* Excle */}
        <Paper className={classes.exclePaper}>
          <SpreadSheets
            hostStyle={{
              width: "70vw",
              height: "600px",
              paddingTop: "2vw"
            }}
            workbookInitialized={(spread) => { setSheet(spread) }}
          >
            <Worksheet />
          </SpreadSheets>

        </Paper>
      </div>
    </div>
  )
}
export default Excels;