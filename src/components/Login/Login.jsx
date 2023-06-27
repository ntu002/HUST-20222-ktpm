
import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./Login.module.css";

function Login() {
  const [errorMessages, setErrorMessagers] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const database = [
    {
      username: "user1",
      password: "pass1",
    },
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    const userData = database.find((user) => user.username === uname.value);

    if (userData) {
      if (userData.password !== pass.value) {
        setErrorMessagers({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      setErrorMessagers({ name: "uname", message: errors.uname });
    }
  };

  const renderErrorMessage = (name) => {
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );
  };

  const renderForm = (
    <div className="form">
      <from onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username</label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>

        <div className="input-container">
          <label>Password</label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>

        <div className="button-container">
          <input type="submit" />
        </div>
      </from>
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Sign In</div>
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
      </div>
    </div>
  );
}

export default Login;
