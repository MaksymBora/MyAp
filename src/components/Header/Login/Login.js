import React, { useState } from 'react';
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
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  username: Yup.string().email('Please enter valid email').required('Required'),
  password: Yup.string().required('Required'),
});

const SignInSide = ({ handleChange }) => {
  const [showPassword, setShowPassword] = useState(false);

  const paperStyle = {
    padding: 20,
    minHeight: '50vh',
    width: 320,
    margin: '0 auto',
  };
  const avatarStyle = { backgroundColor: '#1bbd7e', marginBottom: '16px' };
  const btnstyle = { margin: '8px 0' };

  const onSubmit = (values, props) => {
    console.log(values);

    setTimeout(() => {
      props.resetForm();
      props.setSubmitting(false);
    }, 2000);
  };

  const initialValues = {
    username: '',
    password: '',
    remember: false,
  };
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

          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
          >
            {props => (
              <Form>
                <Field
                  as={TextField}
                  sx={{ mt: 3 }}
                  id="outlined-basic"
                  name="username"
                  label="Login"
                  variant="outlined"
                  placeholder="Enter username"
                  type="text"
                  fullWidth
                />
                <ErrorMessage name="username" />
                <FormControl sx={{ mt: 2, width: '100%' }} variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-password">
                    Password
                  </InputLabel>
                  <Field
                    as={OutlinedInput}
                    id="outlined-adornment-password"
                    name="password"
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
                <ErrorMessage name="password" />
                <Field
                  as={FormControlLabel}
                  control={<Checkbox />}
                  label="Remember me"
                  name="remember"
                  sx={{ width: '100%' }}
                />
                <Button
                  type="submit"
                  color="primary"
                  fullWidth
                  variant="contained"
                  disabled={props.isSubmitting}
                  style={btnstyle}
                >
                  {props.isSubmitting ? 'Loading' : 'Sign in'}
                </Button>
              </Form>
            )}
          </Formik>
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
