/* eslint-disable linebreak-style */
import React from 'react';
import {
  Typography,
  Box,
} from '@material-ui/core';
import Typed from 'react-typed';
import Particles from 'react-particles-js';
import useStyles from './style';
import avatar1 from './img/particles/image2.png';
import avatar5 from './img/particles/image3.png';
import avatar2 from './img/particles/image4.png';
import avatar3 from './img/particles/image5.png';
import avatar4 from './img/particles/image6.png';

const Header = () => {
  const classes = useStyles();
  return (
    <Box className={classes.headerContainer}>
      {/* <Particles
        canvasClassName={classes.particlesCanvas}
        params={
          {
            particles: {
              number: {
                value: 50,
                density: {
                  enable: true,
                  value_area: 800,
                },
              },
              color: {
                value: '#ffffff',
              },
              shape: {
                type: 'star',
                stroke: {
                  width: 0,
                  color: '#000000',
                },
                polygon: {
                  nb_sides: 5,
                },
              },
              opacity: {
                value: 0.5,
                random: false,
                anim: {
                  enable: false,
                  speed: 1,
                  opacity_min: 0.1,
                  sync: false,
                },
              },
              size: {
                value: 6,
                random: true,
                anim: {
                  enable: true,
                  speed: 10,
                  size_min: 0.1,
                  sync: false,
                },
              },
              line_linked: {
                enable: true,
                distance: 150,
                color: '#ffffff',
                opacity: 0.4,
                width: 1,
              },
              move: {
                enable: true,
                speed: 6,
                direction: 'none',
                random: false,
                straight: false,
                out_mode: 'out',
                bounce: false,
                attract: {
                  enable: false,
                  rotateX: 600,
                  rotateY: 1200,
                },
              },
            },
            interactivity: {
              detect_on: 'canvas',
              events: {
                onhover: {
                  enable: true,
                  mode: 'repulse',
                },
                onclick: {
                  enable: true,
                  mode: 'push',
                },
                resize: true,
              },
              modes: {
                grab: {
                  distance: 400,
                  line_linked: {
                    opacity: 1,
                  },
                },
                bubble: {
                  distance: 400,
                  size: 40,
                  duration: 2,
                  opacity: 8,
                  speed: 3,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
                push: {
                  particles_nb: 4,
                },
                remove: {
                  particles_nb: 2,
                },
              },
            },
            retina_detect: true,
          }
        }
      /> */}
      <Particles
        canvasClassName={classes.particlesCanvas}
        params={{
	      particles: {
	        number: {
	            value: 12,
	            density: {
	                enable: true,
	                value_area: 800,
	            },
            },
            opacity: {
              value: 1,
            },
	        line_linked: {
	            enable: false,
	        },
	        move: {
	            speed: 6,
	            // out_mode: 'out',
	        },
	        shape: {
	            type: [
	                'image',
	            ],
	            image: [
	                {
	                    src: avatar1,
	                    height: 20,
	                    width: 23,
	                },
	                {
	                    src: avatar2,
	                    height: 20,
	                    width: 20,
	                },
	                {
	                    src: avatar3,
	                    height: 20,
	                    width: 20,
                },
                {
                  src: avatar5,
                  height: 20,
                  width: 23,
                },
                {
                  src: avatar4,
                  height: 20,
                  width: 20,
                },
                {
                  src: avatar3,
                  height: 20,
                  width: 20,
                },
	            ],
	        },
	        color: {
	            value: '#CCC',
	        },
	        size: {
	            value: 30,
	            random: false,
	            anim: {
	                enable: false,
	                speed: 15,
	                size_min: 10,
	                sync: false,
	            },
	        },
          },
          retina_detect: true,
        }}
      />
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
