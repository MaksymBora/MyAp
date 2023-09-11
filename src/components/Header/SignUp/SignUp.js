import React from 'react';
import {
  Avatar,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Paper,
  RadioGroup,
  TextField,
  Typography,
  Radio,
  Checkbox,
} from '@mui/material';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';

const SignUp = () => {
  const paperStyle = {
    padding: '20px',
    minHeight: '72vh',
    width: 320,
    margin: '0 auto',
    boxShadow: '0px 1px 14px -4px rgba(255,255,255,0.75)',
  };

  const avatarStyle = { backgroundColor: '#1bbd7e' };

  return (
    <Grid>
      <Paper style={paperStyle} sx={{ fontSize: 16 }}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <AddCircleOutlineOutlinedIcon />
          </Avatar>
          <h2>Sign Up</h2>
          <Typography variant="caption">
            Please fill this form to create an account
          </Typography>
        </Grid>

        <form>
          <TextField
            sx={{ mt: 3 }}
            id="outlined-basic"
            label="Name"
            variant="outlined"
            type="text"
            placeholder="Enter name"
            fullWidth
            required
          />
          <TextField
            sx={{ mt: 3 }}
            id="outlined-basic"
            label="Email"
            variant="outlined"
            placeholder="Enter email"
            type="email"
            fullWidth
            required
          />
          {/* Radio */}

          <FormControl style={{ marginTop: '8px' }}>
            <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
              style={{ display: 'initial' }}
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
            </RadioGroup>
          </FormControl>

          <TextField
            sx={{ mt: 3 }}
            id="outlined-basic"
            label="Phone Number"
            variant="outlined"
            type="tel"
            placeholder="Enter phone number"
            fullWidth
            required
          />
          <TextField
            sx={{ mt: 3 }}
            id="outlined-basic"
            label="Password"
            variant="outlined"
            placeholder="Enter password"
            fullWidth
            required
          />
          <TextField
            sx={{ mt: 3 }}
            id="outlined-basic"
            label="Confirm Password"
            variant="outlined"
            placeholder="Confirm password"
            fullWidth
            required
          />
          <FormControlLabel
            required
            control={<Checkbox />}
            label="I accept the terms and conditions."
          />

          <Button type="submit" variant="contained" color="primary">
            SIGN UP
          </Button>
        </form>
      </Paper>
    </Grid>
  );
};

export default SignUp;
