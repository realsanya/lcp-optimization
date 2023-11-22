import * as React from 'react';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { TextField } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/lab';

const DatePickerComponent = ({ date, setDate }) => {
    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
                label="Date"
                value={date}
                onChange={(newValue) => {
                    setDate(newValue);
                }}
                renderInput={(params) => <TextField required fullWidth {...params} />}
            />
        </LocalizationProvider>
    )
}

export default DatePickerComponent
