import React from "react"

import { storiesOf } from "@storybook/react"

import Icons from "./index"

storiesOf("Primitives | Icons", module).add("All", () => (
  <div
    style={{
      display: "grid",
      gridGap: "20px",
      gridTemplateColumns: "20px 20px 20px",
      gridTemplateRows: "20px 20px 20px"
    }}
  >
    <Icons.Cart />
    <Icons.CaretUp />
    <Icons.CaretDown />
    <Icons.CaretRight />
    <Icons.Arrow />
    <Icons.Danger />
    <Icons.DoubleChevron />
    <Icons.External />
    <Icons.Search />
    <Icons.Hamburger />
    <Icons.Edit />
  </div>
))
.add("Cart", () => <Icons.Cart />)
