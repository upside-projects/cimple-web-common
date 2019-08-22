import React from "react"

import { storiesOf } from "@storybook/react"

import Logo from "./Logo"

storiesOf("Primitives | Logo", module).add("Logo", () => <Logo />).add("Logo White", () => (
  <div
    style={{
      width: "100vw",
      height: "100vh",
      backgroundColor: "#2C343E",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center"
    }}
  >
    <Logo white />
  </div>
))
