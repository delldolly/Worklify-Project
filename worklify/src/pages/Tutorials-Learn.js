import React from 'react';
import Container from '@material-ui/core/Container';
import { ReactVideo } from "reactjs-media";
import example from "./../video/example.webm";
import poster from "./../image/poster.png";
import exampleImg from "./../image/example.png";
import Grid from '@material-ui/core/Grid';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const TutorialsLearn = () => {
    return (
        <Container maxWidth="md" style={{marginTop:'4rem'}}>
            <ArrowBackIosIcon style={{cursor:'pointer'}}></ArrowBackIosIcon>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'left', marginTop: '0.5rem' }}>
                <p style={{ fontWeight: '700', fontSize: "x-large" }}>Learn to Use Website</p>
            </div>
            <ReactVideo
                src={example}
                poster={poster}
                primaryColor="red"
            // other props
            />
            <div>
                <p style={{ fontWeight: '700', fontSize: 'large' }}>วิธีการเริ่มต้นใช้เว็บ</p>
                <span>&nbsp;&nbsp;&nbsp;&nbsp;ยินดีต้อนรับเข้าสู่ Worklify เว็บสำหรับจัดการงาน และจัดระเบียบงานให้ง่ายดายยิ่งขึ้น มาเรียนรู้ใช้งานเว็บเริ่มต้น ดังต่อไปนี้</span>
                <ul>
                    <li> 1. กด Sign up ในหน้า Home เพื่อสมัครสมาชิก</li>
                    <li> 2. กรอกข้อมูลให้ครบถ้วน และกดยืนยัน</li>
                    <li> 3. เมื่อถึงหน้า Log in ให้กรอก username และ password ที่ลงทะเบียนไว้</li>
                    <li> 4. ยินดีด้วย! คุณมีบัญชีใช้งานแล้ว ต่อไปมาเรียนรู้วิธีสร้างโปรเจคกันเถอะ</li>
                </ul>
            </div>
            <Grid container spacing={3} style={{ marginBottom: '3rem' }}>
                <Grid item xs={12} md={4} lg={4}>
                    <img src={exampleImg} style={{ width: '100%' }} />
                </Grid>
                <Grid item xs={12} md={8} lg={8}>
                    <p style={{ fontWeight: '700' }}>วิธีเริ่มสร้าง Project ด้วยตัวคุณเอง</p>
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;หลังจากที่คุณมีบัญชีสำหรับการเข้าสู่ระบบเรียบร้อยแล้วนั้น ขั้นตอนต่อไปที่สำคัญคือ "การสร้าง Project" ซึ่งวิธีการสร้างนั้นแสนง่ายดาย เพียงแค่หลังจากคุณมีโปรเจคคุณจะเข้ามาหน้า Project Management (จัดการโปรเจค) และปฏิบัติตามขั้นตอนต่อไปนี้</span>
                    <ul>
                        <li> 1. กด + เพื่อเพิ่ม Project</li>
                        <li> 2. ตั้งชื่อ Project ของคุณตามที่ต้องการ</li>
                        <li> 3. ใส่คำอธิบายเล็กน้อย สำหรับรายละเอียดของ Project คุณ</li>
                        <li> 4. ยินดีด้วย! ตอนนี้คุณสามารถใช้ Worklify เบื้องต้นได้แล้ว</li>
                    </ul>
                </Grid>
            </Grid>
        </Container>
    );
}
export default TutorialsLearn;