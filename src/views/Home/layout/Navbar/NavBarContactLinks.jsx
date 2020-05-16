import React from 'react';
import {
  List,
  ListItem,
} from '@material-ui/core';
import {
  Call,
  Email,
  Facebook,
} from '@material-ui/icons';
import styled from 'styled-components';

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
  {
    key: 'contact5',
    itemIcon: <Facebook />,
    itemText: 'facebook:aurasjobs.ro',
    itemLink: 'https://www.facebook.com/aurasjobs.ro/',
  },
];

const MenuItems = styled(List)`
  font-size: 12px;
`;

const MenuItem = styled(ListItem)`
  line-height: 1;
`;

const Icon = styled.span`
  margin-right: 15px;
  color: #5D692Cff;
`;

const NavBarContacts = () => (
  <MenuItems>
    {menuContactItems.map((item) => (
      <MenuItem
        button
        key={item.key}
        component="a"
        href={item.itemLink}
      >
        <Icon>{item.itemIcon}</Icon>
        {item.itemText}
      </MenuItem>
    ))}
  </MenuItems>
);

export default NavBarContacts;
