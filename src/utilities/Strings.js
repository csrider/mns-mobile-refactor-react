/*****************************************************
 * MessageNet Connections Mobile v3
 *
 * MessageNet Systems, Inc.
 * Copyright (c) 1991-2022 MessageNet Systems, Inc.
 *
 * In exclusive license to Chris Rider to distribute 
 * for non-commercial purposes and work demonstration.
 *****************************************************/
import * as Values from '../values.js';
import * as Temporal from './Temporal.js';

/** Assemble the title of the app in a nice presentable way.
 * @returns {string} Human-readable presentation of this app's title.
 */
export function getAppTitle() {
  const platName = Values.Product.connections.name;
  const prodName = Values.Product.mobile.name;
  return `${platName} ${prodName}`;
}

/** Get the current year as a string value.
 * @returns {string} String version of the current year.
 */
export function getCurrentYear() {
  const numCurrYear = Temporal.getCurrentYear();
  return numCurrYear.toString();
}

/** Assemble the proper legal copyright text.
 * @returns {string} Copyright text in proper form.
 */
export function getCopyrightLine() {
  const copy = "Copyright \u00A9";
  const oYear = "1991";
  const cYear = getCurrentYear();
  const compName = Values.Company.name.legal;
  return `${copy} ${oYear}-${cYear} ${compName}`;
}

/** Assemble the fully-qualified domain name for WWW/web.
 * Note: You should use toLowerCase() if you need it logically.
 * @returns {string} FQDN of the MessageNet web server.
 */
export function getWebsiteFQDN() {
  const host = Values.Net.hostWeb;
  const domain = Values.Net.domain;
  const tld = Values.Net.tld;
  return `${host}.${domain}.${tld}`;
}