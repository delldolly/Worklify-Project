import React from "react";
import Lottie from "lottie-react";
import loading from "./../../src/pages/lotties/lf30_editor_hndxl7zy.json";
import Container from "@material-ui/core/Container";

const Loading = () =>{
    return(
        <Container maxWidth="md" style={{ display:'flex',alignItems:'center',justifyContent:'center',height:'90vh' }}>
            <Lottie animationData={loading} style={{width:"30vw"}} />
        </Container>
    );
}
export default Loading;