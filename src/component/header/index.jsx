import { useState, useEffect } from 'react';
import './style.css';

export const Header = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch('http://localhost:1717/me', {
      headers: {
        'X-Auth': localStorage.getItem('token')
      }
    })
      .then(res => res.json())
      .then(data => {
        setUser(data);
      });
  }, []);

  return (
    <header className="header">
      {
        user
        ? (
          <div>
            <div>Logged in as {user.username}</div>
          </div>
        )
        : <p>Loading user information...</p>
      }
    </header>
  );
};
