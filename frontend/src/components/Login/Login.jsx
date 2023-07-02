import React, { useState } from "react";
import Styles from "./Login.module.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

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
    setUsername("");
    setPassword("");
  };

  return (
    <div class={Styles.boundary}>
      <form onSubmit={handleSubmit}>
        <h1>Đăng nhập</h1>
        <label>Tên đăng nhập</label>
        <input type="text" value={username} onChange={handleUsernameChange} />
        <label>Mật khẩu</label>
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
        <button type="submit">Đăng nhập</button>
      </form>
    </div>
  );
};

export default Login;
