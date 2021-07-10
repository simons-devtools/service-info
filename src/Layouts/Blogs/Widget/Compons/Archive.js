import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    heading: {
        color: '#999',
        fontSize: '20px',
        letterSpacing: '2px',
        textTransform: 'uppercase',
        marginTop: '30px',
    },
    textField: {
        marginLeft: theme.spacing(0),
        marginRight: theme.spacing(1),
        width: 233,
    },
}));

const Archive = () => {
    const classes = useStyles();

    return (
        <div>
            <h2 className={classes.heading}>Archived</h2>
            <form className={classes.container} noValidate>
                <TextField
                    id="month"
                    label="Input any month or year"
                    type="month"
                    defaultValue={new Date()}
                    className={classes.textField}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </form>
        </div>
    );
}
export default Archive;