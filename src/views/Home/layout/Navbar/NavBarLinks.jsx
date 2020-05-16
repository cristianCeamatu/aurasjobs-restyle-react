import React from 'react';
import { Link } from 'react-router-dom';
import {
  List,
  ListItem,
  Hidden,
  Divider,
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

const MenuItem = styled(ListItem)`
  line-height: 1;
`;

const LanguageItem = styled(MenuItem)`
  margin-top: 8px!important;
`;
const Flag = styled.img`
  width: 30px;
`;

const Icon = styled.span`
@media(max-width: 960px){
  margin-right: 15px;
}
  color: #5D692Cff;
`;

const NavBarLinks = () => (
  <>
    <MenuItems>
      {links.map((link) => (
        <MenuItem
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
        </MenuItem>
      ))}
      <Divider />
      <LanguageItem button>
        <Icon>
          <Flag src={flagUK} alt="UK flag" />
        </Icon>
        <Hidden mdUp>
          English
        </Hidden>
      </LanguageItem>
    </MenuItems>
  </>
);

export default NavBarLinks;
