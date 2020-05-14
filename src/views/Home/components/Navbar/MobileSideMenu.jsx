import React from 'react';
import PropTypes from 'prop-types';
import MobilRightMenuSlider from '@material-ui/core/Drawer';
import {
  Divider,
  Box,
  Grid,
} from '@material-ui/core';
import styled from 'styled-components';
import logo from './img/logonew.png';
import NavBarLinks from './NavBarLinks';
import NavBarContactLinks from './NavBarContactLinks';

const Brand = styled.img`
  width: 180px;
  margin: 5px;
`;

const MobileSideMenu = ({ slider, sliderToggle }) => (
  <MobilRightMenuSlider
    anchor="right"
    open={slider}
    onClose={() => sliderToggle(false)}
  >
    <Box
      component="div"
      onClick={() => sliderToggle(false)}
    >
      <Grid container justify="center">
        <Brand src={logo} alt="logo" />
      </Grid>
      <Divider />
      <NavBarLinks />
      <Divider />
      <NavBarContactLinks />
    </Box>
  </MobilRightMenuSlider>
);

MobileSideMenu.propTypes = {
  slider: PropTypes.bool.isRequired,
  sliderToggle: PropTypes.func.isRequired,
};

export default MobileSideMenu;
