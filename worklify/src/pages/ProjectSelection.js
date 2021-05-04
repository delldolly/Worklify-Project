import React, { useEffect, useState } from "react";

// Material UI
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import TextField from "@material-ui/core/TextField";

// icon
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import AddIcon from "@material-ui/icons/Add";

// Image
// import logo from '../img/Logo.png';

// Component
import ProjectBox from "../components/ProjectBox";

//Firebase and Authen
import { useAuth } from "../contexts/AuthContext";
import { database } from "../firebase";
const useStyles = makeStyles((theme) => ({
  home: {
    height: "calc(100vh - 64px)",
    width: "100%",
  },
  projectSelected: {
    height: "85%",
  },
  projectInner: {
    width: "auto",
    height: "100%",
    whiteSpace: "nowrap",
    overflowX: "scroll",
    overflowY: "hidden",
    scrollBehavior: "smooth",
    "-webkit-overflow-scrolling": "touch",
  },
  addBtnBox: {
    width: "50vmin",
    height: "100%",
    padding: "3vmin",
    display: "inline-block",
    [theme.breakpoints.down(600)]: {
      width: '100vw'
    }
  },
  addBtn: {
    width: "100%",
    height: "100%",
    fontSize: "15vmax",
  },
  addModal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  modalPaper: {
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
  projectSlideBtn: {
    textAlign: "center",
    padding: "2vmin 0",
  },
  slideBtn: {
    padding: "15px 15px",
    margin: "0 2vmin",
    backgroundColor: "#5485A0",
    color: "#fff",
  },
}));

const ProjectSelection = () => {
  const classes = useStyles();
  const { currentUser } = useAuth();
  const [projectName, setProjectName] = useState("");
  const [desc, setDesc] = useState("");
  const [project, setProject] = useState([]);

  const [modalopen, setModalopen] = useState(false);

  // Open model to create project
  const handleOpen = () => {
    setModalopen(true);
  };
  const handleClose = () => {
    setModalopen(false);
  };

  const createProject = () => {
    console.log(projectName + " : " + desc);
    setProject([...project, <ProjectBox name={projectName} desc={desc} />]);
    database.ref("users/" + currentUser.uid + "/" + projectName).set({
      name: projectName,
      description: desc,
    });

    setProjectName("");
    setDesc("");
  };

  const submitCreateProject = () => {
    createProject();
    handleClose();
  };

  const slidePrev = (id, size) => {
    document.getElementById(id).scrollLeft -= size;
  };

  const slideNext = (id, size) => {
    document.getElementById(id).scrollLeft += size;
  };
  useEffect(() => {
    database.ref("users").once("value", (snapshot) => {
      if (snapshot.val()) {
        if (snapshot.val()[currentUser["uid"]]) {
          console.log(snapshot.val()[currentUser["uid"]]);
          setProject(
            Object.keys(snapshot.val()[currentUser["uid"]]).map((key) => {
              const name = snapshot.val()[currentUser["uid"]][key]["name"];
              const desc = snapshot.val()[currentUser["uid"]][key][
                "description"
              ];
              return <ProjectBox name={name} desc={desc} />;
            })
          );
        }
      }
    });
  }, []);
  return (
    <div className={classes.home}>
      <div className={classes.projectSelected}>
        <div id="project-selected" className={classes.projectInner}>
          {/*  Add projects component here */}
          {project.map((box) => box)}

          <div className={classes.addBtnBox} id="addBtnBox">
            <Button
              variant="contained"
              className={classes.addBtn}
              onClick={handleOpen}
            >
              <AddIcon />
            </Button>
          </div>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.addModal}
            open={modalopen}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={modalopen}>
              <div className={classes.modalPaper}>
                <h2>Create new project</h2>
                <form
                  noValidate
                  autoComplete="off"
                  className={classes.modalForm}
                >
                  <TextField
                    id="outlined-basic"
                    label="Project name"
                    variant="outlined"
                    className={classes.modalInput}
                    onChange={(e) => setProjectName(e.target.value)}
                  />
                  <TextField
                    id="outlined-basic"
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
                    disabled={projectName === "" || desc === "" ? true : false}
                    onClick={() => submitCreateProject()}
                  >
                    Submit
                  </Button>
                </form>
              </div>
            </Fade>
          </Modal>
        </div>
      </div>
      <div className={classes.projectSlideBtn}>
        <Button
          variant="contained"
          className={classes.slideBtn}
          onClick={() => slidePrev("project-selected", 500)}
        >
          <ArrowBackIcon />
        </Button>
        <Button
          variant="contained"
          className={classes.slideBtn}
          onClick={() => slideNext("project-selected", 500)}
        >
          <ArrowForwardIcon />
        </Button>
      </div>
    </div>
  );
};

export default ProjectSelection;
