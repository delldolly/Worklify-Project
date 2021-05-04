import React from "react";
import Container from "@material-ui/core/Container";
import { ReactVideo } from "reactjs-media";
import example from "./../video/example.webm";
import poster from "./../image/poster3.png";
import exampleImg from "./../image/example.png";
import Grid from "@material-ui/core/Grid";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const TutorialsDelete = () => {
  return (
    <Container maxWidth="md" style={{ marginTop: "4rem" }}>
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
        <p style={{ fontWeight: "700", fontSize: "x-large" }}>Delete a task</p>
      </div>
      <ReactVideo
        src={example}
        poster={poster}
        primaryColor="red"
        // other props
      />
      <div>
        <p style={{ fontWeight: "700", fontSize: "large" }}>
          หากต้องการลบ "หัวข้อ" หรือ lane ทิ้งจะทำอย่างไร?
        </p>
        <span>
          &nbsp;&nbsp;&nbsp;&nbsp;ขณะที่คุณกำลังทำงาน คุณอาจจะรู้สึกว่าเพิ่ม
          "หัวข้อ" มาเยอะเกินไป หรืองานที่ทำภายในหัวข้อนั้นเสร็จครบหมดแล้ว
          และต้องการปิดหัวข้อนั้นทิ้ง สามารถทำได้ ดังต่อไปนี้
        </span>
        <ul>
          <li> 1. กดไอค่อนจุดสามจุดที่อยู่บริเวณขวาบนของหัวข้อนั้น</li>
          <li> 2. กด Delete Lene เพื่อลบหัวข้อ</li>
          <li>
            {" "}
            3. ยินดีด้วย! ตอนนี้หัวข้อที่ไม่จำเป็นสำหรับ Project
            ของคุณถูกลบเรียบร้อยแล้ว
          </li>
        </ul>
      </div>
      <Grid container spacing={3} style={{ marginBottom: "3rem" }}>
        <Grid item xs={12} md={4} lg={4}>
          <img src={exampleImg} style={{ width: "100%" }} />
        </Grid>
        <Grid item xs={12} md={8} lg={8}>
          <p style={{ fontWeight: "700" }}>ถ้าหากอยากลบแค่งานล่ะ?</p>
          <span>
            &nbsp;&nbsp;&nbsp;&nbsp;หลังจากที่ได้เรียนรู้วิธีการลบหัวข้อไปแล้วนั้น
            หากคุณต้องการลบแค่งานทิ้งภายใน "หัวข้อ" นั้นง่ายยิ่งกว่า
            โดยปฎิบัติดังต่อไปนี้
          </span>
          <ul>
            <li> 1. กด x ตรงมุมขวาบนของงานนั้น</li>
            <li>
              {" "}
              2. ยินดีด้วย! ตอนนี้คุณสามารถลบหัวข้อ และงานได้เรียบร้อย
              ขอให้สนุกกับการใช้ Worklify
            </li>
          </ul>
        </Grid>
      </Grid>
    </Container>
  );
};
export default TutorialsDelete;
