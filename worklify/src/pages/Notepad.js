import React from 'react';
import { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { FaStickyNote } from 'react-icons/fa';
import Note from "./Note";
import CreateArea from "./CreateArea";
import "../css/notepad.css";
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
    const [notes, setNotes] = useState([]);

    function addNote(newNote) {
      setNotes(prevNotes => {
        return [...prevNotes, newNote];
      });
    }
  
    function deleteNote(id) {
      setNotes(prevNotes => {
        return prevNotes.filter((noteItem, index) => {
          return index !== id;
        });
      });
    }
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
                                    {/* <Typography variant="subtitle1" gutterBottom style={{ color: "#175793" }} >
                                        Go to favorite Tools
      </Typography> */}
                                </div>
                            </Grid>
                            <Grid item xs={2} sm={2}>
                            </Grid>
                        </Grid>
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

                </Grid>
            </Grid>
        </div>
    )
}
export default Notepad;