import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";

import RateReviewIcon from '@material-ui/icons/RateReview';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import AssessmentIcon from '@material-ui/icons/Assessment';

const useStyles = makeStyles({
    root: {
        width: "100vw"
    }
});

export default function Footer({ value, setValue }) {
    const classes = useStyles();

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <BottomNavigation
            value={value}
            onChange={handleChange}
            className={classes.root}
        >
            <BottomNavigationAction
                label="Orders"
                value="orders"
                icon={<RateReviewIcon />}
            />
            <BottomNavigationAction
                label="Payments"
                value="payments"
                icon={<QueryBuilderIcon />}
            />
            <BottomNavigationAction
                label="Ledger"
                value="ledger"
                icon={<AssessmentIcon />}
            />
        </BottomNavigation>
    );
}

Footer.getInitialProps = async (props) => {


    return {
        value: props.value,
        setValue: props.setValue
    }
}