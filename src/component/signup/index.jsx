import React, { useState } from 'react';
import './signup.css'; 

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);
  }

  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit} className="form-3d">
        <h1 className="text-center mb-4">Регистрация</h1>
        <div className="form-group">
          <input
            type="text"
            id="username"
            className="form-control"
            placeholder='Имя пользователя'
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            id="email"
            className="form-control"
            placeholder='Email'
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            id="password"
            className="form-control"
            placeholder='Пароль'
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            id="confirmPassword"
            className="form-control"
            placeholder='Повторить пароль'
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary btn-block mt-4">Зарегистрироваться</button>
        <div className="link">
          Уже есть аккаунт? <a href="#">Войти</a>
        </div>
      </form>
    </div>
  );
};

export default Register;
