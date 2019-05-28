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
    value="user@email.org.uk"
    error="Invalid credentials."
  />
));

storiesOf("Input", module).add("With Link", () => (
  <Input
    label="Your password"
    name="Password"
    value="••••••••"
    link="Forgot password?"
    href="https://google.com"
  />
));
