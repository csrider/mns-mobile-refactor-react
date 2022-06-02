/*****************************************************
 * MessageNet Connections Mobile v3
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
   * 
   */
  static typeofBetter(data) {
    return ({}).toString.call(data).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
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

    return {...obj};
  }

  /** Deeply copy an object of JSON content
   * @param {object} obj Object of JSON content to deeply copy.
   * @returns {object} Deep-copy of the provided object.
   */
  static copyDeep_objectOfJSON(obj) {
    return JSON.parse(JSON.stringify(obj));
  }

  /** Parse favorite-message categories
   * 
   */
  static parseFavCatsForUser(data, userId) {

  }

  /** Get user-class name for a given class-id
   * NOTE: Temporary thing for now, so no validation or stuff yet!
   */
  static getUserClassNameById(objData, classId) {
    if (!objData || !classId) return "";
    const userClasses = objData.userClasses;
    const arrMatches = userClasses.filter((data) => {
      return data.id == classId;
    });
    return arrMatches[0].class_name;
  }
}