import React, { useState } from "react";
import "./signup.css";
import { Link } from "react-router-dom";

const Login = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const switchTab = (index) => {
    setActiveTab(index);
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="main">
      <div className="left-panel">
        <img
          src="/public/web/img.png"
          alt="Modern building with glass facade"
        />
        <div className="logo">
          <img src="/web/image 4.png" alt="Logo" />
        </div>
        <div className="overlay-text">
          <h1>Lorem ipsum</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac
            lectus nec enim tempor suscipit.
          </p>
        </div>
      </div>
      <div className="right-panel">
        <div className="signup-container">
          <h2>Login to your account</h2>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac
            lectus nec enim tempor suscipit.
          </p>
          <div className="user-type">
            <h3>Select user type</h3>
            <div className="tabs">
              <button
                className={`tab-btn ${activeTab === 0 ? "active" : ""}`}
                onClick={() => switchTab(0)}
              >
                Home owner
              </button>
              <button
                className={`tab-btn ${activeTab === 1 ? "active" : ""}`}
                onClick={() => switchTab(1)}
              >
                Realtor
              </button>
              <button
                className={`tab-btn ${activeTab === 2 ? "active" : ""}`}
                onClick={() => switchTab(2)}
              >
                Lenders
              </button>
              <button
                className={`tab-btn ${activeTab === 3 ? "active" : ""}`}
                onClick={() => switchTab(3)}
              >
                Admin
              </button>
            </div>
          </div>
          <div className="form-container">
            <h3>Enter details</h3>
            <form id="signup-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email ID</label>
                  <input
                    type="email"
                    id="email"
                    className="form-control"
                    placeholder="Enter Email ID"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <div className="password-field">
                    <input
                      type={passwordVisible ? "text" : "password"}
                      id="password"
                      className="form-control"
                      placeholder="Create a password"
                    />
                    <span
                      className="password-toggle"
                      onClick={togglePasswordVisibility}
                    >
                      <svg
                        width={18}
                        height={18}
                        fill="#999"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 4.4C3.439 4.4 0 9.232 0 10c0 .766 3.439 5.6 10 5.6 6.56 0 10-4.834 10-5.6 0-.768-3.44-5.6-10-5.6zm0 9.907c-2.455 0-4.445-1.928-4.445-4.307S7.545 5.691 10 5.691s4.444 1.93 4.444 4.309-1.989 4.307-4.444 4.307zM10 7c-1.655 0-3 1.345-3 3s1.345 3 3 3 3-1.345 3-3-1.345-3-3-3z" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>

              <button type="submit" className="signup-btn">
                Sign Up
              </button>
              <div className="login-link">
                Don’t have an account? <Link to="/signup">Sign Up</Link>
              </div>
              <div className="divider">Or login with</div>
              <div className="social-login">
                <button type="button" className="social-btn">
                  <span className="social-icon">
                    <svg width={20} height={20} viewBox="0 0 24 24">
                      <path
                        fill="#4285F4"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="#34A853"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      />
                      <path
                        fill="#EA4335"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      />
                    </svg>
                  </span>
                  Google
                </button>
                <button type="button" className="social-btn">
                  <span className="social-icon">
                    <svg width={20} height={20} viewBox="0 0 24 24">
                      <path
                        fill="#000"
                        d="M16.53 12.15c-.008-2.029 1.652-3.013 1.727-3.057-1.013-1.473-2.593-1.676-3.16-1.689-1.32-.077-2.608.79-3.295.79-.691 0-1.731-.775-2.853-.752-1.44.02-2.786.867-3.53 2.164-1.524 2.639-.39 6.51 1.072 8.639.731 1.05 1.591 2.205 2.72 2.164 1.1-.044 1.512-.7 2.851-.7 1.33 0 1.717.7 2.876.673 1.192-.02 1.943-1.067 2.664-2.127.837-1.183 1.174-2.347 1.188-2.406-.025-.01-2.26-.854-2.26-3.397v-.302z"
                      />
                      <path
                        fill="#000"
                        d="M14.646 7.423c.579-.732 1.003-1.742.891-2.764-.904.049-1.975.632-2.607 1.354-.573.675-1.088 1.77-.951 2.797 1.006.072 2.033-.491 2.667-1.387z"
                      />
                    </svg>
                  </span>
                  Apple
                </button>
                <button type="button" className="social-btn">
                  <span className="social-icon">
                    <svg width={20} height={20} viewBox="0 0 24 24">
                      <path
                        fill="#1877F2"
                        d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                      />
                    </svg>
                  </span>
                  Facebook
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
