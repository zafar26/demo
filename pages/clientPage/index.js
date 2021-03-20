import { makeStyles } from "@material-ui/core/styles";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer";
import OrderBar from "../../Components/OrderBar";
import { useState } from "react";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        height: '100vh'

    }
}));

export default function SimpleTabs() {
    const classes = useStyles();
    const [value, setValue] = useState("orders");

    return (
        <div className={classes.root}>
            <Navbar userType="Client" />
            <div style={{ marginTop: '60px' }}>

                {value == "orders" && <OrderBar />}
                {value == "payments" && <div>
                    PAYMENTS HISTORY
            </div>}
                {value == "ledger" && <div>
                    LEDGER REPORTS
            </div>}
            </div>

            <div style={{ position: 'fixed', bottom: 0 }}>

                <Footer value={value} setValue={setValue} />
            </div>
        </div>
    );
}
