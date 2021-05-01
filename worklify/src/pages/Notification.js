import React from 'react';
import "./../css/Notification.css";
import Container from '@material-ui/core/Container';
import CancelIcon from '@material-ui/icons/Cancel';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import Grid from '@material-ui/core/Grid';
import noti from './../image/noti-img.png';
import Button from '@material-ui/core/Button';
import Badge from '@material-ui/core/Badge';

// dialog
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const Notification = () => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <Container fixed>
            <p className="header-noti">Notification</p>
            <hr style={{ border: 'solid #DDDDDD' }}></hr>
            <TextField id="filled-basic" variant="filled"
                InputProps={{
                    startAdornment: (
                        <SearchIcon style={{ paddingRight: '1rem' }}></SearchIcon>
                    ),
                }}
                style={{ width: '100%', marginTop: '1rem' }} />
            <div className="Noti-box">
                <Grid item md={2}>
                    <Badge color="secondary" badgeContent="1">
                        <img src={noti} style={{ width: '8rem' }} />
                    </Badge>
                </Grid>
                <Grid item md={9} style={{ marginLeft: '1rem' }}>
                    <p className='topic-noti' onClick={handleClickOpen}>Welcome to Worklify</p>
                    <span className="content-noti">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna</span>
                </Grid>
                <Grid item md={1} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <CancelIcon className="cancle-button" style={{ color: '#FF7C7C' }} fontSize="large"></CancelIcon>
                </Grid>
            </div>

            {/* Dialog Box */}
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle id="alert-dialog-slide-title">{"Welcome to Worklify"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} style={{ color: '#FF7C7C' }}>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </Container>
    );
}
export default Notification;