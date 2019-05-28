import React from "react";

import { storiesOf } from "@storybook/react";

import Input from "./Input";

storiesOf("Input", module).add("Default", () => (
  <Input label="Your email" name="Email" placeholder="user@email.org.uk" />
));

storiesOf("Input", module).add("Error", () => (
  <Input
    label="Your email"
    name="Email"
    placeholder="user@email.org.uk"
    error="Invalid credentials."
  />
));
