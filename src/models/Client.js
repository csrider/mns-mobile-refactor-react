/*****************************************************
 * MessageNet Connections Mobile v3
 * Client (browser, app, etc.) model
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

//TODO: jsdoc this
export default class Client {
  // Enumerate some constants and flags in a symantically effective way
  static CLIENT_UNKNOWN = new Client("unknown");
  static CLIENT_OLD_BROWSER = new Client("old_browser");
  static CLIENT_MODERN_BROWSER = new Client("modern_browser");
  static CLIENT_ANDROID_NATIVE_APP = new Client("android_native_app");
  static CLIENT_ANDROID_NATIVE_REACT = new Client("android_native_react");
  static CLIENT_IOS_NATIVE_APP = new Client("ios_native_app");
  static CLIENT_IOS_NATIVE_REACT = new Client("ios_native_react");

  //TODO: jsdoc this
  constructor() {
    this._clientType = Client.CLIENT_UNKNOWN;
    this._userAgent = undefined;
  }

  /* Setters */
  //TODO: depending on implementation chosen, may use ES6 setters?
  //TODO: jsdoc these!
  setClientType(clientType) {
    this._clientType = clientType;
  }
  setUserAgent(strUserAgent) {
    this._userAgent = strUserAgent;
  }

  /* Getters */
  //TODO: depending on implementation chosen, may use ES6 getters?
  //TODO: jsdoc these!
  getClientType() {
    return this._clientType;
  }
  getUserAgent() {
    return this._userAgent;
  }
  
}
