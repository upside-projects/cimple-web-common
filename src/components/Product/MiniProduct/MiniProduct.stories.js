import React from "react"

import { storiesOf } from "@storybook/react"

import MiniProduct from "./MiniProduct"

storiesOf("Product", module).add("Mini Product", () => (
  <MiniProduct
    image="https://images.unsplash.com/photo-1541690161184-75cbc0386cd6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&q=80"
    name="Stainless Steel Stapler"
    quantity={1}
    price={10.8}
    sku="3128309289"
  />
))
storiesOf("Product", module).add("Mini Product - Empty", () => <MiniProduct />)
