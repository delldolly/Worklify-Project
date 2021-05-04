import React from 'react';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { FaFileExcel } from 'react-icons/fa';
import "../css/excel.css";
import "@grapecity/spread-excelio";
import Button from '@material-ui/core/Button';
import { SpreadSheets, Worksheet } from "@grapecity/spread-sheets-react";
import "@grapecity/spread-sheets/styles/gc.spread.sheets.excel2013white.css";
import * as Excel from "@grapecity/spread-excelio";
import { saveAs } from "file-saver";
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


const Excels = () => {
  const [spread, setSheet] = useState(null)
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
              <Grid item xs={2} sm={2}>
                <Paper className={classes.paper}>
                <FaFileExcel className="Toolsize" style={{ color: "#000000" }} />
                </Paper>
              </Grid>
              <Grid item xs={8} sm={8}>
                <div className="Toolsize2">
                  <Typography variant="h5" style={{ color: "#000000", fontWeight: "Bold" }}>
                  Excel for list table 
</Typography>
                  <Typography variant="subtitle1" gutterBottom  >
                  Collaborate for free with Save spreadsheets in website. Edit your spreadsheets and download export file.
      </Typography>
                  {/* <Typography variant="subtitle1" gutterBottom style={{ color: "#175793" }} >
                    Go to favorite Tools
      </Typography> */}
                </div>
              </Grid>
              <Grid item xs={2} sm={2}>
              </Grid>
            </Grid>
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
            <Button variant="contained" onClick={() => {
              if (spread != null) {
                var excelio = new Excel.IO();
                excelio.save(
                  spread.toJSON(),
                  (blob) => {
                    saveAs(blob, "downlode.xlsx");
                  }
                )
              }
            }}>Export File (.xsl)</Button>
          </Paper>

        </Grid>
      </Grid>
    </div>
  )
}
export default Excels;