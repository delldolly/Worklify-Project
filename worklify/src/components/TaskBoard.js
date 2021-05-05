import React from "react";
import Board from "react-trello";
import { database } from "../firebase";
import { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  boardContainer: {
    width: '100vw',
    height: "calc(100vh - 64px)",
    overflow: "auto",
  },
}));

const TaskBoard = ({ name }) => {
  const classes = useStyles();
  
  const { currentUser } = useAuth();
  const [data, setData] = useState({
    lanes: [],
  });
  //   let data = {
  //     lanes: [],
  //   };

  const handleChangeDataToFirebase = (newData) => {
    newData.lanes.forEach((each) => {
      if (each.cards === undefined) {
        each.cards = [];
      }
    });
    setData(newData);
    database.ref("users/" + currentUser.uid + "/" + name).update(newData);
  };

  useEffect(() => {
    const dataArray = [];
    console.log(currentUser);
    if (currentUser !== null) {
      // console.log(currentUser.uid);
      database
        .ref("users/" + currentUser.uid + "/" + name)
        .once("value", (snapshot) => {
          if (snapshot.val()["lanes"]) {
            console.log(snapshot.val()["lanes"]);
            dataArray.push(snapshot.val());
          }
          console.log("User data: ", snapshot.val()["lanes"]);
        })
        .then(() => {
          setData(dataArray[0]);
        });
    } else {
      return data;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={classes.boardContainer}>
      {/* {fetchData} */}
      <Board
        style={{ height: "100%" }}
        data={data}
        editable
        draggable
        canAddLanes
        // onLaneUpdate={(laneId, data) => {
        //   console.log(data);
        // }}
        onDataChange={(newData) => {
          handleChangeDataToFirebase(newData);
        }}
        //   eventBusHandle={setEventBus}
      />
    </div>
  );
};

export default TaskBoard;
