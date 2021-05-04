import React from 'react';
import { Link } from 'react-router-dom';
import "./../css/Home.css"

import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    containerStyle: {
        height: 'calc(100vh - 64px)',
        paddingTop: '3vmin',
        paddingBottom: '3vmin',
        overflow: 'auto',
    },
    typographyStyle: {
        height: '100%',
        padding: '3vmin 0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        [theme.breakpoints.down(560)]: {
            height: 'auto',
            justifyContent: 'flex-start',
        }
    },
    buttonBox: {
        display: 'flex', 
        marginTop: '6vmin', 
        width: '100%', 
        justifyContent: 'space-around',
    },
    buttonStyle: {
        width: '20%', 
        padding: '0.5rem', 
        color: 'white',
        [theme.breakpoints.down(780)]: {
            width: '40%', 
        }
    },
}));

const Home = () => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg" className={classes.containerStyle}>
                <Typography component="div" className={classes.typographyStyle}>
                    <p className="header">Welcome to Worklify</p>
                    <span className="content thai-font">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;พวกเราคือ Worklify เว็บที่จะมาช่วยให้คุณจัดการงานที่ยุ่งยากอย่างเป็นระเบียบ! เบื่อไหม?
                        เวลาที่มีงานเข้ามีในแต่ละวันเยอะเกินไป โฟกัสหลายงานมากเกินไป เดทไลน์งานชนกันเหมือนรถไฟ หรือแม้กระทั่งจัดลำดับความสำคัญงานไม่ถูก เว็บของเราพร้อม
                        ที่จะมาช่วยแก้ปัญหาเหล่านี้แล้ว โดยคุณสามารถสร้าง "หัวข้อ" และ "งาน" ในแต่ละหัวข้อง่ายๆเหมือนแปะ post-it! พร้อมรึยัง? กับการสร้างโลกการทำงานส่วน
                        ตัวแบบออนไลน์ สามารถพกตารางชีวิตส่วนตัวไปได้ทุกที่ จัดการงานได้เป็นระบบสุดๆอย่างที่ไม่เคยเป็นมาก่อน ถ้าพร้อมแล้ว เข้าใช้งานเว็บไซต์กันได้แล้ววันนี้!
                    </span>
                    <div className={classes.buttonBox}>
                        <Button
                            className={classes.buttonStyle}
                            style={{ backgroundColor: '#5485A0' }}
                            component={Link}
                            to="/Login"
                        >
                            Log in
                        </Button>
                        <Button 
                            className={classes.buttonStyle} 
                            style={{ backgroundColor: '#175793' }}
                            component={Link}
                            to="/Signup"
                        >
                            Sign up
                        </Button>
                    </div>
                </Typography>
            </Container>
        </React.Fragment>
    );
}
export default Home;