import React, { useState } from 'react';
import { Box, Paper, Tab, Tabs, Typography } from '@mui/material';
import SignInSide from '../Login/Login';
import SignUp from '../SignUp/SignUp';

const SignInOutContainer = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const paperStyle = {
    width: 320,
    margin: '20px auto',
    boxShadow: '1px 4px 11px 2px rgba(255, 255, 255, 0.75)',
  };

  function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  return (
    <>
      <Paper style={paperStyle}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="disabled tabs example"
        >
          <Tab
            label="Sign In"
            sx={{
              ml: 'auto',
              mr: 'auto',
              width: '50%',
            }}
          />
          <Tab label="Sign Up" sx={{ ml: 'auto', mr: 'auto', width: '50%' }} />
        </Tabs>
        <CustomTabPanel value={value} index={0}>
          <SignInSide handleChange={handleChange} />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <SignUp />
        </CustomTabPanel>
      </Paper>
    </>
  );
};

export default SignInOutContainer;
