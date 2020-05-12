import React from 'react';
import PropTypes from 'prop-types'
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
import useStyles from './style';
import logo from './img/logonew.png';
import flagUK from './img/uk_flag_42x28.png';
// import flagRO from './img/ro_flag_42x28.png';
import { menuItems, menuContactItems } from './utils';

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
          <img className={`${classes.logo} ${classes.sideMenuLogo}`} src={logo} alt="logo" />
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
              {item.itemText}
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
                <ListItemIcon className={classes.menuItemIcon}>
                  {item.itemIcon}
                </ListItemIcon>
                {item.itemText}
              </a>
            </ListItem>
          ))}
        </List>
      </Box>
    </MobilRightMenuSlider>
  );
};

MobileSideMenu.propTypes = {
  slider: PropTypes.bool.isRequired,
  sliderToggle: PropTypes.func.isRequired,
};

export default MobileSideMenu;
