/*****************************************************
 * MessageNet Connections Mobile v3
 *
 * DEV-NOTE: For rapid prototype / PoC, I'm just making
 * these static mostly... migrate to proper ways later.
 *
 * MessageNet Systems, Inc.
 * Copyright (c) 1991-2022 MessageNet Systems, Inc.
 *
 * In exclusive license to Chris Rider to distribute
 * for non-commercial purposes and work demonstration.
 *****************************************************/

/** Class containing data utility methods */
export default class DataUtils {
  //constructor() {
  //  (no need to instantiate this yet)
  //}

  /** A better version of native typeof
   * TODO: jsdoc
   */
  static typeofBetter(data) {
    return {}.toString
      .call(data)
      .match(/\s([a-zA-Z]+)/)[1]
      .toLowerCase();
  }

  /** Compare data types to see if they match
   * @param {*} data The data you want to test (can be any type).
   * @param {*} desired The desired data type to match (can be any type).
   * @returns {boolean} Whether the data is of the desired data type.
   */
  static typesMatch(data, desired) {
    return DataUtils.typeofBetter(data) === DataUtils.typeofBetter(desired);
  }

  /** Shallowly copy an object
   * WARNING: Any deep properties of original will still pass to the copy!
   * @param {object} objToCopy Object to shallowly copy.
   * @returns {object} Shallow-copy of the provided object.
   */
  static copyShallow_object(obj) {
    //if (typeof obj !== typeof {}) {
    if (this.typesMatch(obj, [])) {
      console.error(
        `ERROR: Parameter must be of type '${typeof {}}'. Not copied!`
      );
      return obj;
    }

    return { ...obj };
  }

  /** Deeply copy an object of JSON content
   * @param {object} obj Object of JSON content to deeply copy.
   * @returns {object} Deep-copy of the provided object.
   */
  static copyDeep_objectOfJSON(obj) {
    return JSON.parse(JSON.stringify(obj));
  }

  /** Parse favorite-message categories
   * TODO: jsdoc
   */
  static parseFavCatsForUser(data, userId) {}


  /********************************************/
  /** TEMPORARY STUFF FOR PROOF OF CONCEPT... */

  // Parse user-class name for a given class-id
  // Ex--> "userClasses": [ {"id": 1, "label": "Admin"}, ... ]
  static parseUserClassNameById(objDB, classId) {
    if (!objDB || !classId) return "";
    const userClasses = objDB.userClasses;
    const arrMatches = userClasses.filter((data) => {return data.id === classId;});
    return arrMatches[0].label;
  }

  // Parse user-record for a given username
  // Ex--> "users": [ {"id": 1, "userClassId": 1, "username": "sysadmin", ...}, ... ]
  static parseUserRecordByUsername(objDB, username) {
    if (!objDB || !username) return {};
    const users = objDB.users;
    const arrMatches = users.filter((data) => {return data.username === username;});
    return arrMatches[0];
  }

  // Parse auth-token for a given user-id
  // Ex--> "authTokens": [ {"id": 1, "userId": 1, "token": "ab12_userId_1"}, ... ]
  static parseAuthTokenByUserId(objDB, userId) {
    if (!objDB || !userId) return "";
    const authTokens = objDB.authTokens;
    const arrMatches = authTokens.filter((data) => {return data.userId === userId;});
    return arrMatches[0].label;
  }

  // Parse auth-token for a given username
  // Ex--> "authTokens": [ {"id": 1, "userId": 1, "token": "ab12_userId_1"}, ... ]
  static parseAuthTokenByUsername(objDB, username) {
    if (!objDB || !username) return "";
    const userId = DataUtils.parseUserRecordByUsername(objDB, username).id;
    const authTokens = objDB.authTokens;
    const arrMatches = authTokens.filter((data) => {return data.userId === userId;});
    return arrMatches[0];
  }
}
