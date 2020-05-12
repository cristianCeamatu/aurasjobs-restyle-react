import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  ListItem,
  List,
  Box,
  Hidden,
  ListItemIcon,
} from '@material-ui/core';
import {
  Menu,
} from '@material-ui/icons';
import MobileSideMenu from './MobileSideMenu';
import useStyles from './style';
import logo from './img/logonew.png';
import flagUK from './img/uk_flag_42x28.png';
// import flagRO from './img/ro_flag_42x28.png';
import { menuItems } from './utils';

const Navbar = () => {
  const classes = useStyles();

  const [slider, setSlider] = useState(false);

  return (
    <>
      <Box component="nav">
        <AppBar position="static" color="inherit">
          <Toolbar className={classes.toolbar}>
            <List>
              <ListItem button component={Link} to="/">
                <img className={classes.logo} src={logo} alt="logo" />
              </ListItem>
            </List>
            <Hidden smDown>
              <List className={classes.mdUpNavbar}>
                {menuItems.map((item) => (
                  <ListItem button key={item.key}>
                    <ListItemIcon className={`${classes.mdUpMenuItemIcon} ${classes.menuItemIcon}`}>
                      {item.itemIcon}
                    </ListItemIcon>
                    {item.itemText}
                  </ListItem>
                ))}
                <ListItem button alignItems="center">
                  <img className={classes.flag} src={flagUK} alt="UK flag" />
                </ListItem>
              </List>
            </Hidden>
            <Hidden mdUp>
              <List>
                <ListItem button onClick={() => setSlider(true)}>
                  <Menu className={`${classes.menuItemIcon} ${classes.toggleMenuButton}`} />
                </ListItem>
              </List>
            </Hidden>
          </Toolbar>
          <MobileSideMenu slider={slider} sliderToggle={() => setSlider(false)} />
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;
