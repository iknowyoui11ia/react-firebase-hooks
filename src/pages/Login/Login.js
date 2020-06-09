import React from "react";
import "./Login.scss";

export const Login = () => {
  return (
    <form className="form">
      <h1>Вход </h1>
      <div className="form-group">
        <input
          type="text"
          name="username"
          className="form-control"
          placeholder="Enter your login"
        />
        <input
          type="password"
          name="password"
          className="form-control"
          placeholder="Enter your password"
        />
        <input
          type="submit"
          name="submit"
          className="form-control"
          value="Войти"
        />
      </div>
      <a href=" " className="form-forget">
        Забыли пароль
      </a>
    </form>
  );
};
