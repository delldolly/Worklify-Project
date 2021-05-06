import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { database } from "../firebase";
import { useAuth } from "../contexts/AuthContext";

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button';
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { FaStickyNote } from "react-icons/fa";

import Note from "./Note";
import CreateArea from "./CreateArea";

import "../css/notepad.css";
import '../css/tool.css';

const useStyles = makeStyles((theme) => ({
  containerStyle: {
    height: 'calc(100vh - 64px)',
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
  notepadPaper: {
    margin: '5vmin 0',
    padding: '7vmin 3vmin',
    borderRadius: '10px',
    boxShadow: "0px 0px 5px 0px rgb(0 0 0 / 20%)",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

const Notepad = () => {
  const classes = useStyles();

  const [notes, setNotes] = useState([]);
  const { currentUser, nameProject } = useAuth();
  function addNote(newNote) {
    setNotes((prevNotes) => {
      database
        .ref(
          "users/" +
          currentUser.uid +
          "/" +
          nameProject +
          "/task-" +
          currentUser.uid
        )
        .set([...prevNotes, newNote]);
      return [...prevNotes, newNote];
    });
  }

  useEffect(() => {
    database
      .ref(
        "users/" +
        currentUser.uid +
        "/" +
        nameProject +
        "/task-" +
        currentUser.uid
      )
      .once("value", (snapshot) => {
        if (snapshot.val()) {
          setNotes(snapshot.val());
        }
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function deleteNote(id) {
    setNotes((prevNotes) => {
      database
        .ref(
          "users/" +
          currentUser.uid +
          "/" +
          nameProject +
          "/task-" +
          currentUser.uid
        )
        .set(
          prevNotes.filter((noteItem, index) => {
            return index !== id;
          })
        );
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

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
              <FaStickyNote className="tool-icon" style={{ color: "#000000" }} />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={8} md={10}>
            <div className="tool-desc">
              <Typography
                variant="h4"
                style={{ color: "#000000", fontWeight: "Bold" }}
              >
                Notepad
              </Typography>
              <Typography variant="h5" gutterBottom>
                Free online notepad in web browser. A simple text editor is
                all you need to use.you can create notes (ideas, to-do list,
                links, or any other plain text) that you would like to write
                just in a web browser online.
              </Typography>
            </div>
          </Grid>

        </Grid>

        <Paper className={classes.notepadPaper}>
          <div>
            <CreateArea onAdd={addNote} />
            {notes.map((noteItem, index) => {
              return (
                <Note
                  key={index}
                  id={index}
                  title={noteItem.title}
                  content={noteItem.content}
                  onDelete={deleteNote}
                />
              );
            })}
          </div>
        </Paper>

        {/* <Grid container spacing={3}>
          <Grid item xs={12}>
          </Grid>
        </Grid> */}
      </div>
    </div>
  );
};
export default Notepad;
