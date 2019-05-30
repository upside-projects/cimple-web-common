import React from "react";

import { storiesOf } from "@storybook/react";

import { Display, Uppercase } from "./Typography";

storiesOf("Typography", module)
  .add("Label", () => <Uppercase color="lightGrey">Oh no</Uppercase>)
  .add("Display", () => <Display color="lightGrey">Wow a child</Display>);
