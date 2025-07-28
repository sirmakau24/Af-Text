// src/components/layout/Sidebar.jsx
import React from 'react';
import SidebarItem from './SidebarItem';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <SidebarItem title="Chat" path="/chat" />
      <SidebarItem title="Status" path="/status" />
      <SidebarItem title="Settings" path="/settings" />
    </div>
  );
};

export default Sidebar;
