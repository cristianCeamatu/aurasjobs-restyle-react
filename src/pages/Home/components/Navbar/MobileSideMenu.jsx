import React from 'react';
import { Link } from 'react-router-dom';
import MobilRightMenuSlider from '@material-ui/core/Drawer';
import {
  Divider,
  ListItem,
  List,
  ListItemIcon,
  ListItemText,
  Box,
  Grid,
} from '@material-ui/core';
import {
  TouchApp,
  Info,
  Work,
  ContactPhone,
  Call,
  Email,
} from '@material-ui/icons';
import useStyles from './style';
import logo from './img/logo.png';
import flagUK from './img/uk_flag_42x28.png';
// import flagRO from './img/ro_flag_42x28.png';

const menuItems = [
  {
    key: 'menuItem1',
    itemIcon: <Info />,
    itemText: 'Despre',
    itemLink: 'about',
  },
  {
    key: 'menuItem2',
    itemIcon: <Work />,
    itemText: 'Joburi',
    itemLink: 'joburi',
  },
  {
    key: 'menuItem3',
    itemIcon: <TouchApp />,
    itemText: 'Aplica',
    itemLink: 'aplica',
  },
  {
    key: 'menuItem4',
    itemIcon: <ContactPhone />,
    itemText: 'Contact',
    itemLink: 'contact',
  },
];

const menuContactItems = [
  {
    key: 'contact1',
    itemIcon: <Call />,
    itemText: '+40725 085 231',
    itemLink: 'tel:0040725085231',
  },
  {
    key: 'contact2',
    itemIcon: <Call />,
    itemText: '+40730 719 323',
    itemLink: 'tel:0040730719323',
  },
  {
    key: 'contact3',
    itemIcon: <Call />,
    itemText: '+40728 683 604',
    itemLink: 'tel:0040728683604',
  },
  {
    key: 'contact4',
    itemIcon: <Email />,
    itemText: 'office@aurasjobs.ro',
    itemLink: 'mailto:office@aurasjobs',
  },
];

const MobileSideMenu = ({ slider, sliderToggle }) => {
  const classes = useStyles();

  return (
    <MobilRightMenuSlider
      anchor="right"
      open={slider}
      onClose={() => sliderToggle(false)}
    >
      <Box
        className={classes.menuSliderBox}
        component="div"
        onClick={() => sliderToggle(false)}
      >
        <Grid container justify="center">
          <img className={`${classes.logo}`} src={logo} alt="logo" />
        </Grid>
        <Divider />
        <List>
          {menuItems.map((item) => (
            <ListItem
              button
              key={item.key}
              component={Link}
              to={item.itemLink}
            >
              <ListItemIcon className={classes.menuItemIcon}>
                {item.itemIcon}
              </ListItemIcon>
              <ListItemText primary={item.itemText} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          <ListItem button alignItems="center">
            <img className={classes.flag} src={flagUK} alt="UK flag" />
            <ListItemText primary="English" className={classes.languageText} />
          </ListItem>
        </List>
        <Divider />
        <List>
          {menuContactItems.map((item) => (
            <ListItem button key={item.key} className={classes.contactsMenu}>
              <a href={item.itemLink} className={classes.contactMenuAnchors}>
                {item.itemIcon}
                <ListItemText primary={item.itemText} className={classes.contactsItemText} />
              </a>
            </ListItem>
          ))}
        </List>
      </Box>
    </MobilRightMenuSlider>
  );
};

export default MobileSideMenu;
