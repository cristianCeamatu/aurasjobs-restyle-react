import React from 'react';
import {
  TouchApp,
  Info,
  Work,
  ContactPhone,
  Call,
  Email,
  Facebook,
} from '@material-ui/icons';

export const menuItems = [
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

export const menuContactItems = [
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
    key: 'contact4',
    itemIcon: <Facebook />,
    itemText: 'facebook:aurasjobs.ro',
    itemLink: 'https://www.facebook.com/aurasjobs.ro/',
  },

];
