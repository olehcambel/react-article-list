import React from 'react';
import { NavLink } from 'react-router-dom';

const LinkRoutes = ({ to, title }) => (
  <li>
    <NavLink activeStyle={{ color: 'pink' }} to={to}>
      {title}
    </NavLink>
  </li>
);

export default LinkRoutes;
