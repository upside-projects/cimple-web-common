import React from "react"

import { storiesOf } from "@storybook/react"

import SmallProduct from "./SmallProduct"

storiesOf("Product", module).add("Small Thumbnail", () => (
  <SmallProduct
    src="https://images.unsplash.com/photo-1541690161184-75cbc0386cd6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&q=80"
    name="Stainless Steel Stapler"
    id="3128309289"
  />
))
storiesOf("Product", module).add("Small Thumbnail - Empty", () => (
  <SmallProduct />
))
