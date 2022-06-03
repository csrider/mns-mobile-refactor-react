/*****************************************************
 * MessageNet Connections Mobile v3
 * Define all the values and constants.
 *  DEV-NOTE: Update this to a proper class for production!
 *  DEV-NOTE: Also refactor monolithic file to discrete directory!
 *
 * MessageNet Systems, Inc.
 * Copyright (c) 1991-2022 MessageNet Systems, Inc.
 *
 * In exclusive license to Chris Rider to distribute
 * for non-commercial purposes and work demonstration.
 *****************************************************/
import Menu, { GetMenuFlags } from "./classes.js/Menu.js";

/*****************************************************
 * Network, Domain, and Host Information
 */
export const Net = {
  hostWeb: "www",
  hostCloud: "mnet001hosted1",
  hostDemo: "demobox",
  domain: "MessageNetSystems",
  tld: "com",
};

/*****************************************************
 * Company Information
 */
export const Company = {
  name: {
    legal: "MessageNet Systems, Inc.",
    long: "MessageNet Systems",
    short: "MessageNet",
    abbrev: "MNS",
  },
  address: {
    street1: "1905 S. New Market St.",
    street2: "Suite 269",
    city: "Carmel",
    state: "IN",
    postal: "46032",
  },
  phone: {
    mainArea: "317",
    mainPrefix: "566",
    mainNumber: "1677",
    supportExt: "216",
    faxArea: "317",
    faxPrefix: "663",
    faxNumber: "0808",
  },
  email: {
    admin: `Admin@${Net.domainReadable}`,
    info: `Info@${Net.domainReadable}`,
    sales: `Sales@${Net.domainReadable}`,
    support: `Support@${Net.domainReadable}`,
    training: `Training@${Net.domainReadable}`,
  },
  web: {
    home: `http://${Net.hostWeb}.${Net.domain}.${Net.tld}`,
    pagePaths: {
      contact: "/contact-us",
      support: "/customer-support-for-communication-systems",
    },
  },
};

/*****************************************************
 * Product Information
 */
export const Product = {
  connections: {
    name: "Connections",
  },
  mobile: {
    name: "Mobile",
  },
};

/*****************************************************
 * DOM Attributes
 *  DEV-NOTE: This is prime candidate to refactor to a class!
 * This object provides functions to return only the
 *  discrete component-relevant data you need. Get the
 *  data like follows...
 * For example (raw attributes data):
 *  import { DomAttribs } from [path to this file];
 *  const domAttribs = DomAttribs.getAppHeader();
 *  <div id={domAttribs.container.id}>...</div>
 *  <img src={domAttribs.logo.src} />
 */
export const DomAttribs = {
  getLogin: function() {
    return {
      container: {
        id: "login-container",
        dataTestId: "login-container",
      },
      form: {
        id: "login-form",
        dataTestId: "login-form",
      },
      userLabel: {
        id: "login-user-label",
        dataTestId: "login-user-label",
        classes: "login-label",
      },
      userField: {
        id: "login-user-field",
        dataTestId: "login-user-field",
        classes: "login-field",
      },
      passLabel: {
        id: "login-pass-label",
        dataTestId: "login-pass-label",
        classes: "login-label",
      },
      passField: {
        id: "login-pass-field",
        dataTestId: "login-pass-field",
        classes: "login-field",
      },
      buttonContainer: {
        id: "login-button-container",
        dataTestId: "login-button-container",
        classes: "button-container",
      },
      loginButton: {
        id: "login-button",
        dataTestId: "login-button",
      },
    };
  },
  getApp: function() {
    return {
      container: {
        id: "app-container",
        dataTestId: "app-container",
      },
    };
  },
  getAppHeader: function() {
    return {
      container: {
        id: "app-header-container",
        dataTestId: "app-header-container",
      },
      logo: {
        id: "app-header-logo",
        dataTestId: "app-header-logo",
        classes: "app-header-item",
        src: "../../images/branding/logo_icon_trans_200x200.png",
        alt: "MessageNet logo",
      },
      heading: {
        id: "app-header-title",
        dataTestId: "app-header-title",
        classes: "app-header-item",
      },
      subheading: {
        id: "app-header-subtitle",
        dataTestId: "app-header-subtitle",
        classes: "app-header-item",
      },
    };
  },
  getAppBody: function() {
    return {
      container: {
        id: "app-body-container",
        dataTestId: "app-body-container",
      },
    };
  },
  getAppFooter: function() {
    return {
      container: {
        id: "app-footer-container",
        dataTestId: "app-footer-container",
      },
      copyright: {
        id: "app-footer-copyright",
        dataTestId: "app-footer-copyright",
        classes: "copyright",
      },
    };
  },
};

/*****************************************************
 * Menu System
 */
const MENU_FLAGS = GetMenuFlags();

// Create a logged-out menu instance and populate it with menu items
const menuLoggedOut = new Menu();
menuLoggedOut.appendMenuItemObject(
  menuLoggedOut.createMenuItemObject(
    MENU_FLAGS.TYPE_TEXTONLY,
    "/",
    "Home",
    MENU_FLAGS.NO_ICON,
    "app-menu-item-home",
    MENU_FLAGS.NO_DOMCLASS
  )
);
menuLoggedOut.appendMenuItemObject(
  menuLoggedOut.createMenuItemObject(
    MENU_FLAGS.TYPE_TEXTONLY,
    "/about",
    "About",
    MENU_FLAGS.NO_ICON,
    "app-menu-item-about",
    MENU_FLAGS.NO_DOMCLASS
  )
);

// Create a main menu instance and populate it with menu items
const menuMainApp = new Menu();
menuMainApp.appendMenuItemObject(
  menuMainApp.createMenuItemObject(
    MENU_FLAGS.TYPE_TEXTONLY,
    "/",
    "Home",
    MENU_FLAGS.NO_ICON,
    "app-menu-item-home",
    MENU_FLAGS.NO_DOMCLASS
  )
);
menuMainApp.appendMenuItemObject(
  menuMainApp.createMenuItemObject(
    MENU_FLAGS.TYPE_TEXTONLY,
    "/about",
    "About",
    MENU_FLAGS.NO_ICON,
    "app-menu-item-about",
    MENU_FLAGS.NO_DOMCLASS
  )
);
menuMainApp.appendMenuItemObject(
  menuMainApp.createMenuItemObject(MENU_FLAGS.TYPE_DIVIDER)
);
menuMainApp.appendMenuItemObject(
  menuMainApp.createMenuItemObject(
    MENU_FLAGS.TYPE_TEXTONLY,
    "/login",
    "Logout",
    MENU_FLAGS.NO_ICON,
    "app-menu-item-logout",
    MENU_FLAGS.NO_DOMCLASS
  )
);

export { menuLoggedOut, menuMainApp };
