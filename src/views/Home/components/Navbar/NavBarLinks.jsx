import React from 'react';
import { Link } from 'react-router-dom';
import {
  List,
  ListItem,
  ListItemIcon,
  Hidden,
} from '@material-ui/core';
import {
  TouchApp,
  Info,
  Work,
  ContactPhone,
} from '@material-ui/icons';
import styled from 'styled-components';
import flagUK from './img/uk_flag_42x28.png';
// import flagRO from './img/ro_flag_42x28.png';

const links = [
  {
    key: 'menuLink1',
    linkIcon: <Info />,
    linkText: 'Despre',
    link: '/about',
  },
  {
    key: 'menuLink2',
    linkIcon: <Work />,
    linkText: 'Joburi',
    link: '/joburi',
  },
  {
    key: 'menuLink3',
    linkIcon: <TouchApp />,
    linkText: 'Aplica',
    link: '/aplica',
  },
  {
    key: 'menuLink4',
    linkIcon: <ContactPhone />,
    linkText: 'Contact',
    link: '/contact',
  },
];

const MenuItems = styled(List)`
  display: flex;
  font-size: 12px;
  @media(max-width: 960px){
    flex-direction: column;
  }
`;

const Flag = styled.img`
  width: 30px;
`;

const Icon = styled(ListItemIcon)`
  margin-right: -15px;
  color: #ff8700!important;
`;

const NavBarLinks = () => (
  <MenuItems>
    {links.map((link) => (
      <ListItem
        button
        key={link.key}
        component={Link}
        to={link.link}
      >
        <Hidden mdUp>
          <Icon>
            {link.linkIcon}
          </Icon>
        </Hidden>
        {link.linkText}
      </ListItem>
    ))}
    <ListItem button>
      <Icon>
        <Flag src={flagUK} alt="UK flag" />
      </Icon>
      <Hidden mdUp>
        English
      </Hidden>
    </ListItem>
  </MenuItems>
);

export default NavBarLinks;
