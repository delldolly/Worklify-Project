import React from "react";
import Board from "react-trello";
import { database } from "../firebase";
import { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext";

const TaskBoard = () => {
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
    database.ref("users/" + currentUser.uid).set(newData);
  };

  useEffect(() => {
    const dataArray = [];
    console.log(currentUser);
    if (currentUser !== null) {
      // console.log(currentUser.uid);
      database
        .ref("users/" + currentUser.uid)
        .once("value", (snapshot) => {
          console.log("User data: ", snapshot.val());
          dataArray.push(snapshot.val());
        })
        .then(() => {
          setData(dataArray[0]);
        });
    } else {
      return data;
    }
  }, []);

  return (
    <>
      {/* {fetchData} */}
      <Board
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
    </>
  );
};

export default TaskBoard;
