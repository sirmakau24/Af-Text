// src/components/layout/SidebarItem.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const SidebarItem = ({ title, path }) => {
  return (
    <Link to={path} className="sidebar-item">
      {title}
    </Link>
  );
};

export default SidebarItem;
