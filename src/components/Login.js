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
import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import * as Strings from "../utilities/Strings.js";
import { menuLoggedOut, DomAttribs } from "../values.js";
import DataUtils from "../utilities/DataUtils";

function Login(props) {
  // Setup hooks
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  /***************************************************/
  // DEV-NOTE: THIS GETS REMOVED FOR PRODUCTION!
  // Get users account data from the API server to show on page for demonstration
  const [demoData, setDemoData] = useState({});
  const [demoUserData, setUserDemoData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/data")
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
        throw response;
      })
      .then((objJsonData) => {
        setDemoData(objJsonData);
        setUserDemoData(objJsonData.users);
      })
      .catch((error) => {
        console.error(error);
        const jsonError = {
          status: "Error getting mock API data!",
          details: error,
        };
        setDemoData(jsonError);
      })
      .finally(() => {
        //setLoading(false);
      });
  }, []);
  /***************************************************/

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
            autoFocus
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

      {/* THE FOLLOWING GETS REMOVED FOR PRODUCTION */}
      <hr />
      <div>Available Demonstration Users and Logins:</div>
      <style>
        {
          "table {border:1px solid black;} td,th {border:1px solid black; padding:2px 10px;}"
        }
      </style>
      <table border-style="solid">
        <tr>
          <th></th>
          <th>Name</th>
          <th>Class</th>
          <th>Username</th>
          <th>Password</th>
        </tr>
        {demoUserData.map((userObj) => (
          <tr>
            <td style={{ fontWeight: "bold" }}>User #{userObj.id}</td>
            <td>
              {userObj.first_name} {userObj.last_name}
            </td>
            <td>
              {DataUtils.getUserClassNameById(demoData, userObj.userClassId)}
            </td>
            <td>{userObj.username}</td>
            <td>{userObj.password}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default Login;
