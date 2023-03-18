import React from 'react';
import Navbar from './Navbar';

const Header = () => (
  <header className="header" data-testid="header">
    <div className="logo-header">
      <div className="logo" />
    </div>
    <Navbar />
  </header>
);

export default Header;
