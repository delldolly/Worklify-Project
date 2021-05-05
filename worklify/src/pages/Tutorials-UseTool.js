import React from "react";
import { Link } from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";

import { ReactVideo } from "reactjs-media";

import example from "./../video/tutorial4.mp4";
import poster from "./../image/poster4.png";
import exampleImg from "./../image/tutor4.png";

import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

import "./../css/Tutorial.css";

const useStyles = makeStyles((theme) => ({
  containerStyle: {
    height: 'calc(100vh - 64px)',
    paddingTop: '3vmin',
    paddingBottom: '3vmin',
    overflow: 'auto',
  },
}));

const TutorialsUseTool = () => {
  const classes = useStyles();

  return (
    <div className={classes.containerStyle}>
      <Container maxWidth="md">
        <Button component={Link} to="/project/tutorials">
          <ArrowBackIosIcon />
          Back
        </Button>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "left",
            marginTop: "0.5rem",
          }}
        >
          <p style={{ fontWeight: "700", fontSize: "x-large" }}>
          Use a Tool
          </p>
        </div>
        <ReactVideo
          src={example}
          poster={poster}
          primaryColor="red"
          // other props
        />
        <div>
          <p style={{ fontWeight: "700", fontSize: "large" }} className="thai-font">
            มาเริ่มลองใช้ Tool เสริมกันดีกว่า
          </p>
          <span className="thai-font">
            &nbsp;&nbsp;&nbsp;&nbsp;ในการทำงานนั้น บางครั้งอาจจะต้องใช้ Tool
            บางอย่างในการช่วยทำงานให้เสร็จสมบูรณ์มากยิ่งขึ้น
            โดยในงานที่ต้องใส่รายละเอียดมากขึ้นอย่างพวกงานบัญชี หรืองาน Project
            ที่มีขนาดใหญ่อาจจะจำเป็นต้องใช้ Tool
            บางอย่างเพื่อให้งานเรียบร้อยมากยิ่งขึ้น โดย Tool ในเว็บมีดังต่อไปนี้
          </span>
          <ul className="thai-font">
            <li> 1. Calculator เครื่องคิดเลขช่วยคุณคำนวณอะไรยากๆได้ในทีเดียว</li>
            <li> 2. Execel ช่องตารางที่ช่วยคุณทำงานเอกสารอย่างรวดเร็ว</li>
            <li> 3. NotePad ตัวเลือกที่ช่วยคุณจดบันทึกในสิ่งที่สำคัญของคุณ</li>
          </ul>
        </div>
        <Grid container spacing={3} style={{ marginBottom: "3rem" }}>
          <Grid item xs={12} md={4} lg={4}>
            <img src={exampleImg} alt="img" style={{ width: "100%" }} />
          </Grid>
          <Grid item xs={12} md={8} lg={8}>
            <p style={{ fontWeight: "700" }} className="thai-font">แล้วเราสามารถใช้ Tool ได้อย่างไร?</p>
            <span className="thai-font">
              &nbsp;&nbsp;&nbsp;&nbsp;หลังจากที่ได้แนะนำ Tool ไปแล้วนั้น
              เรามาดูกันดีกว่าจะสามารถเข้าถึง Tool เหล่านี้ได้อย่างไร?
              โดยคุณสามารถปฎิบัติตามได้ง่ายๆ ดังต่อไปนี้
            </span>
            <ul className="thai-font">
              <li> 1. กดเปิด Menu ด้านข้างขึ้นมา</li>
              <li> 2. กดเลือก Tools เพื่อดูหน้าแสดง Tools ทั้งหมด</li>
              <li>
                {" "}
                3. จากนั้นกดเลือก Tool ที่คุณต้องการใช้
                โดยวิธีการใช้งานนั้นสามารถศึกษาจากคำอธิบายแต่ละ Tool ได้เลย
              </li>
              <li>
                {" "}
                4. ยินดีด้วย! ตอนนี้คุณสามารถเรียนการใช้ Tool ได้เรียบร้อย
                ขอให้สนุกกับการใช้ Worklify
              </li>
            </ul>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};
export default TutorialsUseTool;
