import React from 'react';
import "./../css/Home.css"
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

const Home = () => {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg">
                <Typography component="div" style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                    <p className="header">Welcome to Worklify</p>
                    <span className="content">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel lobortis justo. Integer blandit
                        sollicitudin eros, a sollicitudin lectus congue eget. Mauris vitae maximus lectus. Nulla nisi sem, porta
                        nec viverra eu, blandit vel tortor. Integer sed ipsum dignissim, ullamcorper sapien quis, porta augue.
                        Ut a augue dapibus velit viverra dictum eget suscipit neque. Vivamus dignissim neque nec congue
                        pharetra. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel lobortis justo. Integer blandit
                        sollicitudin eros, a sollicitudin lectus congue eget. Mauris vitae maximus lectus. Nulla nisi sem, porta
                        nec viverra eu, blandit vel tortor. Integer sed ipsum dignissim, ullamcorper sapien quis, porta augue.
                        Ut a augue dapibus velit viverra dictum eget suscipit neque. Vivamus dignissim neque nec congue
                        pharetra.
                    </span>
                    <div style={{ display: 'flex',marginTop:'4rem', width:'100%',justifyContent:'space-around' }}>
                        <Button className="button-foot" style={{backgroundColor:'#5485A0',width:'20%',padding:'0.5rem',color:'white'}}>Log in</Button>
                        <Button className="button-foot" style={{backgroundColor:'#175793',width:'20%',padding:'0.5rem',color:'white'}}>Sign up</Button>
                    </div>
                </Typography>
            </Container>
        </React.Fragment>
    );
}
export default Home;