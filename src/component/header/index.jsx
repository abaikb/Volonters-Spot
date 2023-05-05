import './style.css';

import HamburgerIcon from '../image/bars.png';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="menu">
      <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={`menu-items ${isOpen ? 'open' : ''}`}>
        <NavLink to="/about">
          <button className="aboutActive" onClick={toggleMenu}>
            Профиль
          </button>
        </NavLink>
        <NavLink to="/events">
          <button className="eventsActive" onClick={toggleMenu}>
            События
          </button>
        </NavLink>
        <NavLink to="/signup">
          <button className="signupActive" onClick={toggleMenu}>
            Зарегистрироваться
          </button>
        </NavLink>
        <NavLink to="/login">
          <button className="loginActive" onClick={toggleMenu}>
            Войти
          </button>
        </NavLink>
      </ul>
    </div>
  );
};

export default HamburgerMenu;




export function Header() {
    // const App = () => {
    //     const [isOpen, setIsOpen] = useState(false);
      
    //     const handleToggle = () => {
    //       setIsOpen(!isOpen);
    //     }
      
    //     return (
    //       <div>
    //         <MenuIcon onClick={handleToggle} />
    //         {isOpen && <Sidebar setIsOpen={setIsOpen} />}
    //       </div>
    //     );
    //   }

    return (
        <>
        <div className="header">
          <NavLink to='/' className='logo'>Volunteer's <span>spot</span></NavLink>
            
            <NavLink to="/about">
              <button className='about'>Профиль</button>
            </NavLink>
            <NavLink to="/events">
              <button className='events'>События</button>
            </NavLink>
            <NavLink to="/signup">
              <button className='signup'>Зарегистрироваться</button>
            </NavLink>
            <NavLink to="/login">
              <button className='login'>Войти</button>
            </NavLink> 
            <HamburgerMenu/>
        </div>
        
        </>
    )
}

