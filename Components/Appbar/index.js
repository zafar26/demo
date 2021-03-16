import React, { useState, useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { motion, useTransform, useViewportScroll } from "framer-motion"
import db from '../../myDatabase'

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100vw',
        padding: 0,
        display: 'flex'
    },
    menuButton: {
        marginRight: theme.spacing(2),
        // color: 'white'
    },
    title: {
        flexGrow: 1,
        // color: '#21209c',
    },
    account: {
        flexGrow: 1,
        float: 'right',
        // color: '#21209c',
    }
}));

export default function MenuAppBar({ toggleDrawer, color }) {
    const classes = useStyles();
    const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);


    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const handlelogOut = () => {
        setAnchorEl(null);
        db.login.bulkDelete()
    }
    // let styling = {
    //     height: '30vh',
    //     background: 'linear-gradient(160deg, #0d47a1 25%, #1976d2 25%, #2196f3 50%, #64b5f6 50%, #bbdefb 75%, #e3f2fd 75%)',
    //     display: 'flex',
    //     justifyContent: 'flex-end',
    // }
    // if (goingUp) {
    //     styling.height = '60px'
    //     styling.background = 'linear-gradient(360deg, #0d47a1 18%, #1e88e5 76%, #64b5f6 100%)'
    // }

    // let navColor = "#21209c"
    // if (goingUp)
    //     navColor = '#FFFFFF'
    // const { scrollYProgress } = useViewportScroll();
    // const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);
    // // console.log(scrollYProgress, "SCROLLYPROGRESS")

    return (
        <motion.div
            // initial={{ y: -250 }}
            // animate={{ y: 0 }}
            // transition={{
            //     type: "spring",
            //     stiffness: 260,
            //     damping: 20
            // }}
            className={classes.root} >

            <AppBar position="fixed" color="transparent" style={{ display: 'flex', justifyContent: 'center' }}>
                <Toolbar >
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon onClick={toggleDrawer('left', true)} />
                    </IconButton>
                    <Typography variant="h6" className={classes.title} >
                        Sample PWA
                    </Typography>

                    {auth && (
                        <div>
                            <IconButton
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleMenu}
                                color="inherit"
                            >
                                <div className={classes.account}>

                                    <AccountCircle fontSize="large" />
                                </div>
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={open}
                                onClose={handleClose}
                            >
                                <MenuItem onClick={handleClose}>Profile</MenuItem>
                                <MenuItem onClick={handlelogOut}>Log out</MenuItem>
                            </Menu>
                        </div>
                    )}
                </Toolbar>
            </AppBar>
        </motion.div>
    );
}
MenuAppBar.getInitialProps = async (props) => {
    return {
        toggleDrawer: props.toggleDrawer,
        color: props.color
        //         goingUp: props.goingUp,
        //         setGoingUp: props.setGoingUp
    }
}









// function SScroll() {


//     const { scrollYProgress } = useViewportScroll()
//     const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);

//     console.log(scale, 'Scale')
//     return (
//         <motion.div
//             style={{
//                 scale, width: '100%', height: '300px', backgroundColor: 'gray', color: 'white'
//             }}
//         >
//             <motion.div
//                 style={{
//                     backgroundColor: 'green',
//                     color: 'white',
//                     width: '200px',
//                     height: '200px',
//                     scaleY: scrollYProgress
//                 }}
//             />
//         </motion.div>
//     )
// }