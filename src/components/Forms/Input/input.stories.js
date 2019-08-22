import React from "react"

import { storiesOf } from "@storybook/react"

import Input from "./Input"

storiesOf("Primitives | Forms / Inputs", module).add("Default", () => (
  <Input label="Email adress" name="Email" placeholder="user@email.org.uk" />
))
.add("Error", () => (
  <Input
    label="Email adress"
    name="Email"
    value="user@email.org.uk"
    error="Invalid credentials"
  />
))
.add("With Link", () => (
  <Input
    label="Your password"
    name="Password"
    value="••••••••"
    link="Forgot password?"
    href="https://google.com"
  />
))
.add("Disabled", () => (
  <Input label="City" name="City" placeholder="Edinburgh" disabled />
))
