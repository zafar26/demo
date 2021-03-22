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
    const [value, setValue] = useState("ledger");


    const columns = [
        {
            field: 'orderId', headerName: 'Order ID', width: 120
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
    const transportationColumns = [
        {
            field: 'type', headerName: 'type', width: 120
        },
        { field: 'name', headerName: 'Name', width: 140 },
        { field: 'awb', headerName: 'AWB No', width: 120 },
        { field: 'dispatchDate', headerName: 'Dispatch Date', width: 150 },

    ]
    let transportationRows = [
        {
            "id": 1,
            "type": "type 1",
            "name": "Transporation 1",
            "awb": 233344444,
            "dispatchDate": "",
        }, {
            "id": 2,
            "type": "type 2",
            "name": "Transporation 3",
            "awb": 233344455,
            "dispatchDate": "",
        }, {
            "id": 3,
            "type": "type 3",
            "name": "Transporation 3",
            "awb": 233344466,
            "dispatchDate": "",
        }, {
            "id": 4,
            "type": "type 1",
            "name": "Transporation 4",
            "awb": 233344477,
            "dispatchDate": "",
        },
    ]

    return (
        <div className={classes.root}>
            <Navbar userType="Supplier" />
            <div style={{ marginTop: '70px', height: '77vh' }}>

                {value == "ledger" && <div>
                    <h4 style={{ display: 'flex', justifyContent: 'center' }}>
                        Ledger Reports
                    </h4>

                    <div style={{ height: '77vh' }}>
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

                {value == "transportation" && <div>
                    <h4 style={{ display: 'flex', justifyContent: 'center' }}>
                        Transportation Details
                    </h4>

                    <div style={{ height: '77vh' }}>
                        <DataGrid
                            columns={transportationColumns}
                            rows={transportationRows}
                            pageSize={15}
                            checkboxSelection
                            // showToolbar
                            density="compact"
                        />
                    </div>
                </div>}

            </div>

            <div style={{ position: 'fixed', bottom: 0, width: '100vw' }}>

                <Footer value={value} setValue={setValue} type="Supplier" page='2' />
            </div>
        </div>
    );
}
