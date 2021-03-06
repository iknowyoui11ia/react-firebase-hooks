import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import app from "../../firebase";
import { AuthContext } from "../Auth";
import "./Login.scss";

const Login = ({ history }) => {
  const handleLogin = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <div className="login">
      <h1>Log in</h1>
      <form onSubmit={handleLogin} className="form">
        <label>
          <input
            name="email"
            type="email"
            placeholder="Email"
            className="form-input"
          />
        </label>
        <label>
          <input
            name="password"
            type="password"
            placeholder="Password"
            className="form-input"
          />
        </label>
        <button type="submit" className="form-btn">
          Log in
        </button>
      </form>
    </div>
  );
};

export default withRouter(Login);
