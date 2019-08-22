import React from "react"
import { storiesOf } from "@storybook/react"

import GoodDisplay from "./GoodDisplay"

const styles = { width: "100%" , maxWidth: "20rem"}

const Holder = storyFn => <div style={styles}>{storyFn()}</div>;

storiesOf("Product / Good Display", module)
  .addDecorator(Holder)
  .add("Default", () => (
  <GoodDisplay
    goodImage="https://cdn2.shopify.com/s/files/1/0752/8831/products/ito-bindery-memo-block_3f131db0-b3a8-4a65-a89c-15e4a0842bff_1400x.jpg?v=1559703503"
    goodName="Stainless Steel Stapler"
    unitPrice="$6"
    goodCategory="STATIONERY"
  />
)).add("Emtpy", () => <GoodDisplay />)