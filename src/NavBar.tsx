import React from 'react';

const NavBar = () => {
  const navbarStyle = {
    backgroundColor: '#333',
    padding: '10px',
    textAlign: 'right',
    width: '99vw',
  };

  const linkStyle = {
    backgroundColor: '#555',
    color: '#fff',
    border: 'none',
    padding: '10px 20px',
    marginLeft: '10px',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  };

  const linkHoverStyle = {
    backgroundColor: '#777',
  };

  return (
    <div className="navbar" style={navbarStyle}>
      <a href="/avatar" style={linkStyle} onMouseOver={e => e.currentTarget.style.backgroundColor = linkHoverStyle.backgroundColor} onMouseOut={e => e.currentTarget.style.backgroundColor = linkStyle.backgroundColor}>Avatar</a>
      <a href="/" style={linkStyle} onMouseOver={e => e.currentTarget.style.backgroundColor = linkHoverStyle.backgroundColor} onMouseOut={e => e.currentTarget.style.backgroundColor = linkStyle.backgroundColor}>Traffic Light</a>
    </div>
  );
};

export default NavBar;
