import React, { useCallback } from "react";
import { withRouter } from "react-router";
import app from "../../firebase";
import "./SignUp.scss";

const SignUp = ({ history }) => {
  const handleSignUp = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .createUserWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  return (
    <div className="signup">
      <h1>Sign up</h1>
      <form onSubmit={handleSignUp} className="form">
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
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default withRouter(SignUp);
