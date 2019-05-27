import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import { withA11y } from "@storybook/addon-a11y";

import Button from "./Button";

storiesOf("Button", module).add("Default", () => (
  <Button onClick={action("clicked")}>Hello Button</Button>
));
