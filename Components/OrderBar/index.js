import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { useState } from "react";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        "aria-controls": `simple-tabpanel-${index}`
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        height: '100vh'

    }
}));

export default function OrderBar() {
    const classes = useStyles();
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <div style={{ display: 'flex', justifyContent: 'center', fontSize: '14px', padding: '10px 5px ' }}>
                Orders
            </div>
            <AppBar position="static" >
                <Tabs
                    style={{ display: 'flex', justifyContent: 'space-between' }}
                    value={value}
                    onChange={handleChange}
                    aria-label="simple tabs example"
                >
                    <Tab label="Pending" {...a11yProps(0)} style={{ width: '50%' }} />
                    <Tab label="Completed" {...a11yProps(1)} style={{ width: '50%' }} />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0} >
                Pending
      </TabPanel>
            <TabPanel value={value} index={1}>
                Completed
      </TabPanel>

        </div>
    );
}
