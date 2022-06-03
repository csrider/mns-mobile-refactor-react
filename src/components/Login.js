/*****************************************************
 * MessageNet Connections Mobile v3
 * Component for user login
 * 
 * DEV-NOTE: Migrate this to a class-component, especially
 * if you want to use more advanced capabilities (such as
 * using setState callbacks, which hooks don't support)!
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
import axios from "axios";
import { menuLoggedOut, DomAttribs } from "../values.js";
import DataUtils from "../utilities/DataUtils";
//import NetUtils from "../utilities/NetUtils";

function Login(props) {
  // Setup hooks
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userRecord, setUserRecord] = useState({});

  /***************************************************/
  // DEV-NOTE: THIS GETS REMOVED FOR PRODUCTION!

  // Retrieve ALL data from the mock API and save to state
  const [demoData, setDemoData] = useState({});
  const [demoUserData, setUserDemoData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/db")
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
  }, []); //empty dependencies array, so only run once

  // Handle mock-api/demo login form submission

  // 
  const [authToken, setAuthToken] = useState("");
  useEffect(() => {
    // Check for valid auth-token (and also only execute this hook if it's been saved)
    if (authToken.length > 0) {
      // Allow user to proceed to main screen (pass token via props)
      console.log("PROCEED TO MAIN!");
    }
  }); //blank dependencies array for now, may specify state later to trigger re-subscription of this hook?
  /***************************************************/

  // Get html-element attribute data
  //const domAttribsApp = DomAttribs.getApp();
  const domAttribsLogin = DomAttribs.getLogin();

  // Prepare page items
  //const appSubtitle = "";

  // Form handling: Input validation
  function handleFormValidate() {
    return username.length > 0 && password.length > 0;
  }

  // Form handling: Submit
  function handleFormSubmit(event) {
    event.preventDefault(); //ensure page doesn't refresh

    // Get the username and password from state and package it up
    // DEMO NOTE: Our mock API doesn't easily handle relational data
    //  so just for this purpose, query by user ID that's in state.
    /*
    const jsonData = {
      user: username,
      pass: password,
    };
    */

    /* TEST TO SEE IF AXIOS-POST / MOCK-API WORKS --it does!
    const testToken = {
      "id": 99,
      "userId": 4,
      "token": "gh78_userId_4"
    }
    await axios.post("http://localhost:3001/", testToken);
    //await axios.post("http://localhost:3001/", jsonData);
    //axios.console.error();
    */

    /* PLAYING AROUND
    const res = await axios.get(`http://localhost:3001/user?byUsername=${username}`);
    if (res.data[0] && res.data[0].username == username) {
      setUserRecord(DataUtils.copyDeep_objectOfJSON(res.data[0]));
    }
    */

    // For our purpose here, without a real API, we just authenticate statically
    // TODO: since we await above, reset a to-be-developed "loading" state to normal HERE

    // FOR DEMO, JUST MATCH LOGIN WITH DATA ALREADY LOCALIZED
    // - Parse the auth-token from local data and save to state
    // - That save (and resulting render) will trigger useEffect hook that will...
    //    useEffect: Check for valid auth-token, and allow user to proceed to main screen (pass token via props)
    const locAuthToken = DataUtils.parseAuthTokenByUsername(demoData, username);
    if (locAuthToken.length > 0) setAuthToken(locAuthToken);
  }

  // Render
  return (
    <>
      <div id={domAttribsLogin.container.id}>
        <Form
          id={domAttribsLogin.form.id}
          data-testid={domAttribsLogin.form.dataTestId}
          onSubmit={handleFormSubmit}
        >
          <Form.Group size="lg" controlId="username">
            <Form.Label
              id={domAttribsLogin.userLabel.id}
              data-testid={domAttribsLogin.userLabel.dataTestId}
              className={domAttribsLogin.userLabel.classes}
            >
              Username
            </Form.Label>
            <Form.Control
              autoFocus
              id={domAttribsLogin.userField.id}
              data-testid={domAttribsLogin.userField.dataTestId}
              className={domAttribsLogin.userField.classes}
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Group>

          <Form.Group size="lg" controlId="password">
            <Form.Label
              id={domAttribsLogin.passLabel.id}
              data-testid={domAttribsLogin.passLabel.dataTestId}
              className={domAttribsLogin.passLabel.classes}
            >
              Password
            </Form.Label>
            <Form.Control
              id={domAttribsLogin.passField.id}
              data-testid={domAttribsLogin.passField.dataTestId}
              className={domAttribsLogin.passField.classes}
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <div
            id={domAttribsLogin.buttonContainer.id}
            data-testid={domAttribsLogin.buttonContainer.dataTestId}
            className={domAttribsLogin.buttonContainer.classes}
          >
            <Button
              id={domAttribsLogin.loginButton.id}
              data-testid={domAttribsLogin.loginButton.dataTestId}
              className={domAttribsLogin.loginButton.classes}
              block
              size="lg"
              type="submit"
              disabled={!handleFormValidate()}
            >
              Login
            </Button>
          </div>
        </Form>
      </div>

      {/* THE FOLLOWING GETS REMOVED FOR PRODUCTION */}
      <hr />
      <style>
        {
          " \
          table {border:1px solid gray; margin: 0px auto} \
          td, th {border:1px solid gray; padding:2px 10px; text-align:center;} \
          "
        }
      </style>
      <h1 style={{ fontSize: "1.1em", textAlign: "center" }}>
        DEMO: Available Users and Logins
      </h1>
      <table border-style="solid">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Class</th>
            <th>Username</th>
            <th>Password</th>
          </tr>
        </thead>
        {demoUserData.map((userObj) => (
          <tbody>
            <tr>
              <td style={{ fontWeight: "bold" }}>User #{userObj.id}</td>
              <td>
                {userObj.first_name} {userObj.last_name}
              </td>
              <td>
                {DataUtils.parseUserClassNameById(demoData, userObj.userClassId)}
              </td>
              <td>{userObj.username}</td>
              <td>{userObj.password}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </>
  );
}

export default Login;
