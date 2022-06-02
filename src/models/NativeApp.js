/*****************************************************
 * MessageNet Connections Mobile v3
 * Native mobile app model
 * 
 * NOTE: May use this for authn/authz and auto-login in refactor?
 * 
 * TODO: Migrate stuff from previous versions if this PoC is chosen!
 *       Be sure to use correct import/export for React?
 *
 * MessageNet Systems, Inc.
 * Copyright (c) 1991-2022 MessageNet Systems, Inc.
 *
 * In exclusive license to Chris Rider to distribute
 * for non-commercial purposes and work demonstration.
 *****************************************************/
import Client from './Client';

//TODO: jsdoc this
export default class NativeApp extends Client {
  // Enumerate some constants and flags in a symantically effective way
  //TODO
  static UUID_UNKNOWN = new NativeApp("unknown");

  //TODO: jsdoc this
  constructor() {
    this._appUUID = NativeApp.UUID_UNKNOWN;
    this._authToken = undefined;
  }

  /* Setters */
  //TODO: depending on implementation chosen, may use ES6 setters?
  //TODO: jsdoc these!
  setAuthToken(authToken) {
    this._authToken = authToken;
  }

  /* Getters */
  //TODO: depending on implementation chosen, may use ES6 getters?
  //TODO: jsdoc these!
  getAuthToken() {
    return this._authToken;
  } 

  /* Utilities */
  //TODO: 
}
