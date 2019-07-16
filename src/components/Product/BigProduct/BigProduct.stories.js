import React from "react"

import { storiesOf } from "@storybook/react"

import BigProduct from "./BigProduct"

storiesOf("Product", module).add("Big Thumbnail", () => (
  <BigProduct
    src="https://cdn2.shopify.com/s/files/1/0752/8831/products/ito-bindery-memo-block_3f131db0-b3a8-4a65-a89c-15e4a0842bff_1400x.jpg?v=1559703503"
    name="Stainless Steel Stapler"
    price="$6"
  />
))
storiesOf("Product", module).add("Big Thumbnail - Empty", () => <BigProduct />)
