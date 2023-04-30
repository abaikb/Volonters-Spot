import React, { useState } from 'react';
import HamburgerIcon from './index'

const Sidebar = (props) => {
  const handleClose = () => {
    props.setIsOpen(false);
  }

  return (
    <div className="sidebar">
      <button onClick={handleClose}>Close</button>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
    </div>
  );
}


const HamburgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const handleToggle = () => {
      setIsOpen(!isOpen);
    }
  
    return (
      <div>
        <HamburgerIcon onClick={handleToggle}>Hamburger Menu Icon</HamburgerIcon>
        {isOpen && <Sidebar setIsOpen={setIsOpen} />}
      </div>
    );
  }
  
  export default HamburgerMenu;