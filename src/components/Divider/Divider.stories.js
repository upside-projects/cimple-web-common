import React from "react"

import { storiesOf } from "@storybook/react"

import Divider from "./Divider"

storiesOf("Primitives | Layout / Divider", module).add("Default", () => (
  <div style={{ width: "400px" }}>
    <Divider />
  </div>
))
