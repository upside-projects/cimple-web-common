import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Button from "./Button";

storiesOf("Button", module).add("Primary", () => (
  <Button onClick={action("clicked")}>Hello Button</Button>
));

storiesOf("Button", module).add("Primary Disabled", () => (
  <Button onClick={action("clicked")}>Hello Button</Button>
));
