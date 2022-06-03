/*****************************************************
 * MessageNet Connections Mobile v3
 *
 * MessageNet Systems, Inc.
 * Copyright (c) 1991-2022 MessageNet Systems, Inc.
 *
 * In exclusive license to Chris Rider to distribute 
 * for non-commercial purposes and work demonstration.
 *****************************************************/
//import DataUtils from "./DataUtils";

/** Class containing data utility methods */
export default class NetUtils {
  static METHOD_GET = "GET";
  static METHOD_POST = "POST";
  static METHOD_PUT = "PUT";
  static METHOD_DELETE = "DELETE";
  static HEAD_CTYPE_TEXT = "text/plain";
  static HEAD_CTYPE_HTML = "text/html";
  static HEAD_CTYPE_JSON = "application/json";

  /** Constructor
   * 
   */
  constructor() {
    //  (no need to instantiate this yet)
  }

  /** Generate a fetch request options object (returns a deep copy)
   * 
   */
  /* DEV-NOTE: rushed this as an idea, i'm sure it's not at all working yet!
  genFetchOptions(reqMethod, reqHeaders, reqBody) {
    // Input validation
    if (DataUtils.typeofBetter(reqMethod) !== 'string')
      return false;
    if (DataUtils.typeofBetter(reqHeaders) !== 'object')
      return false;
    if (DataUtils.typeofBetter(reqBody) !== 'string')
      return false;

    // Create and return a fetch request options object
    return DataUtils.copyDeep_objectOfJSON({
      method: reqMethod,
      headers: { 'Content-Type': contentType },
      body: reqBody
    });
  }
  */

  /** Make a POST of JSON data
   * 
   */
  /* DEV-NOTE: rushed this as an idea, i'm sure it's not at all working yet!
  doAsyncPOST_JSON(strEndpoint, objJSON, fnResCallback, fnErrCallback, fnFinalCallback) {
    // Input validation
    if (DataUtils.typeofBetter(strEndpoint) !== 'string' || strEndpoint.length === 0) 
      return false;
    if (DataUtils.typeofBetter(objJSON) !== 'object') 
      return false;
    
    // Input normalization
    if (DataUtils.typeofBetter(fnResCallback) !== 'function')
      fnResCallback = function dummyRes() {console.warn("No response callback provided!");};
    if (DataUtils.typeofBetter(fnErrCallback) !== 'function') 
      fnErrCallback = function dummyErr() {console.warn("No error callback provided!");};
    if (DataUtils.typeofBetter(fnFinalCallback) !== 'function') 
      fnFinalCallback = function dummyFin() {console.info("No final callback provided!");};

    // Setup a basic POST request using fetch
    const requestOptions = genFetchOptions(
      NetUtils.METHOD_POST,
      NetUtils.HEAD_CTYPE_JSON,
      JSON.stringify(objJSON)
    );

    // Use fetch to actually make the request
    fetch(endpoint, requestOptions)
      .then(response => {
        if (response.status === 200) return response.json();
        throw response;
      })
      .then(fnResCallback)
      .catch(fnErrCallback)
      .finally(fnFinalCallback);
  }
  */
}