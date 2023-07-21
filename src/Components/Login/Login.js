import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isLoggedIn, setLoggedIn] = useState(false);

  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setEmailError("");
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setPasswordError("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Basic validation for empty fields
    if (!email) {
      setEmailError("Please enter your email.");
    } else if (!isValidEmail(email)) {
      setEmailError("Please enter a valid email address.");
    } else {
      setEmailError("");
    }

    if (!password) {
      setPasswordError("Please enter your password.");
    } else if (password.length < 6) { // Change the condition here
      setPasswordError("Password should be > 5."); // Update the error message
    } else {
      setPasswordError("");
    }

    if (email && password && isValidEmail(email) && password.length >= 6) { // Check for password length here as well
      // Simulate successful login
      setLoggedIn(true);
    }
  };

  const isValidEmail = (value) => {
    // Basic email validation using regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };

  if (isLoggedIn) {
    // Redirect to profile page upon successful login
    localStorage.setItem("email",email)
    localStorage.setItem("password",password)
     navigate("/profile");
  }

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit} noValidate>
        <p>Login</p>
        <div className={styles.group}>
          <input
            required
            className={`${styles.maininput} ${emailError ? styles.inputError : ""}`}
            type="text"
            value={email}
            onChange={handleEmailChange}
          />
          <span className={styles.highlightspan}></span>
          <label className={styles.lebalemail}>Email</label>
          {emailError && <div className={styles.error} >{emailError}</div>}
        </div>
        <div className={styles.container1}>
          <div className={styles.group}>
            <input
              required
              className={`${styles.maininput} ${passwordError ? styles.inputError : ""}`}
              type="password"
              value={password}
              onChange={handlePasswordChange}
            />
            <span className={styles.highlightspan}></span>
            <label className={styles.lebalemail}>Password</label>
            {passwordError && <div className={styles.error}>{passwordError}</div>}
          </div>
        </div>
        <button className={styles.submit} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
