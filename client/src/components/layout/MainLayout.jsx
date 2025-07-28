// src/components/layout/MainLayout.jsx
import React from 'react';
import Sidebar from './Sidebar';

const MainLayout = ({ children }) => {
  return (
    <div className="main-layout">
      <Sidebar />
      <div className="content">{children}</div>
    </div>
  );
};

export default MainLayout;
