/*****************************************************
 * MessageNet Connections Mobile v3
 * App entrypoint
 *
 * TODO: Migrate this to class components if this PoC is chosen!
 *       Also re-work .js and .jsx file extensions as needed.
 *
 * MessageNet Systems, Inc.
 * Copyright (c) 1991-2022 MessageNet Systems, Inc.
 *
 * In exclusive license to Chris Rider to distribute
 * for non-commercial purposes and work demonstration.
 *****************************************************/
import "../styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import * as Strings from "../utilities/Strings.js";
import { AppHeader, AppBody, AppFooter } from "./AppMainSections";
import { menuMainApp, DomAttribs } from "../values.js";

// This is our main App container-component
function App(props) {
  // Setup state hooks
  const [authToken, setAuthToken] = useState(props.authToken || null);
  const [mockDataAll, setMockDataAll] = useState(null); //FAKE FOR PORTFOLIO
  //const [loading, setLoading] = useState(true);
  //const [error, setError] = useState(null);

  // Define some readability enhancements
  // DEV-NOTE: later see about passing forward as handlers, and allowing calls/events back (DRY)
  const isAuthenticated = () => Boolean(authToken); //DEV-NOTE: make more robust if developed, obviously
  const unAuthenticate = () => setAuthToken(null);

  // Process user-auth independently of rendering the page
  // MODIFIED/REDACTED FOR PORTFOLIO!
  /*
  useEffect(() => {
    setIsAuthenticated(false);
    setAuthToken("faketoken");
  }, []);
  */

  // Get user's account data from the API server
  //  NOTE: MODIFIED/REDACTED FOR PORTFOLIO! (bringing in all mock data)
  // Setup API endpoint for user/auth
  const apiUri = "http://localhost:3001/db"; //REDACTED: Would pass auth token for user!
  useEffect(() => {
    //if (isAuthenticated()) {
      fetch(apiUri)
        .then((response) => {
          if (response.status === 200) {
            return response.json();
          }
          throw response;
        })
        .then((messageData) => {
          setMockDataAll(messageData);
        })
        .catch((error) => {
          console.error("Error fetching message data", error);
          //setError(error);
        })
        .finally(() => {
          //setLoading(false);
        });
    //} else {
    //  setMockDataAll(null);
    //  setLoading(false);
    //}
  }, []);

  // Get html-element attribute data
  const domAttribs = DomAttribs.getApp();

  // TEMPORARY: Render loading or error information depending on API fetch
  //if (loading) return "Loading..."; //TODO: Make component for this
  //if (error) return "Error loading data!"; //TODO: Make component for this

  // Render
  return (
    <div
      id={domAttribs.container.id}
      data-testid={domAttribs.container.dataTestId}
    >

      <AppHeader
        authToken={authToken}
        appTitle={Strings.getAppTitle()}
        mainMenuInstance={menuMainApp}
      />

      {/* The route (passed in from index.js) is what AppBody uses to determine what to render */}
      <AppBody
        authToken={authToken}
        route={props.route}
        mockDataAll={mockDataAll}
      />

      <AppFooter 
        copyright={Strings.getCopyrightLine()} />

    </div>
  );
}

export default App;
