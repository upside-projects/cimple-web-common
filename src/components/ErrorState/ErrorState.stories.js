import React from "react"

import { storiesOf } from "@storybook/react"

import ErrorState from "./ErrorState"

storiesOf("Primitives | States / Errors ", module).add("Default", () => (
  <ErrorState errorMessage="There was a problem processing your request." />
))
