import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { IoMdCalculator } from 'react-icons/io';
import { useState } from "react";
import * as Math from "mathjs";

import "../css/cal.css";
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


const Calculator = () => {
  const classes = useStyles();


  const [inputText, setInputText] = useState([""]);
  const [isMouseOver, setMouseOver] = useState(false);

  function handleChange() { }

  function handleMouseOver() {
    setMouseOver(true);
  }

  function handleMouseOut() {
    setMouseOver(false);
  }

  function handleClick1() {
    setInputText(prevValues => {
      return [...prevValues, "1"].join("");
    });
  }

  function handleClick2() {
    setInputText(prevValues => {
      return [...prevValues, "2"].join("");
    });
  }

  function handleClick3() {
    setInputText(prevValues => {
      return [...prevValues, "3"].join("");
    });
  }

  function handleClick4() {
    setInputText(prevValues => {
      return [...prevValues, "4"].join("");
    });
  }

  function handleClick5() {
    setInputText(prevValues => {
      return [...prevValues, "5"].join("");
    });
  }

  function handleClick6() {
    setInputText(prevValues => {
      return [...prevValues, "6"].join("");
    });
  }

  function handleClick7() {
    setInputText(prevValues => {
      return [...prevValues, "7"].join("");
    });
  }

  function handleClick8() {
    setInputText(prevValues => {
      return [...prevValues, "8"].join("");
    });
  }

  function handleClick9() {
    setInputText(prevValues => {
      return [...prevValues, "9"].join("");
    });
  }

  function handleClick0() {
    setInputText(prevValues => {
      return [...prevValues, "0"].join("");
    });
  }

  function handleClickDot() {
    setInputText(prevValues => {
      return [...prevValues, "."].join("");
    });
  }

  function handleClickAC() {
    setInputText(prevValues => {
      return [...prevValues].slice(0, [...prevValues].length - 1).join("");
    });
  }

  function handleClickAdd() {
    setInputText(prevValues => {
      return [...prevValues, "+"].join("");
    });
  }

  function handleClickMinus() {
    setInputText(prevValues => {
      return [...prevValues, "-"].join("");
    });
  }

  function handleClickMultiply() {
    setInputText(prevValues => {
      return [...prevValues, "*"].join("");
    });
  }

  function handleClickDivide() {
    setInputText(prevValues => {
      return [...prevValues, "/"].join("");
    });
  }

  function handleClickEqual() {
    var result;
    result = Math.evaluate(inputText);
    setInputText([result]);
  }

  function handleKeyPress(event) {
    switch (event.key) {
      case "1":
        handleClick1();
        break;
      case "2":
        handleClick2();
        break;
      case "3":
        handleClick3();
        break;
      case "4":
        handleClick4();
        break;
      case "5":
        handleClick5();
        break;
      case "6":
        handleClick6();
        break;
      case "7":
        handleClick7();
        break;
      case "8":
        handleClick8();
        break;
      case "9":
        handleClick9();
        break;
      case "0":
        handleClick0();
        break;
      case ".":
        handleClickDot();
        break;
      case "+":
        handleClickAdd();
        break;
      case "-":
        handleClickMinus();
        break;
      case "*":
        handleClickMultiply();
        break;
      case "/":
        handleClickDivide();
        break;
      case "Enter":
        handleClickEqual();
        break;

      default:
    }
  }

  function handleBackspace(event) {
    if (event.keyCode === 8 || event.keyCode === 46) {
      handleClickAC();
    }
  }

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12}>
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper2}>
            <Grid container spacing={8}>
              <Grid item xs={2} sm={2}>
                <Paper className={classes.paper}>
                  <IoMdCalculator className="Toolsize" style={{ color: "#000000" }} />
                </Paper>
              </Grid>
              <Grid item xs={8} sm={8}>
                <div className="Toolsize2">
                  <Typography variant="h5" style={{ color: "#000000", fontWeight: "Bold" }}>
                    Calculator
                                    </Typography>
                  <Typography variant="subtitle1" gutterBottom  >
                    Online calculator for quick calculations, along with a large collection of calculators on math, finance, fitness, and more, each with related in-depth information.
                                    </Typography>
                  {/* <Typography variant="subtitle1" gutterBottom style={{ color: "#175793" }} >
                                        Go to favorite Tools
                                    </Typography> */}
                </div>
              </Grid>
              <Grid item xs={2} sm={2}>
              </Grid>
            </Grid>
            <div
              className="container-s"
              onKeyPress={handleKeyPress}
              onKeyDown={handleBackspace}
            >
              <h1>Calculator</h1>
              <input
                type="text"
                placeholder="|"
                className="cal-input"
                value={inputText}
                onChange={handleChange}
              />
              <button name="1" onClick={handleClick1} className="number-button">
                1
              </button>
              <button onClick={handleClick2} className="number-button">
                2
              </button>
              <button onClick={handleClick3} className="number-button">
                3
              </button>
              <button onClick={handleClickAdd} className="number-button">
                +
              </button>
              <br />
              <button onClick={handleClick4} className="number-button">
                4
              </button>
              <button onClick={handleClick5} className="number-button">
                5
              </button>
              <button onClick={handleClick6} className="number-button">
                6
              </button>
              <button onClick={handleClickMinus} className="number-button">
                -
              </button>
              <br />
              <button onClick={handleClick7} className="number-button">
                7
              </button>
              <button onClick={handleClick8} className="number-button">
                8
              </button>
              <button onClick={handleClick9} className="number-button">
                9
              </button>
              <button onClick={handleClickMultiply} className="number-button">
                *
              </button>
              <br />
              <button onClick={handleClickDot} className="number-button">
                .
              </button>
              <button onClick={handleClick0} className="number-button">
                0
              </button>

              <button onClick={handleClickAC} className="number-button">
                🡸
              </button>
              <button onClick={handleClickDivide} className="number-button">
                /
              </button>
              <br />

              <button
                onClick={handleClickEqual} className="total-buttons"
                style={{ backgroundColor: isMouseOver ? "black" : "white" }}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
              >
                =
              </button>
            </div>
          </Paper>

        </Grid>
      </Grid>
    </div>
  )
}
export default Calculator;