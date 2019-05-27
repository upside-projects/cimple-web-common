import React from "react";
import Provider from "../src/components/Provider/Provider";

import { addDecorator } from "@storybook/react";

export default () => {
  addDecorator(story => <Provider>{story()}</Provider>);
};
