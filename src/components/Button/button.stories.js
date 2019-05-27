import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import Button from "./Button";

storiesOf("Button", module).add("Default", () => (
  <Button onClick={action("clicked")}>Hello Button</Button>
));
