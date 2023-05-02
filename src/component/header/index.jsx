import { useState, useEffect } from 'react';
import './style.css';

export const Header = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch('http://localhost:1717/me', {
      headers: {
        'X-Auth': 'my-auth-token'
      }
    })
      .then(res => res.json())
      .then(data => {
        setUser(data);
      });
  }, []);

  return (
    <header className="header">
      <div>{user ? user.name : 'Loading...'}</div>
      Header
    </header>
  );
};
