import React from 'react';
import {
  AppBar,
  Toolbar,
  ListItem,
  IconButton,
  ListItemText,
  Divider,
  Avatar,
  List,
  Typography,
  Box,
} from '@material-ui/core';
import {
  ArrowBack,
  AssignmentInd,
  Home,
  Apps,
  ContactMail,
} from '@material-ui/icons';

const Navbar = () => (
  <Box>
    <AppBar>
      <Toolbar>
        <IconButton>
          <ArrowBack style={{color: "#fafafa"}} />
        </IconButton>
      </Toolbar>
    </AppBar>
  </Box>
);

export default Navbar;
