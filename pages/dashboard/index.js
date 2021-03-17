import { dummyData } from '../../Components/data/index'
import { DataGrid } from '@material-ui/data-grid';
import clsx from 'clsx';
// import { useLiveQuery } from "dexie-react-hooks";
import { makeStyles } from '@material-ui/core/styles';
import { motion, AnimatePresence } from "framer-motion"
import db from '../../myDatabase'
import { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar"


const containerVariants = {
    hidden: {
        opacity: 0,
        x: '100vw',

    },
    visible: {
        opacity: 1,
        x: 0,
        // transition: { duration: 0.5, }
    },
    exit: {
        opacity: 0,
        x: '-100vw',
        transition: {
            ease: 'easeInOut',

        }

    }
}

const useStyles = makeStyles({
    root: {
        overflowX: 'scroll',
        // position: 'fixed',
        '& .column.stick': {
            backgroundColor: 'rgba(157, 255, 118, 0.49)',
            position: "-webkit-sticky",
            position: "scroll",

            left: 0,
            color: '#1a3e72',
            fontWeight: '600',
        },
    },
});

const columns = [
    {
        field: 'id', headerName: 'ID', width: 120, cellClassName: (params) =>
            clsx('column', 'stick')
    },
    { field: 'guid', headerName: 'GU_ID', width: 200 },
    { field: 'isActive', headerName: ' Active', width: 100 },
    { field: 'balance', headerName: 'Balance', width: 120 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 120 },
    { field: 'age', headerName: 'Age', width: 90 },
    { field: 'eyeColor', headerName: 'Eye Color', width: 120 },
    { field: 'company', headerName: 'Company', width: 120 },
    { field: 'email', headerName: 'Email', width: 200 },
    { field: 'phone', headerName: 'Phone No', width: 200 },
    { field: 'mobile', headerName: 'Mobile No', width: 200 },
    { field: 'address', headerName: 'Address', width: 300 },
    { field: 'registered', headerName: 'Registered On', width: 300 },
    { field: 'latitude', headerName: 'Latitude', width: 120 },
    { field: 'longitude', headerName: 'Longitude', width: 120 },
]


export default function dataGrid() {

    useEffect(() => {

        db.table('login')
            .toArray()
            .then((login) => {
                console.log(login, "Login")
            });
    }, [db]);

    const classes = useStyles();
    return (
        <AnimatePresence>
            <div style={{ width: '100vw', display: 'flex' }}>
                <Navbar userType="Admin" />
            </div>
            <motion.div
                varriants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
            // style={{ height: '100vh' }}
            >
                <motion.div

                    varriants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className={classes.root}
                    style={{ marginTop: '80px', width: '92vw', height: '80vh', backgroundColor: 'white', overflow: 'scroll', position: 'relative' }}>
                    <h3 style={{ display: 'flex', justifyContent: 'center', color: 'gray' }}>ADMIN Dashboard</h3>
                    <DataGrid
                        columns={columns}
                        rows={dummyData}
                        pageSize={15}
                        checkboxSelection
                        // showToolbar
                        density="compact"
                    />
                </motion.div>
            </motion.div>
        </AnimatePresence>
    )
}