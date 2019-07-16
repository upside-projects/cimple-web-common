import React from "react"

import { storiesOf } from "@storybook/react"

import ErrorState from "./ErrorState"

storiesOf("Error State", module).add("Default", () => (
  <ErrorState errorMessage="There was a problem processing your request." />
))
