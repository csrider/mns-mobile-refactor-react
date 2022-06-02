/*****************************************************
 * MessageNet Connections Mobile v3
 * Application's important major components
 * 
 * TODO: Migrate this to class components if this PoC is chosen!
 *       Also, this should be broken up / organize into component files!
 *
 * MessageNet Systems, Inc.
 * Copyright (c) 1991-2022 MessageNet Systems, Inc.
 *
 * In exclusive license to Chris Rider to distribute
 * for non-commercial purposes and work demonstration.
 *****************************************************/
import React, { useState, useEffect } from "react";
import "../styles/App.css";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { GetMenuFlags } from "../classes.js/Menu.js";
import { DomAttribs } from "../values.js";
import Login from "../components/Login";
//import ListFavorites from "../components/messages/ListFavorites";

/** App Main Header Component */
function AppHeader(props) {
  // Extract our props
  const isAuthenticated = props.isAuthenticated;
  const appTitle = props.appTitle;
  const appSubtitle = props.appSubtitle;
  const menuInstance = props.mainMenuInstance;

  // Get element attribute data
  const domAttribs = DomAttribs.getAppHeader();

  // Get array of menu-item objects from the main menu instance
  // (if no menu items are defined, array will return as empty)
  const arrMenuItems = menuInstance ? menuInstance.getMenuItems() : [];

  return (
    <header
      id={domAttribs.container.id}
      data-testid={domAttribs.container.dataTestId}
    >
      <img
        id={domAttribs.logo.id}
        data-testid={domAttribs.logo.dataTestId}
        className={domAttribs.logo.classes}
        src={domAttribs.logo.src}
        alt={domAttribs.logo.alt}
      />

      <h1 id={domAttribs.heading.id} className={domAttribs.heading.classes}>
        {appTitle}
      </h1>

      <h2
        id={domAttribs.subheading.id}
        className={domAttribs.subheading.classes}
      >
        {appSubtitle}
      </h2>

      <DropdownButton
        id="app-header-menu-button"
        title="Menu"
        disabled={arrMenuItems ? arrMenuItems.length === 0 : true}
      >
        {arrMenuItems.map((data, index) => {
          const MENU_FLAGS = GetMenuFlags();
          const key = index;
          const type = data.itemType;
          const target = data.target;
          const content = data.content; //contains: .text and .icon
          //const domAttribs = data.domAttribs; //contains: .id and .class

          if (type === MENU_FLAGS.TYPE_ICONONLY) {
            return (
              <Dropdown.Item key={key} href={target}>
                {content.icon}
              </Dropdown.Item>
            );
          } else if (type === MENU_FLAGS.TYPE_TEXTONLY) {
            return (
              <Dropdown.Item key={key} href={target}>
                {content.text}
              </Dropdown.Item>
            );
          } else if (type === MENU_FLAGS.TYPE_ICONTEXT) {
            return (
              <Dropdown.Item key={key} href={target}>
                {content.icon} {content.text}
              </Dropdown.Item>
            );
          } else if (type === MENU_FLAGS.TYPE_DIVIDER) {
            return <Dropdown.Divider key={key} />;
          }

          return null;
        })}
      </DropdownButton>
    </header>
  );
}

/** App Main Header Component */
function AppBody(props) {
  // Extract our props
  const route = props.route;
  const isAuthenticated = props.isAuthenticated;
  const data = props.data;

  // Setup hooks
  const [mockDataAll, setMockDataAll] = useState(null); //FAKE FOR PORTFOLIO
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Get user's message data from the API server
  // MODIFIED/REDACTED FOR PORTFOLIO!
  const apiUri = "http://localhost:3001/data"; //NOTE: Would pass auth token!
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
          setError(error);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      setMockDataAll({});
      setLoading(false);
    }
  }, []);

  // Get element attribute data
  const domAttribs = DomAttribs.getAppBody();

  // TEMPORARY: Render loading or error information depending on API fetch
  //if (loading) return "Loading..."; //TODO: Make component for this
  //if (error) return "Error loading data!"; //TODO: Make component for this

  // Render
  if (isAuthenticated) {
    return (
      <main
        id={domAttribs.container.id}
        data-testid={domAttribs.container.dataTestId}
      >
        <code>{JSON.stringify(data)}</code>
      </main>
    );
  } 
  if (route === "login") {
    return (
      <main
        id={domAttribs.container.id}
        data-testid={domAttribs.container.dataTestId}
      >
        <Login />
      </main>
    );
  }
}

/** App Main Header Component */
function AppFooter(props) {
  // Extract our props
  const copyright = props.copyright;

  // Get element attribute data
  const domAttribs = DomAttribs.getAppFooter();

  return (
    <footer
      id={domAttribs.container.id}
      data-testid={domAttribs.container.dataTestId}
    >
      <div
        id={domAttribs.copyright.id}
        className={domAttribs.copyright.classes}
      >
        {copyright}
      </div>
    </footer>
  );
}

export { AppHeader, AppBody, AppFooter };
