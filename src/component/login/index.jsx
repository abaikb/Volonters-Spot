import React, { useState } from "react";
import "./style.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Username:", username);
    console.log("Password:", password);
  };

  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit} className="p-3 rounded shadow form-3d">
        <h1 className="text-center mb-4">Вход</h1>
        <div className="form-group">
          <input
            type="text"
            id="username"
            className="form-control"
            placeholder="Логин"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            id="password"
            className="form-control"
            placeholder="Пароль"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary btn-block mt-4">
          Войти
        </button>
        <div className="link">
          Нет аккаунта?<a href="#">Зарегистрируйся</a>
        </div>
      </form>
    </div>
  );
};

export default Login;
