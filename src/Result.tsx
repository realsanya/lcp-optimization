import * as React from 'react';
import { Container, Typography } from '@mui/material';
import moment from 'moment';

const Result = ({ firstName, lastName, email, date }) => {
    return (
        <Container component="main" maxWidth="xs">
            <Typography variant="subtitle1" gutterBottom component="div">
                First name: {firstName}
                <br/>
                Last name: {lastName}
                <br/>
                Email: {email}
                <br/>
                Date: {moment(date).format('MMMM, D dddd, YYYY')}
            </Typography>
        </Container>
    )
}

export default Result
