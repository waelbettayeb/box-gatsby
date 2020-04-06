import React from 'react';
import { graphql, useStaticQuery } from "gatsby"


export const dataSource = {
  wrapper: { className: 'header3 home-page-wrapper' },
  page: { className: 'home-page' },
  logo: {
    className: 'header3-logo',
    children:
      'https://gw.alipayobjects.com/zos/basement_prod/b30cdc2ahh-d91c-4c78-be9c-7c63b308d4b3.svg',
  },
  Menu: {
    className: 'header3-menu',
    children: [
      {
        name: 'home',
        className: 'header3-item',
        key: '/',
      },
      {
        name: 'services',
        className: 'header3-item',
          key: '/services',
      },
      {
        name: 'aboutUs',
        className: 'header3-item',
          key: '/about-us',
      },
    ],
  },
  mobileMenu: { className: 'header3-mobile-menu' },
};
