import React from 'react';
import {
  Typography,
  Avatar,
  Box,
} from '@material-ui/core';
import Typed from 'react-typed';
import Particles from 'react-particles-js'
import { makeStyles } from '@material-ui/core/styles';
import avatar from './avatar.png';
import headerBackground from './coffee-apple.jpg';

console.log(headerBackground);
// CSS styles
const useStyles = makeStyles((theme) => ({
  headerContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '200px 20px 300px',
    height: theme.spacing(70),
    width: '100%',
    backgroundImage: `url(${headerBackground})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  },
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: theme.spacing(1),
  },
  headerTitle: {
    textAlign: 'center',
    fontSize: '24px',
    color: 'tan',
  },
  headerSubtitle: {
    textAlign: 'left',
    fontSize: '28px',
    color: '#fff',
  },
  particlesCanvas: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <Box className={classes.headerContainer}>
      <Particles
        canvasClassName={classes.particlesCanvas}
        params={{
          particles: {
            number: {
              value: 45,
              density: {
                enable: false,
                value_area: 900,
              },
            },
            shape: {
              type: 'circle',
              stroke: {
                width: 1,
                color: 'red',
              },
            },
            size: {
              value: 6,
              random: true,
              anim: {
                enable: true,
                speed: 6,
                size_min: 0.1,
                sync: true,
              },
            },
            opacity: {
              value: 1,
              random: true,
              anim: {
                enable: true,
                speed: 2,
                size_min: 0.1,
                sync: true,
              },
            },
          },
        }}
      />
      <Avatar className={classes.avatar} src={avatar} alt="Avatar" />
      <Typography className={classes.headerTitle} variant="h1">
        <Typed
          strings={['aurasjobs.ro']}
          typeSpeed={60}
        />
      </Typography>
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
