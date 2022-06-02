/*****************************************************
 * MessageNet Connections Mobile v3
 * 
 * DEPRECATED!!!! Bundled in AppMainSections.js now!
 *
 * MessageNet Systems, Inc.
 * Copyright (c) 1991-2022 MessageNet Systems, Inc.
 *
 * In exclusive license to Chris Rider to distribute 
 * for non-commercial purposes and work demonstration.
 *****************************************************/
import React, { Component, useState } from 'react';
import '../styles/App.css';
import { MenuMainApp } from '../values.js';
import { Dropdown, DropdownButton } from 'react-bootstrap';

function AppMenuItem(props) {
  if (!props) return;

  const menuItemIndex = props.objMenuItem.index;
  const menuItemData = props.objMenuItem.data;
  const type = menuItemData.itemType;
  const target = menuItemData.target;
  const content = menuItemData.content;       //contains: .text and .icon
  const domAttribs = menuItemData.domAttribs; //contains: .id and .class

  if (type === MenuMainApp.FLAGS.ITEM_TYPE_ICONONLY) {
    return (
      <Dropdown.Item key={menuItemIndex} href={target}>
        {content.icon}
      </Dropdown.Item>
    );
  }
  else if (type === MenuMainApp.FLAGS.ITEM_TYPE_TEXTONLY) {
    return (
      <Dropdown.Item key={menuItemIndex} href="#">
        {content.text}
      </Dropdown.Item>
    );
  }
  else if (type === MenuMainApp.FLAGS.ITEM_TYPE_ICONTEXT) {
    return (
      <Dropdown.Item key={menuItemIndex} href="#">
        {content.icon} {content.text}
      </Dropdown.Item>
    );
  }
  else if (type === MenuMainApp.FLAGS.ITEM_TYPE_DIVIDER) {
    return (
      <Dropdown.Divider key={menuItemIndex} />
    );
  }
}

/** App Menu Items Component */
function AppMenuItems(props) {
  return (
    <>
      {props.menuItems.map((objMenuItem) => (
        <AppMenuItem objMenuItem={objMenuItem} />
      ))}
    </>
  );
}

/** App Menu Component */
function AppMenu() {
  // Transform menu item data
  menuItemObjects = MenuMainApp.getMenuItems().map((mi, i) => (
    {
      data: mi,
      index: i
    }
  ));

  return (
    <DropdownButton id="app-header-menu-button" title="Menu">
      <AppMenuItems menuItems={menuItemObjects} menuInstance={MenuMainApp} />
    </DropdownButton>
  );
}

export default AppMenu;