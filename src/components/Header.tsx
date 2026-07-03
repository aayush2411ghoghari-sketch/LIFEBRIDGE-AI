import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <h1>ifeBridge Emergency Response</h1>
      <div className="subtitle">Your guide during floods, earthquakes, cyclones & accidents</div>
    </header>
  );
};

export default Header;
