/*****************************************************
 * MessageNet Connections Mobile v3
 * Component for listing favorites/messages
 * 
 * TODO: For PoC, the hardcoded and static data stuff
 *       will suffice, but be sure to strip out and use
 *       all the proper query and auth stuff if/when
 *       this is the chosen framework for v3!
 * 
 * NOTE: For my portfolio, this was a major component
 *       needing to be redacted and stripped out. For
 *       an example of how it might have looked like,
 *       review the MNS website for graphics:
 *        http://www.messagenetsystems.com/home/solutions/connections-mobile-app/
 *
 * MessageNet Systems, Inc.
 * Copyright (c) 1991-2022 MessageNet Systems, Inc.
 *
 * In exclusive license to Chris Rider to distribute
 * for non-commercial purposes and work demonstration.
 *****************************************************/
import "../../styles/Messages.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
//import * as Strings from "../../utilities/Strings.js";
//import { DomAttribs } from "../../values.js";
import FavSection from "./FavSection";

function ListFavorites(props) {
  return (
    <FavSection />
  );
}

export default ListFavorites;