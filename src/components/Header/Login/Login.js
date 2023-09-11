import React from 'react';
import {
  Avatar,
  Paper,
  Grid,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Typography,
  Link,
} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const SignInSide = ({ handleChange }) => {
  const paperStyle = {
    padding: 20,
    minHeight: '50vh',
    width: 320,
    margin: '0 auto',
  };
  const avatarStyle = { backgroundColor: '#1bbd7e', marginBottom: '16px' };

  const btnstyle = { margin: '8px 0' };

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword(show => !show);

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  return (
    <>
      <Grid>
        <Paper style={paperStyle}>
          <Grid align="center">
            <Avatar style={avatarStyle}>
              <LockOutlinedIcon />
            </Avatar>
            <h2>Sign in</h2>
          </Grid>

          <form>
            <TextField
              sx={{ mt: 3 }}
              id="outlined-basic"
              label="Login"
              variant="outlined"
              placeholder="Enter username"
              type="email"
              fullWidth
              required
            />
            <FormControl
              sx={{ mt: 2, width: '100%' }}
              variant="outlined"
              required
            >
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Remember me"
            />
            <Button
              type="submit"
              color="primary"
              fullWidth
              variant="contained"
              style={btnstyle}
            >
              Sign in
            </Button>
          </form>
          <Typography variant="body2">
            <Link
              component="button"
              variant="body2"
              onClick={() => {
                console.info("I'm a button.");
              }}
            >
              Forgot password ?
            </Link>
          </Typography>

          <Typography variant="body2" sx={{ mr: 1, d: 'inline' }}>
            Do you have an account ?
          </Typography>
          <Link
            component="button"
            variant="body2"
            onClick={() => handleChange('event', 1)}
          >
            Sign Up
          </Link>
        </Paper>
      </Grid>
    </>
  );
};

export default SignInSide;
