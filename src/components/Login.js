/*****************************************************
 * MessageNet Connections Mobile v3
 * Component for user login
 *
 * MessageNet Systems, Inc.
 * Copyright (c) 1991-2022 MessageNet Systems, Inc.
 *
 * In exclusive license to Chris Rider to distribute
 * for non-commercial purposes and work demonstration.
 *****************************************************/
import "../styles/App.css";
import "../styles/Login.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import * as Strings from "../utilities/Strings.js";
import { menuLoggedOut, DomAttribs } from "../values.js";

function Login(props) {
  // Setup hooks
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Get html-element attribute data
  //const domAttribsApp = DomAttribs.getApp();
  const domAttribsLogin = DomAttribs.getLogin();

  // Prepare page items
  const appSubtitle = "";

  // Form handling
  function handleFormValidate() {
    return username.length > 0 && password.length > 0;
  }
  function handleFormSubmit(event) {
    event.preventDefault();
  }

  // Render
  return (
    <div>
      <Form
        id={domAttribsLogin.form.id}
        data-testid={domAttribsLogin.form.dataTestId}
        onSubmit={handleFormSubmit}
      >
        <Form.Group size="lg" controlId="username">
          <Form.Label
            id={domAttribsLogin.userLabel.id}
            className={domAttribsLogin.userLabel.classes}
          >
            Username
          </Form.Label>
          <Form.Control
            id={domAttribsLogin.userField.id}
            className={domAttribsLogin.userField.classes}
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>

        <Form.Group size="lg" controlId="password">
          <Form.Label
            id={domAttribsLogin.passLabel.id}
            className={domAttribsLogin.passLabel.classes}
          >
            Password
          </Form.Label>
          <Form.Control
            id={domAttribsLogin.passField.id}
            className={domAttribsLogin.passField.classes}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button block size="lg" type="submit" disabled={!handleFormValidate()}>
          Login
        </Button>
      </Form>
    </div>
  );
}

export default Login;
