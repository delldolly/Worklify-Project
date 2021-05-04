import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import image from "./../image/tutorial-img.png";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const Tutorials = () => {
  return (
    <Container fixed style={{ marginTop: "4rem" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <p style={{ fontWeight: "700", fontSize: "x-large" }}>
          Welcome to Learning Tutorials
        </p>
        <span>This is tuterials for the starter user</span>
      </div>
      <div style={{ display: "flex", marginTop: "4rem" }}>
        <Grid container spacing={3}>
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img src={image} style={{ height: "20vh" }} />
            <p style={{ fontWeight: "700", fontSize: "large" }}>
              Learn to Use Website
            </p>
            <span
              style={{
                paddingLeft: "4rem",
                paddingRight: "4rem",
                paddingTop: "0",
                paddingBottom: "3rem",
              }}
            >
              Learn about basic how to login & signin
            </span>
            <Button
              component={Link}
              to="/project/tutorials/learn"
              style={{
                paddingLeft: "3rem",
                paddingRight: "3rem",
                paddingTop: "1rem",
                paddingBottom: "1rem",
                color: "white",
                backgroundColor: "#175793",
                borderRadius: "2rem",
              }}
            >
              Learn
            </Button>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img src={image} style={{ height: "20vh" }} />
            <p style={{ fontWeight: "700", fontSize: "large" }}>
              How to Create Task{" "}
            </p>
            <span
              style={{
                paddingLeft: "4rem",
                paddingRight: "4rem",
                paddingTop: "0",
                paddingBottom: "3rem",
              }}
            >
              How to crate your first task
            </span>
            <Button
              component={Link}
              to="/project/tutorials/create"
              style={{
                paddingLeft: "3rem",
                paddingRight: "3rem",
                paddingTop: "1rem",
                paddingBottom: "1rem",
                color: "white",
                backgroundColor: "#175793",
                borderRadius: "2rem",
              }}
            >
              Learn
            </Button>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img src={image} style={{ height: "20vh" }} />
            <p style={{ fontWeight: "700", fontSize: "large" }}>
              Delete a task
            </p>
            <span
              style={{
                paddingLeft: "4rem",
                paddingRight: "4rem",
                paddingTop: "0",
                paddingBottom: "3rem",
              }}
            >
              When your task is complete.
            </span>
            <Button
              component={Link}
              to="/project/tutorials/delete"
              style={{
                paddingLeft: "3rem",
                paddingRight: "3rem",
                paddingTop: "1rem",
                paddingBottom: "1rem",
                color: "white",
                backgroundColor: "#175793",
                borderRadius: "2rem",
              }}
            >
              Learn
            </Button>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img src={image} style={{ height: "20vh" }} />
            <p style={{ fontWeight: "700", fontSize: "large" }}>Use a Tool</p>
            <span
              style={{
                paddingLeft: "4rem",
                paddingRight: "4rem",
                paddingTop: "0",
                paddingBottom: "3rem",
              }}
            >
              Learn about using tool in this web
            </span>
            <Button
              component={Link}
              to="/project/tutorials/useTool"
              style={{
                paddingLeft: "3rem",
                paddingRight: "3rem",
                paddingTop: "1rem",
                paddingBottom: "1rem",
                color: "white",
                backgroundColor: "#175793",
                borderRadius: "2rem",
              }}
            >
              Learn
            </Button>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};
export default Tutorials;
