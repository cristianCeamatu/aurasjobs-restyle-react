import React from 'react';
import Particles from 'react-particles-js';
import useStyles from './style';
import particleImages from './utils';

const ParticleComponent = () => {
  const classes = useStyles();

  return (
    <Particles
      canvasClassName={classes.particlesCanvas}
      params={{
        particles: {
          number: {
            value: 8,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          opacity: {
            value: 1,
            anim: {
              enable: false,
            },
          },
          line_linked: {
            enable: false,
          },
          move: {
            speed: 6,
          },
          shape: {
            type: [
              'image',
            ],
            image: particleImages,
          },
          color: {
            value: '#CCC',
          },
          size: {
            value: 30,
            anim: {
              enable: true,
              speed: 15,
              size_min: 27,
              sync: false,
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
              mode: 'repulse',
            },
          },
          modes: {
            repulse: {
              distance: 100,
              duration: 0.4,
            },
            push: {
              particles_nb: 0.5,
            },
          },
        },
        retina_detect: true,
      }}
    />
  );
};

export default ParticleComponent;
