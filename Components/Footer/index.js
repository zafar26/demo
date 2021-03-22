import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";

import RateReviewIcon from '@material-ui/icons/RateReview';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import AssessmentIcon from '@material-ui/icons/Assessment';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import DepartureBoardIcon from '@material-ui/icons/DepartureBoard';
import CommuteIcon from '@material-ui/icons/Commute';

const useStyles = makeStyles({
    root: {
        width: "100vw",
        display: 'flex',
        justifyContent: 'space-between'

    }
});

export default function Footer({ value, setValue, type, page }) {
    const classes = useStyles();

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const clientFooter = [{
        label: "Orders",
        value: "orders"
    }, {
        label: "Payments",
        value: "payments"
    }, {
        label: "Ledger",
        value: "ledger"
    }
    ]
    let supplierFooter = [{
        label: "Accepted Orders",
        value: "acceptedOrders"
    }, {
        label: "Expected Delivery",
        value: "expectedDelivery"
    }
    ]
    if (page == 2 && type == 'Supplier') {
        supplierFooter = [{
            label: "Ledger",
            value: "ledger"

        }, {
            label: "Transportation",
            value: "transportation"

        }]
    }
    const handleIcon = (label) => {
        if (label == 'orders') return <RateReviewIcon />
        if (label == 'payments') return <QueryBuilderIcon />
        if (label == 'ledger') return <AssessmentIcon />
        if (label == 'acceptedOrders') return <CheckCircleIcon />
        if (label == 'expectedDelivery') return <DepartureBoardIcon />
        if (label == 'transportation') return <CommuteIcon />

    }
    let footerData = []
    if (type === 'Supplier') {
        footerData = supplierFooter
    } else if (type === 'Client') {
        footerData = clientFooter
    }
    return (
        <BottomNavigation
            value={value}
            onChange={handleChange}
            className={classes.root}
        >
            {footerData.map(d =>

                <BottomNavigationAction
                    label={d.label}
                    value={d.value}
                    icon={handleIcon(d.value)}
                />
            )}
            {/* <BottomNavigationAction
                label="Payments"
                value="payments"
                icon={<QueryBuilderIcon />}
            />
            <BottomNavigationAction
                label="Ledger"
                value="ledger"
                icon={<AssessmentIcon />}
            /> */}
        </BottomNavigation>
    );
}

Footer.getInitialProps = async (props) => {
    return {
        value: props.value,
        setValue: props.setValue,
        type: props.type,
        page: props.page

    }
}