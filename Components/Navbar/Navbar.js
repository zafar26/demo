import React, { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Link from 'next/link'
import MenuAppBar from '../Appbar/index'
import styles from './navbar.module.css'
import HomeIcon from '@material-ui/icons/Home';
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';
import BusinessIcon from '@material-ui/icons/Business';
import CallReceivedIcon from '@material-ui/icons/CallReceived';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import ListAltIcon from '@material-ui/icons/ListAlt';
import InsertChartIcon from '@material-ui/icons/InsertChart';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import SettingsIcon from '@material-ui/icons/Settings';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import DoneAllRoundedIcon from '@material-ui/icons/DoneAllRounded';
import BookIcon from '@material-ui/icons/Book';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useViewportScroll } from 'framer-motion'

// import Image from 'next/image'
// import logo from "../../public/icon-192x192.png"
const useStyles = makeStyles({
    list: {
        // width: 250,
        // backgroundColor: '#dddddd'

    },
    fullList: {
        width: 'auto',
        backgroundColor: 'red'
    },
});

export default function Navbar({ userType }) {
    const classes = useStyles();
    const [state, setState] = React.useState({
        left: false,
    });
    let color = ''
    if (userType == "Admin") {
        color = "#eeebdd"
    } else if (userType == "Client") {
        color = "#caf7e3"
    } else {
        color = "#ffb4b4"
    }
    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };
    const handleIcon = (link, color) => {
        if (link === 'Home') return <HomeIcon style={{ color }} />
        if (link === 'Admin Profile' || link == 'User Profile' || link == "Vendor Profile") return <ListAltIcon style={{ color }} />
        if (link === 'Settings') return <SettingsIcon style={{ color }} />
    }

    const links = {

        ['Admin Profile']: {
            path: '/profile',
        },
        Settings: {
            path: '/settings',

        }
    }
    const clientLinks = {
        ['User Profile']: {
            path: '/profile',
        },
        Settings: {
            path: '/settings',

        }
    }

    const vendorLinks = {
        ['Vendor Profile']: {
            path: '/profile',
        },
        Settings: {
            path: '/settings',

        }
    }
    let arr = []
    if (userType == "Client") {
        arr = Object.entries(clientLinks)
    } else if (userType == "Vendor") {
        arr = Object.entries(vendorLinks)
    } else {
        arr = Object.entries(links)
    }


    const list = (anchor, color) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >

            <List style={{ paddingTop: 0 }}>
                <div style={{ height: '67px', backgroundColor: '#fff', display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                    <ArrowBackIcon style={{ color }} />
                    <h6 style={{ color: 'gray', fontSize: '1.25rem' }}>
                        Sample PWA
                    </h6>
                </div>
                <Divider />
                {arr.map((text, index) =>
                    <ListItem button key={text[0]} >
                        <ListItemIcon>
                            {handleIcon(text[0], color)}
                        </ListItemIcon>
                        <Link href={`${text[1].path}`} >
                            {text[0]}
                        </Link>
                    </ListItem>)
                }
            </List>
        </div>
    );
    let left = 'left';

    return (
        <React.Fragment key={left} >
            <MenuAppBar className={styles.container} toggleDrawer={toggleDrawer} color={color} />
            <Drawer className={styles.drawer} anchor={left} open={state[left]} onClose={toggleDrawer(left, false)}>
                {list(left, color)}
            </Drawer>
        </React.Fragment>
    );
}
Navbar.getInitialProps = async (props) => {
    return {
        userType: props.userType
    }
}