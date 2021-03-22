import { makeStyles } from "@material-ui/core/styles";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer";
import OrderBar from "../../Components/OrderBar";
import { useState } from "react";
import { DataGrid } from '@material-ui/data-grid';


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


    const columns = [
        {
            field: 'orderId', headerName: 'ID', width: 120
        },
        { field: 'product', headerName: 'Product', width: 120 },
        { field: 'quantity', headerName: 'Quantity', width: 120 },
        { field: 'date', headerName: 'Date', width: 120 },
        { field: 'ammount', headerName: 'Ammount', width: 120 },
    ]

    let rows = [
        {
            "id": 1,
            "orderId": 1,
            "product": "product 1",
            "quantity": 2,
            "date": "",
            "ammount": 25.00,
        },

        {
            "id": 2,
            "orderId": 2,
            "product": "product 2",
            "quantity": 3,
            "date": "",
            "ammount": 45.00,
        },

        {
            "id": 3,
            "orderId": 3,
            "product": "product 3",
            "quantity": 4,
            "date": "",
            "ammount": 75.00,
        }
    ]
    if (value == "ledger") {
        columns.splice(2, 1)
    }
    return (
        <div className={classes.root}>
            <Navbar userType="Client" />
            <div style={{ marginTop: '60px' }}>

                {value == "orders" && <OrderBar />}
                {value == "payments" && <div>
                    <h4 style={{ display: 'flex', justifyContent: 'center' }}>
                        PAYMENTS HISTORY
                    </h4>

                    <div style={{ height: '80vh' }}>
                        <DataGrid
                            columns={columns}
                            rows={rows}
                            pageSize={15}
                            checkboxSelection
                            // showToolbar
                            density="compact"
                        />
                    </div>
                </div>}
                {value == "ledger" && <div>

                    <h4 style={{ display: 'flex', justifyContent: 'center' }}>
                        LEDGER REPORTS
                    </h4>



                    <div style={{ height: '80vh' }}>
                        <DataGrid
                            columns={columns}
                            rows={rows}
                            pageSize={15}
                            checkboxSelection
                            // showToolbar
                            density="compact"
                        />
                    </div>
                </div>}
            </div>

            <div style={{ position: 'fixed', bottom: 0 }}>

                <Footer value={value} setValue={setValue} type="Client" />
            </div>
        </div>
    );
}
