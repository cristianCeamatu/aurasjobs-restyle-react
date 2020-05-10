import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  ListItem,
  List,
  Box,
  Hidden,
  ListItemText,
  ListItemIcon,
} from '@material-ui/core';
import {
  Menu,
  TouchApp,
  Info,
  Work,
  ContactPhone,
  // Call,
  // Email,
} from '@material-ui/icons';
import MobileSideMenu from './MobileSideMenu';
import useStyles from './style';
import logo from './img/logo.png';
import flagUK from './img/uk_flag_42x28.png';
// import flagRO from './img/ro_flag_42x28.png';

const menuItems = [
  {
    key: 'menuItem1',
    itemIcon: <Info />,
    itemText: 'Despre',
    itemLink: '/about',
  },
  {
    key: 'menuItem2',
    itemIcon: <Work />,
    itemText: 'Joburi',
    itemLink: '/joburi',
  },
  {
    key: 'menuItem3',
    itemIcon: <TouchApp />,
    itemText: 'Aplica',
    itemLink: '/aplica',
  },
  {
    key: 'menuItem4',
    itemIcon: <ContactPhone />,
    itemText: 'Contact',
    itemLink: '/contact',
  },
];

const Navbar = () => {
  const classes = useStyles();

  const [slider, setSlider] = useState(false);

  return (
    <>
      <Box component="nav">
        <AppBar position="relative" color="inherit">
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
                    <ListItemText primary={item.itemText} />
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
                  <Menu className={classes.menuItemIcon} />
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
