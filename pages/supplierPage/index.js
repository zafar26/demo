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
    const [value, setValue] = useState("acceptedOrders");


    const columns = [
        {
            field: 'orderId', headerName: 'Order ID', width: 120
        },
        { field: 'product', headerName: 'Product', width: 120 },
        { field: 'quantity', headerName: 'Quantity', width: 120 },
        { field: 'deliveryDate', headerName: 'Delivery Date', width: 140 },
        { field: 'employee', headerName: 'Employee', width: 120 },
    ]

    let rows = [
        {
            "id": 1,
            "orderId": 1,
            "product": "product 1",
            "quantity": 2,
            "deliveryDate": "",
            "employee": "Ahmed",
        },

        {
            "id": 2,
            "orderId": 2,
            "product": "product 2",
            "quantity": 3,
            "deliveryDate": "",
            "employee": "Zafar",
        },

        {
            "id": 3,
            "orderId": 3,
            "product": "product 3",
            "quantity": 4,
            "deliveryDate": "",
            "employee": "Sai",
        }
    ]

    const expectedDeliveryColumns = [
        {
            field: 'id', headerName: 'Order ID', width: 120
        },
        { field: 'product', headerName: 'Product', width: 120 },
        { field: 'quantity', headerName: 'Quantity', width: 120 },
        { field: 'expectedDate', headerName: 'Expected Delivery', width: 180 },
        { field: 'employeeName', headerName: 'Employee', width: 140 },
    ]

    let expectedDeliveryRows = [
        {
            "id": 1,
            "product": "product 1",
            "quantity": 2,
            "expectedDate": 'Date',
            "employeeName": "Mudassir",
        },

        {
            "id": 2,
            "product": "product 2",
            "quantity": 2,
            "expectedDate": 'Date',
            "employeeName": "Ahmed",
        },

        {
            "id": 3,
            "product": "product 6",
            "quantity": 2,
            "expectedDate": 'Date',
            "employeeName": "Zafar",
        }
        ,
        {
            "id": 4,
            "product": "product 4",
            "quantity": 2,
            "expectedDate": 'Date',
            "employeeName": "Sai",
        }

    ]


    if (value == "ledger") {
        columns.splice(2, 1)
    }
    return (
        <div className={classes.root}>
            <Navbar userType="Supplier" />
            <div style={{ marginTop: '70px', height: '77vh' }}>

                {value == "acceptedOrders" &&

                    <div>
                        <h4 style={{ display: 'flex', justifyContent: 'center' }}>Accepted Orders</h4>
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
                    </div>
                }
                {value == "expectedDelivery" && <div>
                    <h4 style={{ display: 'flex', justifyContent: 'center' }}>
                        Expected Delivery
                    </h4>

                    <div style={{ height: '77vh' }}>
                        <DataGrid
                            columns={expectedDeliveryColumns}
                            rows={expectedDeliveryRows}
                            pageSize={15}
                            checkboxSelection
                            // showToolbar
                            density="compact"
                        />
                    </div>
                </div>}

            </div>

            <div style={{ position: 'fixed', bottom: 0, width: '100vw' }}>

                <Footer value={value} setValue={setValue} type="Supplier" />
            </div>
        </div>
    );
}
