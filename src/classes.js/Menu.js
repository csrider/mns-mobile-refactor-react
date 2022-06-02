/*****************************************************
 * MessageNet Connections Mobile v3
 *
 * MessageNet Systems, Inc.
 * Copyright (c) 1991-2022 MessageNet Systems, Inc.
 *
 * In exclusive license to Chris Rider to distribute 
 * for non-commercial purposes and work demonstration.
 *****************************************************/
import DataUtils from '../utilities/DataUtils.js';

const FLAGS = {
  TYPE_TEXTONLY: "item_type_textOnly",
  TYPE_ICONONLY: "item_type_iconOnly",
  TYPE_ICONTEXT: "item_type_iconAndText",
  TYPE_DIVIDER: "item_type_divider",
  NO_TEXT: null,
  NO_ICON: null,
  NO_TARGET: null,
  NO_DOMID: null,
  NO_DOMCLASS: null
};
export const GetMenuFlags = () => FLAGS;

/** Class representing a specific menu */
export default class Menu {

  /** Constructor for creating a Menu instance.
   * @param {?array} arrMenuItemObjects Array of menu-item objects.
   */
  constructor(arrMenuItemObjects) {
    this._menuItems = arrMenuItemObjects || [];
  }

  /** Get and return the current array of menu items.
   * @returns {array} Current array of menu-item objects.
   */
  getMenuItems() {
    return this._menuItems;
  }

  /** Get and return the current number of menu items in this menu.
   * @returns {number} Current number of menu items, or -1 for errors.
   */
  getMenuItemCount() {
    return this._menuItems.length || -1;
  }

  /** Append the provided menu item object to this Menu instance.
   * @param {object} objMenuItem Menu-item object created with createMenuItemObject().
   * @returns {number} Number of menu item objects now in the menu.
   */
  appendMenuItemObject(objMenuItem) {
    // Input validation
    if (!objMenuItem) return this.getMenuItemCount();

    // Add the provided menu item object to the array
    // The Array.push() method already gives us back array size, so return it
    return this._menuItems.push(objMenuItem);
  }

  /** Create a menu item object with whatever data is provided.
   * @param {string} type Specify a menu item type (MenuFlags).
   * @param {?string} target The target resource of a menu-item event.
   * @param {?string} text Specify text for the menu item (required if no icon).
   * @param {?string} icon Specify icon path for the menu item.
   * @param {?string} id Specify desired DOM id attribute value override.
   * @param {?string} className Specify desired DOM class attribute value(s) to add.
   * @returns {object} Object containing assembled menu-item data, or null if fails.
   */
  createMenuItemObject(type, target, text, icon, idVal, classVal) {
    // Input validation
    if (!type) return null;
    if (type === FLAGS.TYPE_TEXTONLY && !text) return null;
    if (type === FLAGS.TYPE_ICONONLY && !icon) return null;
    if (type === FLAGS.TYPE_ICONTEXT && (!text || !icon)) return null;

    // Normalize inputs if needed
    if (!idVal || typeof idVal !== typeof "" || idVal.length === 0)
      idVal = "";
    if (!classVal || typeof classVal !== typeof "" || classVal.length === 0)
      classVal = "";

    // Initialize the data object
    const obj = {
      itemType: type,
      target: target,
      content: {
        text: text,
        icon: icon
      },
      domAttribs: {
        id: idVal,
        class: "menu-item " + classVal
      }
    };

    // Modify the data object if needed
    if (type === FLAGS.TYPE_DIVIDER) {
      obj.target = null;
      obj.content = null;
      obj.domAttribs.class += " menu-divider";
    }

    // Return a clone of the object (so it's pass-by-value, not reference)
    return DataUtils.copyDeep_objectOfJSON(obj);
  }

}