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
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const SignUp = () => {
  const paperStyle = {
    padding: '20px',
    minHeight: '72vh',
    width: 320,
    margin: '0 auto',
  };

  const avatarStyle = { backgroundColor: '#1bbd7e' };

  const initialValues = {
    name: '',
    email: '',
    gender: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
    termAndConditions: false,
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().min(3, 'It`s too short').required('Required'),
    email: Yup.string().email('Enter valid email').required('Required'),
    phoneNumber: Yup.number()
      .typeError('Enter valid phone number')
      .required('Required'),
  });

  const onSubmit = (values, props) => {
    console.log(values);
  };

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

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {props => (
            <Form>
              <Field
                as={TextField}
                sx={{ mt: 3 }}
                id="outlined-basic"
                name="name"
                label="Name"
                variant="outlined"
                type="text"
                placeholder="Enter name"
                fullWidth
              />
              <ErrorMessage name="name" />
              <Field
                as={TextField}
                sx={{ mt: 3 }}
                id="outlined-basic"
                name="email"
                label="Email"
                variant="outlined"
                placeholder="Enter email"
                // type="email"
                fullWidth
              />
              <ErrorMessage name="email" />
              {/* Radio */}

              <FormControl style={{ marginTop: '8px' }}>
                <FormLabel id="demo-radio-buttons-group-label">
                  Gender
                </FormLabel>
                <Field
                  as={RadioGroup}
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="female"
                  name="gender"
                  style={{ display: 'initial' }}
                >
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Female"
                  />
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Male"
                  />
                </Field>
              </FormControl>

              <Field
                as={TextField}
                sx={{ mt: 3 }}
                id="outlined-basic"
                label="Phone Number"
                name="phoneNumber"
                variant="outlined"
                type="tel"
                placeholder="Enter phone number"
                fullWidth
              />
              <Field
                as={TextField}
                sx={{ mt: 3 }}
                id="outlined-basic"
                name="password"
                label="Password"
                variant="outlined"
                placeholder="Enter password"
                fullWidth
              />
              <Field
                as={TextField}
                sx={{ mt: 3 }}
                id="outlined-basic"
                name="confirmPassword"
                label="Confirm Password"
                variant="outlined"
                placeholder="Confirm password"
                fullWidth
              />
              <FormControlLabel
                control={<Field as={Checkbox} name="termAndConditions" />}
                label="I accept the terms and conditions."
              />

              <Button type="submit" variant="contained" color="primary">
                SIGN UP
              </Button>
            </Form>
          )}
        </Formik>
      </Paper>
    </Grid>
  );
};

export default SignUp;
