import React, { useState } from 'react';
import MobilRightMenuSlider from '@material-ui/core/Drawer';
import { makeStyles } from '@material-ui/core/styles';
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
} from '@material-ui/core';
import {
  ArrowBack,
  Apps,
  Home,
  AssignmentInd,
  ContactMail,
} from '@material-ui/icons';
import avatar from './avatar.png';

const useStyles = makeStyles((theme) => ({
  menuSliderBox: {
    margin: 0,
    width: 250,
    background: '#f9f9f9',
    height: '100%',
  },
  avatar: {
    display: 'block',
    margin: '0.5rem auto',
    width: theme.spacing(13),
    height: theme.spacing(13),
  },
  menuItem: {
    color: '#363636',
  },
}));

const menuItems = [
  {
    key: 'menuItem1',
    listIcon: <Home />,
    listText: 'Home',
  },
  {
    key: 'menuItem2',
    listIcon: <AssignmentInd />,
    listText: 'Resume',
  },
  {
    key: 'menuItem3',
    listIcon: <Apps />,
    listText: 'Portofolio',
  },
  {
    key: 'menuItem4',
    listIcon: <ContactMail />,
    listText: 'Contact',
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
            <ListItemIcon className={classes.menuItem}>
              {item.listIcon}
            </ListItemIcon>
            <ListItemText className={classes.menuItem} primary={item.listText} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <Box component="nav">
        <AppBar position="relative">
          <Toolbar>
            <IconButton onClick={sliderToggle('right', true)}>
              <ArrowBack style={{ color: '#fafafa' }} />
            </IconButton>
          </Toolbar>
          <Typography primary="Recruiting Agency" />
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
