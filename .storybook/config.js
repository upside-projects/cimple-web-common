import React from "react";
import { configure, addParameters, addDecorator } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";

import Provider from "../src/components/Provider/Provider";

const styles = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh"
};

const CenterDecorator = storyFn => <div style={styles}>{storyFn()}</div>;

addParameters({
  options: {
    name: "Cimple UI Kit",
    url: "https://github.com/upside-projects/cimple-web-common",
    goFullScreen: false,
    showAddonsPanel: true,
    showSearchBox: false,
    addonPanelInRight: true,
    sortStoriesByKind: false,
    hierarchySeparator: /\//,
    hierarchyRootSeparator: /\|/,
    enableShortcuts: true
  }
});

addDecorator(story => <Provider>{story()}</Provider>);
addDecorator(CenterDecorator);
addDecorator(withA11y);

const loadStories = () => {
  const req = require.context("../src/", true, /stories\.js$/);
  req.keys().forEach(req);
};

configure(loadStories, module);
