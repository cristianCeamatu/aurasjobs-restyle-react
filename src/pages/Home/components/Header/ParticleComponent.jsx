import React from 'react';
import Particles from 'react-particles-js';
import avatar1 from './img/particles/image2.png';
import avatar5 from './img/particles/image3.png';
import avatar2 from './img/particles/image4.png';
import avatar3 from './img/particles/image5.png';
import avatar4 from './img/particles/image6.png';
import useStyles from './style';


const ParticleComponent = () => {
  const classes = useStyles();

  return (
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
            anim: {
              enable: false,
            },
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
          },
          modes: {
            repulse: {
              distance: 100,
              duration: 0.4,
            },
            push: {
              particles_nb: 4,
            },
          },
        },
        retina_detect: true,
      }}
    />
  );
};

export default ParticleComponent;
