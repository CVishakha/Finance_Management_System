
import React, { useState } from "react";
import "../index.css";
import Logo from "../assets/projectlogo.jpg";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import Dashboard from "./Dashboard";


const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return isLoggedIn ? (
    <Dashboard onLogout={() => setIsLoggedIn(false)} />
  ) : (
    <Login onLogin={() => setIsLoggedIn(true)} />
  );
};

const Login = ({ onLogin }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isRegister, setIsRegister] = useState(false);
  const [forgotPassword, setForgotPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isRegister && formData.password !== formData.confirmPassword) {
      alert("❌ Passwords do not match!");
      return;
    }
    alert(
      isRegister
        ? `🎉 Registered Successfully!\nName: ${formData.name}\nEmail: ${formData.email}`
        : `✅ Logged In Successfully!\nEmail: ${formData.email}`
    );
    onLogin();
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    alert(`🔒 Password reset link sent to: ${formData.email}`);
    setForgotPassword(false);
  };

  return (
    <div className="login-main">
      <div className="login-container">
        <div className="login-logo">
          <img src={Logo} alt="Logo" />
        </div>
        <h1>{isRegister ? "REGISTRATION" : forgotPassword ? "RESET PASSWORD" : "LOGIN"}</h1>

        {forgotPassword ? (
          <form onSubmit={handleForgotPassword} className="inline-form">
            <div className="input-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" placeholder="Enter Email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="login-center-buttons">
              <button type="submit" className="login-btn">Reset Password</button>
              <button type="button" className="back-btn" onClick={() => setForgotPassword(false)}>Back to Login</button>
            </div>
          </form>
        ) : (

          <form onSubmit={handleSubmit} className="inline-form">
            {isRegister && (
              <div className="input-group">
                <label htmlFor="name">Full Name:</label>
                <input type="text" id="name" name="name" placeholder="Enter Name" value={formData.name} onChange={handleChange} required />
              </div>
            )}
            <div className="input-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" placeholder="Enter Email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="input-group pass-input-div">
              <label htmlFor="password">Password:</label>
              <input type={showPassword ? "text" : "password"} id="password" name="password" placeholder="Enter Password" value={formData.password} onChange={handleChange} required />
              {showPassword ? <FaEyeSlash onClick={() => setShowPassword(!showPassword)} /> : <FaEye onClick={() => setShowPassword(!showPassword)} />}
            </div>
            {isRegister && (
              <div className="input-group pass-input-div">
                <label htmlFor="confirmPassword">Confirm Password:</label>
                <input type={showPassword ? "text" : "password"} id="confirmPassword" name="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} required />
              </div>
            )}
            <div className="login-center-buttons">
              <button type="submit" className="login-btn">{isRegister ? "Sign Up" : "Log In"}</button>
            </div>
          </form>
        )}

        
        {!forgotPassword && (
          <p className="login-bottom-p">
            {isRegister ? "Already have an account? " : "Don't have an account? "}
            <a href="#" onClick={() => setIsRegister(!isRegister)}>{isRegister ? "Log In" : "Sign Up"}</a>
          </p>
        )}
        {!isRegister && !forgotPassword && (
          <p className="forgot-password">
            <a href="#" onClick={() => setForgotPassword(true)}>Forgot Password?</a>
          </p>
        )}
      </div>
    </div>
  );
};
export default App;
