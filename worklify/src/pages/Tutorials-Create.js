import React from "react";
import { Link } from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";

import { ReactVideo } from "reactjs-media";

import example from "./../video/tutorial2.mp4";
import poster from "./../image/poster2.png";
import exampleImg from "./../image/tutor2.png";

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

const TutorialsCreate = () => {
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
          <p style={{ fontWeight: "700", fontSize: "x-large" }} className="thai-font">
            How to Create Task
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
            มาเริ่มสร้าง Task ครั้งแรกกันดีกว่า
          </p>
          <span className="thai-font">
            &nbsp;&nbsp;&nbsp;&nbsp;สำหรับการสร้าง Task นั้น เมื่อคุณเข้ามาใน
            Projext ตัวเองจะเห็นหน้าโล่งๆแบบดังวิดิโอ อย่างแรกคุณต้องสร้าง
            "หัวข้อ" ในการจัดลำดับการทำงานขึ้นมาก่อน ดังต่อไปนี้
          </span>
          <ul className="thai-font">
            <li> 1. กด + เพื่อสร้าง "หัวข้อ" ของงานแต่ละอย่าง</li>
            <li>
              {" "}
              2. ตั้งชื่อ "หัวข้อ" หรือ lane แต่ละงาน หรือ session ที่เรากำหนด
            </li>
            <li> 3. จากนั้นกด Add lane เพื่อสร้าง lane ขึ้นมา</li>
            <li> 4. ยินดีด้วย! คุณมีหัวช้อสำหรับการสร้างงานในลำดับต่อไปแล้ว</li>
          </ul>
        </div>
        <Grid container spacing={3} style={{ marginBottom: "3rem" }}>
          <Grid item xs={12} md={4} lg={4}>
            <img src={exampleImg} alt="img" style={{ width: "100%" }} />
          </Grid>
          <Grid item xs={12} md={8} lg={8}>
            <p style={{ fontWeight: "700" }} className="thai-font">วิธีสร้างงานภายในหัวข้อ</p>
            <span className="thai-font">
              &nbsp;&nbsp;&nbsp;&nbsp;หลังจากที่คุณมีหัวข้อ หรือ lane แล้วนั้น
              ต่อไปจะเป็นวิธีการสร้างงานภายในหัวข้อของคุณ
              โดยงานนั้นจะเป็นหัวข้อแยกย่อยที่เกิดขึ้น เช่น หาก "หัวข้อ"
              คือการซักผ้า งานแยกย่อยที่เกิดขึ้นจะมี 1.เตรียมผงซักผอก 2.ขยี้ผ้า
              3.ล้างน้ำสะอาด เป็นต้น ทำได้ดังวิธีนี้
            </span>
            <ul className="thai-font">
              <li> 1. กด Click to add card (card จะเป็นงานที่เราต้องการเพิ่ม)</li>
              <li>
                {" "}
                2. เมื่อกดแล้วให้ใส่ชื่องานที่เราต้องการเพิ่ม และคำอธิบายเล็กน้อย
              </li>
              <li>
                {" "}
                3. กดปุ่ม Add card เพื่อเพิ่ม card หรือหากไม่ต้องการให้กด cancle
                สำหรับยกเลิก
              </li>
              <li>
                {" "}
                4. ยินดีด้วย! ตอนนี้คุณสามารถเพิ่มหัวข้อ และงานได้เรียบร้อย
                ขอให้สนุกกับการใช้ Worklify
              </li>
            </ul>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};
export default TutorialsCreate;
