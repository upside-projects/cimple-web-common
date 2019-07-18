import React from "react"

import { storiesOf } from "@storybook/react"

import Quantity from "./Quantity"

storiesOf("Quantity", module).add("Default", () => (
  <Quantity maxValue={99} currentValue={1} />
))
