import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ListItem,
  List,
  Hidden,
  Button,
} from '@material-ui/core';
import {
  Menu,
} from '@material-ui/icons';
import styled from 'styled-components';
import logo from './img/logonew.png';
import NavBarLinks from './NavBarLinks';
import MobileSideMenu from './MobileSideMenu';

const Nav = styled.nav`
  position: static;
  max-width: 1100px;
  margin: 0 auto;
`;
const NavMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Brand = styled.img`
  width: 160px;
  height: 60px;
`;

const Navbar = () => {

  const [slider, setSlider] = useState(false);

  return (
    <Nav>
      <NavMenu>
        <Button component={Link} to="/">
          <Brand src={logo} alt="logo" />
        </Button>
        <Hidden smDown>
          <NavBarLinks />
        </Hidden>
        <Hidden mdUp>
          <List>
            <ListItem button onClick={() => setSlider(true)}>
              <Menu />
            </ListItem>
          </List>
        </Hidden>
      </NavMenu>
      <MobileSideMenu slider={slider} sliderToggle={() => setSlider(false)} />
    </Nav>
  );
};

export default Navbar;
