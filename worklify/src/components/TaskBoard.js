import React from "react";
import Board from "react-trello";

import firebase from "firebase/app";
import "firebase/database";
import { useEffect, useState } from "react";

const firebaseConfig = {
  apiKey: "AIzaSyDrFaPldhM1cGmqwFqYWkKNY-21nUYWgKQ",
  authDomain: "worklify-70203.firebaseapp.com",
  databaseURL:
    "https://worklify-70203-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "worklify-70203",
  storageBucket: "worklify-70203.appspot.com",
  messagingSenderId: "265094077291",
  appId: "1:265094077291:web:3e19a36774d70dbc9c8a2e",
  measurementId: "G-T657P4ECH4",
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();

const TaskBoard = () => {
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
      //   console.log(each.cards);
    });
    setData(newData);
    database.ref().set(newData);
  };

  useEffect(() => {
    const dataArray = [];
    const ref = database.ref();

    ref
      .once("value", (snapshot) => {
        console.log("User data: ", snapshot.val());
        dataArray.push(snapshot.val());
      })
      .then(() => {
        setData(dataArray[0]);
      });
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
