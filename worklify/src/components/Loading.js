import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import Lottie from "lottie-react";
import loading from "./../../src/pages/lotties/lf30_editor_hndxl7zy.json";

const useStyles = makeStyles((theme) => ({
    containStyle: {
        height:'100vh',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
    },
    loadingLottie: {
        width: '50vmin',
        [theme.breakpoints.down(600)]: {
            width: '70vmin',
        },
    }
}));

const Loading = () =>{
    const classes = useStyles();

    return(
        <Container maxWidth="md" className={classes.containStyle}>
            <Lottie animationData={loading} className={classes.loadingLottie} />
        </Container>
    );
}
export default Loading;