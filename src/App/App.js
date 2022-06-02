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

function App(props) {
  // Extract our props
  const route = props.route;

  // Setup hooks
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authToken, setAuthToken] = useState("");
  const [mockDataAll, setMockDataAll] = useState(null); //FAKE FOR PORTFOLIO
  //const [loading, setLoading] = useState(true);
  //const [error, setError] = useState(null);

  // Process user-auth independently of rendering the page
  // MODIFIED/REDACTED FOR PORTFOLIO!
  useEffect(() => {
    setIsAuthenticated(false);
    setAuthToken("faketoken");
  }, []);

  // Get user's account data from the API server
  // MODIFIED/REDACTED FOR PORTFOLIO!
  // Setup API endpoint for user/auth
  const apiUri = "http://localhost:3001/user";  //REDACTED: Would pass auth token for user!
  useEffect(() => {
    if (isAuthenticated) {
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
    } else {
      setMockDataAll({});
      //setLoading(false);
    }
  }, []);

  // Get html-element attribute data
  const domAttribs = DomAttribs.getApp();

  // TEMPORARY: Render loading or error information depending on API fetch
  //if (loading) return "Loading..."; //TODO: Make component for this
  //if (error) return "Error loading data!"; //TODO: Make component for this

  // Prepare page items
  const appSubtitle = "";

  // Render
  return (
    <div
      id={domAttribs.container.id}
      data-testid={domAttribs.container.dataTestId}
    >
      <AppHeader
        isAuthenticated={isAuthenticated}
        appTitle={Strings.getAppTitle()}
        appSubtitle={appSubtitle}
        mainMenuInstance={menuMainApp}
      />
      <AppBody isAuthenticated={isAuthenticated} route={route} data={mockDataAll} />
      <AppFooter copyright={Strings.getCopyrightLine()} />
    </div>
  );
}

export default App;
