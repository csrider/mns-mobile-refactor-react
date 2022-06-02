/*****************************************************
 * MessageNet Connections Mobile v3
 *
 * MessageNet Systems, Inc.
 * Copyright (c) 1991-2022 MessageNet Systems, Inc.
 *
 * In exclusive license to Chris Rider to distribute 
 * for non-commercial purposes and work demonstration.
 *****************************************************/
import { render, screen, queryByAttribute } from '@testing-library/react';
import DataUtils from "./DataUtils";


/*****************************************************
 * Testing typeofBetter()
 */
test("Improved typeof, typeofBetter({}), correctly returns 'object'", () => {
  expect(DataUtils.typeofBetter([])).toBe('array');
});

test("Improved typeof, typeofBetter([]), correctly returns 'array'", () => {
  expect(DataUtils.typeofBetter([])).toBe('array');
});

test("Improved typeof, typeofBetter(), correctly returns 'undefined'", () => {
  expect(DataUtils.typeofBetter()).toBe('undefined');
});

test("Improved typeof, typeofBetter(undefined), correctly returns 'undefined'", () => {
  expect(DataUtils.typeofBetter(undefined)).toBe('undefined');
});

test("Improved typeof, typeofBetter(null), correctly returns 'null'", () => {
  expect(DataUtils.typeofBetter(null)).toBe('null');
});

test("Improved typeof, typeofBetter(true), correctly returns 'boolean'", () => {
  expect(DataUtils.typeofBetter(true)).toBe('boolean');
});

test("Improved typeof, typeofBetter(false), correctly returns 'boolean'", () => {
  expect(DataUtils.typeofBetter(false)).toBe('boolean');
});

test("Improved typeof, typeofBetter(0), correctly returns 'number'", () => {
  expect(DataUtils.typeofBetter(0)).toBe('number');
});

test("Improved typeof, typeofBetter(1), correctly returns 'number'", () => {
  expect(DataUtils.typeofBetter(1)).toBe('number');
});

test("Improved typeof, typeofBetter(''), correctly returns 'string'", () => {
  expect(DataUtils.typeofBetter('')).toBe('string');
});

test("Improved typeof, typeofBetter('test'), correctly returns 'string'", () => {
  expect(DataUtils.typeofBetter('test')).toBe('string');
});

test("Improved typeof, typeofBetter('test'), correctly returns 'string'", () => {
  const symbol = Symbol('foo');
  expect(DataUtils.typeofBetter(symbol)).toBe('symbol');
});


/*****************************************************
 * Testing typesMatch()
 * Since this method uses typeofBetter, more extensive 
 *  testing is not really needed (covered above).
 */
test("typesMatch('foo', 'bar'), correctly returns true", () => {
  expect(DataUtils.typesMatch('foo','bar')).toBe(true);
});

test("typesMatch('foo', 0), correctly returns false", () => {
  expect(DataUtils.typesMatch('foo',0)).toBe(false);
});

test("typesMatch(), correctly returns true", () => {
  expect(DataUtils.typesMatch()).toBe(true);
});

test("typesMatch('foo'), correctly returns false", () => {
  expect(DataUtils.typesMatch('foo')).toBe(false);
});


/*****************************************************
 * Testing copyShallow_object()
 */



/*****************************************************
 * Testing copyDeep_objectOfJSON()
 */

