import React from "react"

import { storiesOf } from "@storybook/react"

import Icons from "./index"

storiesOf("Icons", module).add("All", () => (
  <div
    style={{
      display: "grid",
      gridGap: "20px",
      gridTemplateColumns: "20px 20px 20px",
      gridTemplateRows: "20px 20px 20px"
    }}
  >
    <Icons.Cart />
    <Icons.Arrow />
    <Icons.Danger />
    <Icons.DoubleChevron />
    <Icons.External />
    <Icons.Search />
    <Icons.Hamburger />
  </div>
))

storiesOf("Icons", module).add("Cart", () => <Icons.Cart />)
