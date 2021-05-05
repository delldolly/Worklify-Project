import React, { useEffect, useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import TextField from "@material-ui/core/TextField";

// import { FaFileAlt } from 'react-icons/fa';
// import { MdEdit } from "react-icons/md";
import Lottie from "lottie-react";
import Iconfile from "./lotties/4922-search-files.json";
import FooterGif from "./lotties/24393-online-work.json";
import { database } from "../firebase";
import { useAuth } from "../contexts/AuthContext";
import { Link } from "react-router-dom";

import "../css/management.css";

const useStyles = makeStyles((theme) => ({
  containerStyle: {
    height: "calc(100vh - 64px)",
    width: '100vw',
    padding: "3vmin",
    overflow: "auto",
  },
  containerInner: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  containerGrid: {
    justifyContent: "center",
  },
  paper: {
    height: "100%",
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    backgroundColor: "#5485A0",
    display: "flex",
    alignItems: "center",
  },
  icon: {
    width: "100%",
    height: "20vmin",
    [theme.breakpoints.down(600)]: {
      height: "35vmin",
    },
  },
  bottomLottie: {
    height: "50vmin",
    [theme.breakpoints.down(600)]: {
      height: "60vmin",
    },
  },
  showModal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    outline: 0,
  },
  editModalPaper: {
    width: "50%",
    backgroundColor: theme.palette.background.paper,
    borderRadius: "10px",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    [theme.breakpoints.down(900)]: {
      width: "90%",
    },
  },
  modalForm: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: theme.spacing(2, 4, 3),
  },
  modalInput: {
    width: "100%",
    margin: theme.spacing(2, 1),
  },
  deleteModalPaper: {
    width: "40%",
    backgroundColor: theme.palette.background.paper,
    borderRadius: "10px",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    [theme.breakpoints.down(1200)]: {
      width: "60%",
    },
    [theme.breakpoints.down(900)]: {
      width: "80%",
    },
    [theme.breakpoints.down(600)]: {
      width: "90%",
    },
  },
  deleteBtnBox: {
    width: 'auto',
    padding: '1.5vmin 0',
    display: 'flex',
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    [theme.breakpoints.down(600)]: {
      justifyContent: 'space-around',
    },
  },
  selectBtn: {
    width: '15vmin',
    [theme.breakpoints.down(600)]: {
      width: '40%',
    },
  },
}));

const Management = () => {
  const classes = useStyles();
  const { currentUser, nameProject, removeCookieName } = useAuth();
  const [projectName, setProjectName] = useState("");
  const [desc, setDesc] = useState("");
  const [editModalopen, setEditModalopen] = useState(false);
  const [deleteModalopen, setDeleteModalopen] = useState(false);

  // Edit modal
  // const handleEditOpen = () => {
  //   setEditModalopen(true);
  // };
  const handleEditClose = () => {
    setEditModalopen(false);
  };

  // Delete modal
  const handleDeleteOpen = () => {
    setDeleteModalopen(true);
  };
  const handleDeleteClose = () => {
    setDeleteModalopen(false);
  };

  const handleDeleteProject = () => {
    database.ref("users/" + currentUser.uid + "/" + nameProject).set(null);
    removeCookieName();
  };

  const handleEditProject = () => { };

  useEffect(() => {
    database
      .ref("users/" + currentUser.uid + "/" + nameProject)
      .once("value", (snapshot) => {
        console.log(snapshot.val());
        setProjectName(snapshot.val().name);
        setDesc(snapshot.val().description);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser]);

  return (
    <div className={classes.containerStyle}>
      <div className={classes.containerInner}>
        <Grid container spacing={3} className={classes.containerGrid}>
          <Grid item xs={12} sm={4} md={3}>
            <Paper className={classes.paper}>
              <Lottie animationData={Iconfile} className={classes.icon} />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={8} md={9}>
            <div className="tool-desc">
              <Typography
                variant="h4"
                style={{ color: "#000000", fontWeight: "Bold" }}
              >
                Project name
              </Typography>
              <Typography variant="h5" gutterBottom>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt utst, links, or any other
                plain text) that you would like to write just in a web browser
                online.
              </Typography>
              <div className="button-box">
                {/* <Button
                  variant="contained"
                  className="manage-btn"
                  style={{
                    backgroundColor: "#5485A0",
                  }}
                  onClick={handleEditOpen}
                >
                  EDIT PROJECT
                </Button> */}
                <Button
                  variant="contained"
                  className="manage-btn"
                  style={{
                    backgroundColor: "#175793",
                    // marginLeft: "1vw",
                  }}
                  onClick={handleDeleteOpen}
                >
                  DELELE PROJECT
                </Button>
              </div>

              {/* Edit Modal */}
              <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.showModal}
                open={editModalopen}
                onClose={handleEditClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                  timeout: 500,
                }}
              >
                <Fade in={editModalopen}>
                  <div className={classes.editModalPaper}>
                    <h2>Edit project</h2>
                    <form
                      noValidate
                      autoComplete="off"
                      className={classes.modalForm}
                    >
                      <TextField
                        value={projectName}
                        id="outlined"
                        label="Project name"
                        variant="outlined"
                        className={classes.modalInput}
                        onChange={(e) => setProjectName(e.target.value)}
                      />
                      <TextField
                        value={desc}
                        id="outlined"
                        label="Description"
                        variant="outlined"
                        multiline
                        rows={5}
                        className={classes.modalInput}
                        onChange={(e) => setDesc(e.target.value)}
                      />
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={handleEditProject}
                      >
                        Edit
                      </Button>
                    </form>
                  </div>
                </Fade>
              </Modal>
              {/* End edit modal */}

              {/* Delete Modal */}
              <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.showModal}
                open={deleteModalopen}
                onClose={handleDeleteClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                  timeout: 500,
                }}
              >
                <Fade in={deleteModalopen}>
                  <div className={classes.deleteModalPaper}>
                    <h2>Are you sure to <span style={{ color: '#f50057' }}>delete</span> your project ?</h2>
                    <div className={classes.deleteBtnBox}>
                      <Button
                        variant="contained"
                        color="secondary"
                        className={classes.selectBtn}
                        style={{ marginRight: '2vmin' }}
                        component={Link}
                        to="/ProjectSelection"
                        onClick={handleDeleteProject}
                      >
                        Yes
                      </Button>
                      <Button
                        variant="contained"
                        className={classes.selectBtn}
                        onClick={handleDeleteClose}
                      >
                        No
                      </Button>
                    </div>
                  </div>
                </Fade>
              </Modal>
              {/* End delete */}

            </div>
          </Grid>

          <Lottie animationData={FooterGif} className={classes.bottomLottie} />
        </Grid>
      </div>
    </div>
  );
};
export default Management;
