import React, { useState } from 'react';
import Styles from "./Login.module.css";

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can perform your login logic
    console.log(`Username: ${username}, Password: ${password}`);
    // Reset the form fields
    setUsername('');
    setPassword('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div class={Styles.container}>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={handleUsernameChange}
        />
      </div>
      <div class={Styles.container}>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
