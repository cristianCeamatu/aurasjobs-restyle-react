import React, { useState } from 'react';
import {
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  List,
  Box,
  Avatar,
} from '@material-ui/core';
import {
  AssignmentInd,
  Home,
  Apps,
  ContactMail,
} from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import avatar from './avatar.png';

const useStyle = makeStyles((theme) => ({
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

const MobileSideMenu = () => {
  const classes = useStyle();

  return (
    <Box
      className={classes.menuSliderBox}
      component="div"
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
};

export default MobileSideMenu;
