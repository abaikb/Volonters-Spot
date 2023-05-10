import './style.css';

import HamburgerIcon from '../image/bars.png';
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';

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
        <NavLink to="/profile">
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

export function Header() {
  const api = 'http://16.170.37.57/api/v1/app/profile/'
  const token = localStorage.getItem('token');
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (token) {
      fetch(`${api}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setUser(data);
        })
        .catch((err) => console.log(err));
    }
  }, [token]);

  return (
    <>
      <div className="header">
        <NavLink to="/" className="logo">
          Volunteer's <span>spot</span>
        </NavLink>

        <NavLink to="/profile">
          <button className="about">Профиль</button>
        </NavLink>
        <NavLink to="/events">
          <button className="events">События</button>
        </NavLink>
        {!token && (
          <>
            <NavLink to="/signup">
              <button className="signup">Зарегистрироваться</button>
            </NavLink>
            <NavLink to="/login">
              <button className="login">Войти</button>
            </NavLink>
          </>
        )}
        {token && user && (
          <div className="user-details">
            <span>Привет, {user.name}!</span>
            <button className="logout" onClick={() => localStorage.removeItem('token')}>
              Выйти
            </button>
          </div>
        )}
        <HamburgerMenu />
      </div>
    </>
  );
}
