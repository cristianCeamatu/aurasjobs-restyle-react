/* eslint-disable linebreak-style */
import React from 'react';
import {
  Typography,
  Box,
} from '@material-ui/core';
import Typed from 'react-typed';
import useStyles from './style';
import ParticleComponent from './ParticleComponent';

const Header = () => {
  const classes = useStyles();
  return (
    <Box className={classes.headerContainer}>
      <Typography variant="h1" style={{zIndex: 1, position: 'relative',}}>
        <Typed
          className={classes.headerSubtitle}
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
      <ParticleComponent />
    </Box>
  );
};

export default Header;
