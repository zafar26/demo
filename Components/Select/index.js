import styles from './select.module.css'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { FormControl, InputLabel, Select } from '@material-ui/core';
import InputBase from '@material-ui/core/InputBase';

const BootstrapInput = withStyles((theme) => ({
    root: {
        'label + &': {
            // marginTop: theme.spacing(3),
        },
    },
    input: {
        borderRadius: 4,
        position: 'relative',
        // backgroundColor: theme.palette.background.paper,
        border: '1px solid #ced4da',
        fontSize: 16,
        width: '160px',
        padding: '10px 26px 10px 12px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
            borderRadius: 4,
            borderColor: '#80bdff',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        },
    },
}))(InputBase);

export default function CustomSelect(props) {

    return (
        <div >

            <FormControl variant="outlined" size="small">
                <InputLabel htmlFor="outlined-options-native-simple"> {props.label}</InputLabel>
                <Select
                    native
                    value={props.value}
                    onChange={props.onChange}
                    label={props.label}
                    inputProps={{
                        id: 'outlined-options-native-simple',
                    }}
                    input={<BootstrapInput />}
                >
                    <option aria-label="None" value="" />
                    {props.options.map((item) =>
                        <option value={item.value}>{item.label}</option>
                    )}
                </Select>
            </FormControl>
        </div>
    )
}

CustomSelect.getInitialProps = async (props) => {
    return props
} 