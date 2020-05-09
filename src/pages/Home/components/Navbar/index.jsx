import React, { useState } from 'react';
import MobilRightMenuSlider from '@material-ui/core/Drawer';
import {
  AppBar,
  Toolbar,
  Avatar,
  Divider,
  ListItem,
  List,
  ListItemIcon,
  ListItemText,
  IconButton,
  Typography,
  Box,
  Grid,
} from '@material-ui/core';
import {
  Menu,
  TouchApp,
  Info,
  Work,
  ContactPhone,
  Call,
  Email,
} from '@material-ui/icons';
import useStyles from './style';
import avatar from './avatar.png';
import flagUK from './uk_flag_42x28.png';
import flagRO from './ro_flag_42x28.png';

const menuItems = [
  {
    key: 'menuItem1',
    listIcon: <Info />,
    listText: 'Despre',
  },
  {
    key: 'menuItem2',
    listIcon: <Work />,
    listText: 'Joburi',
  },
  {
    key: 'menuItem3',
    listIcon: <TouchApp />,
    listText: 'Aplica',
  },
  {
    key: 'menuItem4',
    listIcon: <ContactPhone />,
    listText: 'Contact',
  },
];

const contacts = [
  {
    key: 'contact1',
    listIcon: <Call />,
    listText: '+40725 085 231'
  },
  {
    key: 'contact2',
    listIcon: <Call />,
    listText: '+40730 719 323'
  },
  {
    key: 'contact3',
    listIcon: <Call />,
    listText: '+40728 683 604'
  },
  {
    key: 'contact4',
    listIcon: <Email />,
    listText: 'office@aurasjobs.ro'
  },
];

const Navbar = () => {
  const classes = useStyles();

  const [state, setState] = useState({
    right: false,
  });

  const sliderToggle = (slider, open) => () => {
    setState({ ...state, [slider]: open });
  };

  const sideMobileMenu = (slider) => (
    <Box
      className={classes.menuSliderBox}
      component="div"
      onClick={sliderToggle(slider, false)}
    >
      <Avatar className={classes.avatar} src={avatar} alt="Avatar" />
      <Divider />
      <List>
        {menuItems.map((item) => (
          <ListItem button key={item.key}>
            <ListItemIcon className={classes.menuItemIcon}>
              {item.listIcon}
            </ListItemIcon>
            <ListItemText primary={item.listText} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        <ListItem button alignItems="center">
          <img className={classes.flag} src={flagUK} alt="UK flag" />
          <ListItemText primary="English" />
        </ListItem>
      </List>
      <Divider />
      <List>
        {contacts.map((item) => (
          <ListItem button key={item.key}>
            <ListItemIcon className={classes.menuItemIcon}>
              {item.listIcon}
            </ListItemIcon>
            <ListItemText primary={item.listText} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <Box component="nav">
        <AppBar title="Recruiting Agency" position="relative">
          <Toolbar>
            <IconButton onClick={sliderToggle('right', true)}>
              <Menu style={{ color: '#fafafa' }} />
            </IconButton>
            <ListItem button>
              Recruiting Agency
            </ListItem>
          </Toolbar>
          <MobilRightMenuSlider
            anchor="right"
            open={state.right}
            onClose={sliderToggle('right', false)}
          >
            {sideMobileMenu('right')}
          </MobilRightMenuSlider>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;
