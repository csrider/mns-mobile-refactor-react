/*****************************************************
 * MessageNet Connections Mobile v3
 *
 * MessageNet Systems, Inc.
 * Copyright (c) 1991-2022 MessageNet Systems, Inc.
 *
 * In exclusive license to Chris Rider to distribute 
 * for non-commercial purposes and work demonstration.
 *****************************************************/
import React from 'react';
import { render, screen, queryByAttribute } from '@testing-library/react';
import App from './App';
import { DomAttribs } from '../values';

test('App renders app-container', () => {
  const containerAttribs = DomAttribs.getApp().container;
  const attrib_dataTestId = containerAttribs.dataTestId;
  render(<App />);
  const appContainerElement = screen.getByTestId(attrib_dataTestId);
  expect(appContainerElement).toBeVisible();
});