import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./signup.css";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      console.log("Username:", username);
      console.log("Email:", email);
      console.log("Password:", password);
      console.log("Confirm Password:", confirmPassword);
      setUsername("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setErrors({})
    } else {
      setErrors(validationErrors);
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!username.trim()) {
      errors.username = "Имя пользователя обязательно для заполнения";
    }
    if (!email.trim()) {
      errors.email = "Email обязателен для заполнения";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Неправильный формат Email";
    }
    if (!password) {
      errors.password = "Пароль обязателен для заполнения";
    } else if (password.length < 6) {
      errors.password = "Пароль должен быть длиннее 6 символов";
    }
    if (!confirmPassword) {
      errors.confirmPassword =
        "Подтверждение пароля обязательно для заполнения";
    } else if (password !== confirmPassword) {
      errors.confirmPassword = "Подтверждение пароля не соответствует паролю";
    }
    return errors;
  };

  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit} className="form-3d">
        <h1 className="text-center mb-4">Регистрация</h1>
        <div className="form-group">
          <input
            type="text"
            id="username"
            className="form-control"
            placeholder="Имя пользователя"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
          {errors.username && <div className="feedback">{errors.username}</div>}
        </div>
        <div className="form-group">
          <input
            type="email"
            id="email"
            className={`form-control ${errors.email && "is-invalid"}`}
            placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          {errors.email && <div className="feedback">{errors.email}</div>}
        </div>
        <div className="form-group">
          <input
            type="password"
            id="password"
            className={`form-control ${errors.password && "is-invalid"}`}
            placeholder="Пароль"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          {errors.password && <div className="feedback">{errors.password}</div>}
        </div>
        <div className="form-group">
          <input
            type="password"
            id="confirmPassword"
            className={`form-control ${errors.confirmPassword && "is-invalid"}`}
            placeholder="Повторить пароль"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
          />
          {errors.confirmPassword && (
            <div className="feedback">{errors.confirmPassword}</div>
          )}
        </div>
        <button type="submit" className="btn-signup">
          Зарегистрироваться
        </button>
        <div className="link">
          Уже есть аккаунт? <Link to="/login">Войти</Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
