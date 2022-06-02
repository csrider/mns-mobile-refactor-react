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
import { MenuMainApp, DomAttribs } from '../values.js';
import * as Strings from '../utilities/Strings.js';
import { AppHeader, AppBody, AppFooter } from './AppMainSections';

test('AppHeader renders app-header-container', () => {
  render(
    <AppHeader 
      appTitle={Strings.getAppTitle()}
      mainMenuInstance={MenuMainApp}
    />
  );
  const containerAttribs = DomAttribs.getAppHeader().container;
  const attrib_dataTestId = containerAttribs.dataTestId;
  const appContainerElement = screen.getByTestId(attrib_dataTestId);
  expect(appContainerElement).toBeVisible();
});

test('AppHeader renders title/heading', () => {
  render(
    <AppHeader 
      appTitle={Strings.getAppTitle()}
      mainMenuInstance={MenuMainApp}
    />
  );
  const strToMatch = Strings.getAppTitle();
  const regex = new RegExp(strToMatch);
  const appHeaderTitle = screen.getByText(regex);
  expect(appHeaderTitle).toBeInTheDocument();
});

test('AppBody renders app-body-container', () => {
  render(
    <AppBody />
  );
  const containerAttribs = DomAttribs.getAppBody().container;
  const attrib_dataTestId = containerAttribs.dataTestId;
  const appContainerElement = screen.getByTestId(attrib_dataTestId);
  expect(appContainerElement).toBeVisible();
});

test('AppBody renders app-footer-container', () => {
  render(
    <AppFooter
      copyright={Strings.getCopyrightLine()}
    />
  );
  const containerAttribs = DomAttribs.getAppFooter().container;
  const attrib_dataTestId = containerAttribs.dataTestId;
  const appContainerElement = screen.getByTestId(attrib_dataTestId);
  expect(appContainerElement).toBeVisible();
});

test('AppFooter renders copyright', () => {
  render(
    <AppFooter 
      copyright={Strings.getCopyrightLine()}
    />
  );
  const strToMatch = Strings.getCopyrightLine();
  const regex = new RegExp(strToMatch);
  const appFooterCopyright = screen.getByText(regex);
  expect(appFooterCopyright).toBeInTheDocument();
});