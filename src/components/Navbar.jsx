import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ onLogout }) => {
  const navigate = useNavigate();

  const handleUsersClick = () => {
    navigate('/users');
  };

  return (
    <nav className="navbar">
      <div className="navbar-header">Parking Enforcement </div>
      <div className="navbar-content">
        <button className="nav-button" onClick={handleUsersClick}>User Management</button>
        <button className="nav-button" onClick={onLogout}>Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;