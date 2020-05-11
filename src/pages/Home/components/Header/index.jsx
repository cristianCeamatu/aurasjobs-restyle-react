/* eslint-disable linebreak-style */
import React from 'react';
import {
  Typography,
  Box,
  Avatar,
} from '@material-ui/core';
import Typed from 'react-typed';
import Particles from 'react-particles-js';
import image1 from './img/particles/image3.png';
import useStyles from './style';

const Header = () => {
  const classes = useStyles();
  return (
    <Box className={classes.headerContainer}>
      <Typography className={classes.headerTitle} variant="h1" />
      <Typography className={classes.headerSubtitle} variant="h3">
        <Typed
          strings={[
            'Recruiting with passion',
            'No taxes or fees',
            'Recruiting for Hospitality',
            'Recruiting for Agriculture',
            'Professional services',
          ]}
          typeSpeed={50}
          backSpeed={60}
          loop
        />
      </Typography>
    </Box>
  );
};

export default Header;
