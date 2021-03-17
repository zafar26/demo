import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import clsx from 'clsx';
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },

    textField: {

        padding: '2px',
    },
}));
export default function Input(props) {
    const classes = useStyles();
    return (
        <div style={{ marginTop: '10px' }}>
            {props.type == 'password' ?
                <>
                    <FormControl variant="outlined" size="small">
                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                        <OutlinedInput

                            // style={{  }}
                            id="outlined-adornment-password"
                            type={props.showPassword ? 'text' : 'password'}
                            value={props.value}
                            onChange={e => props.onChange(e.target.value)}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={e => props.setShowPassword(!props.showPassword)}
                                        onMouseDown={e => e.preventDefault()}
                                        edge="end"
                                    >
                                        {props.showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            labelWidth={70}
                        />
                    </FormControl>
                </>
                :
                <>
                    <FormControl>
                        <TextField key={props.name} label={props.name}
                            size="small"
                            fullWidth
                            variant="outlined"
                            onChange={e => props.onChange(e.target.value)}
                            value={props.value}

                        />
                    </FormControl>
                </>
            }
        </div>)
}
Input.getInitialProps = async (props) => {
    return props
}