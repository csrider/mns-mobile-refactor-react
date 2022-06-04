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
//import axios from "axios";
import { DomAttribs } from "../values.js";
import DataUtils from "../utilities/DataUtils";
import { useNavigate, useLocation } from "react-router-dom";

function Login(props) {
  // Setup hooks
  const [fldUsername, setUsername] = useState("");
  const [fldPassword, setPassword] = useState("");
  const [authToken, setAuthToken] = useState(null);
  const navigate = useNavigate();
  const {pathname, search, hash} = useLocation();

  /***************************************************/
  // DEV-NOTE: THIS GETS REMOVED FOR PRODUCTION!

  // Retrieve ALL data from the mock API and save to state
  // DEV-NOTE: Native fetch for now, but maybe use axios?
  const [demoDataDB, setDemoDataDB] = useState({users:[]});
  const [demoDataUser, setDemoDataUser] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/db")
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
        throw response;
      })
      .then((objJsonData) => {
        setDemoDataDB(objJsonData);
      })
      .catch((error) => {
        console.error(error);
        const jsonError = {
          status: "Error getting mock API data!",
          details: error,
        };
        setDemoDataDB(jsonError);
      })
      .finally(() => {
        //setLoading(false);
      });
  }, []); //empty dependencies array, so only run once

  // Handle mock-api/demo login form submission
  useEffect(() => {
    // Check for valid auth-token (and also only execute this hook if it's been saved)
    if (authToken !== null) {
      // Allow user to proceed to main screen (pass token via props)
      navigate('/');
    }
  }); //blank dependencies array for now, may specify state later to trigger re-subscription of this hook?
  /***************************************************/

  // Get html-element attribute data
  const domAttribsLogin = DomAttribs.getLogin();

  // Form handling: Input validation
  function handleFormValidate() {
    return fldUsername.length > 0 && fldPassword.length > 0;
  }

  // Form handling: Submit
  function handleFormSubmit(event) {
    event.preventDefault(); //ensure page doesn't natively refresh

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
            const res = await axios.get(`http://localhost:3001/user?byUsername=`);
            if (res.data[0] && res.data[0].username == username) {
              setUserRecord(DataUtils.copyDeep_objectOfJSON(res.data[0]));
            }
            */

    // For our purpose here, without a real API, we just authenticate statically
    // TODO: since we await above, reset a to-be-developed "loading" state to normal HERE

    /**********************************************************/
    /* FOR DEMO, JUST MATCH LOGIN WITH DATA ALREADY LOCALIZED */
    // Parse this user's record from their username
    const objUserRecord = DataUtils.parseUserRecordByUsername(demoDataDB, fldUsername);
    setDemoDataUser(objUserRecord);
    // Parse the auth-token from local data and save to state
    // That save (and resulting render) will trigger useEffect hook that will...
    //  useEffect: Check for valid auth-token, and allow user to proceed to main screen (pass token via props)
    const locAuthToken = DataUtils.parseAuthTokenByUserId(demoDataDB, objUserRecord.id);
    if (locAuthToken !== null) setAuthToken(locAuthToken);
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
          <Form.Group size="lg" controlId="fldUsername">
            <Form.Label
              data-testid={domAttribsLogin.userLabel.dataTestId}
              className={domAttribsLogin.userLabel.classes}
            >
              Username
            </Form.Label>
            <Form.Control
              autoFocus
              data-testid={domAttribsLogin.userField.dataTestId}
              className={domAttribsLogin.userField.classes}
              type="text"
              value={fldUsername}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Group>

          <Form.Group size="lg" controlId="fldPassword">
            <Form.Label
              data-testid={domAttribsLogin.passLabel.dataTestId}
              className={domAttribsLogin.passLabel.classes}
            >
              Password
            </Form.Label>
            <Form.Control
              data-testid={domAttribsLogin.passField.dataTestId}
              className={domAttribsLogin.passField.classes}
              type="password"
              value={fldPassword}
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
        <tbody>
          {demoDataDB.users.map((userObj) => (
            <tr key={userObj.id}>
              <td style={{ fontWeight: "bold" }}>User #{userObj.id}</td>
              <td>
                {userObj.first_name} {userObj.last_name}
              </td>
              <td>
                {DataUtils.parseUserClassNameById(
                  demoDataDB,
                  userObj.userClassId
                )}
              </td>
              <td>{userObj.username}</td>
              <td>{userObj.password}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Login;
