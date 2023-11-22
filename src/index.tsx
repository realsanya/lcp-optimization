import * as React from 'react';
import { render } from 'react-dom';
import { Grid, Box, TextField, Button, Container } from '@mui/material';
const Result = React.lazy(() => import("./Result"));
const DatePickerComponent = React.lazy(() => import('./DatePickerComponent'));

const App = () => {
  const [date, setDate] = React.useState(null);
  const [firstName, setFirstName] = React.useState(null);
  const [lastName, setLastName] = React.useState(null);
  const [email, setEmail] = React.useState(null);
  const [submitted, setSubmitted] = React.useState(false);

  const onSubmit = () => {
    setSubmitted(true);
  }

  if (submitted) {
   return (
       <React.Suspense fallback={<div>Loading...</div>}>
         <Result firstName={firstName} lastName={lastName} email={email} date={date}/>
       </React.Suspense>
   )
  }

  return (
    <Container component="main" maxWidth="xs">
      <Box component="form" onSubmit={onSubmit} sx={{ mt: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              onChange={(e) => setFirstName(e.target.value)}
              label="First Name"
              autoFocus
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              onChange={(e) => setLastName(e.target.value)}
              label="Last Name"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              type="email"
              required
              fullWidth
              onChange={(e) => setEmail(e.target.value)}
              label="Email Address"
            />
          </Grid>
          <Grid item xs={12}>
            <React.Suspense fallback={<div>Loading...</div>}>
              <DatePickerComponent date={date} setDate={setDate}/>
            </React.Suspense>
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Sign Up
        </Button>
      </Box>
    </Container>
  )
}

render(
  <App />,
  document.getElementById('root')
)
