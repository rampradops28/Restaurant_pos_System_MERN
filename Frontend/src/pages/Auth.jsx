import React, { useState } from "react";
import Login from "../components/auth/Login.jsx";
import Signup from "../components/auth/Register.jsx";
import loginimg from '../assets/images/login.svg';
import registerimg from '../assets/images/register.svg';

const Auth = () => {
  const [isSignUpMode, setIsSignUpMode] = useState(false);

  return (
    <div className={`containers ${isSignUpMode ? "sign-up-mode" : ""}`}>
      <div className="forms-containers">
        <div className="signin-signup">
          <Login />
          <Signup />
        </div>
      </div>

      <div className="panels-containers">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here?</h3>
            <p>Join us and start your journey today!</p>
            <button
              className="btn transparent"
              onClick={() => setIsSignUpMode(true)}
            >
              Sign up
            </button>
          </div>
          <img src={loginimg} className="image" alt="login visual" />
        </div>

        <div className="panel right-panel">
          <div className="content">
            <h3>Already a member?</h3>
            <p>Welcome back! Please login with your credentials.</p>
            <button
              className="btn transparent"
              onClick={() => setIsSignUpMode(false)}
            >
              Sign in
            </button>
          </div>
          <img src={registerimg} className="image" alt="register visual" />
        </div>
      </div>
    </div>
  );
};

export default Auth;
