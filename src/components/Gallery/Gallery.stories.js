import React from "react"

import { storiesOf } from "@storybook/react"

import Gallery from "./Gallery"

const images = [
  "https://cdn.shopify.com/s/files/1/0752/8831/products/mogu-kagu-coaster-walnut_800x.jpg?v=1521917082",
  "https://cdn.shopify.com/s/files/1/0752/8831/products/mogu-kagu-coaster-cherry_800x.jpg?v=1521917088",
  "https://cdn.shopify.com/s/files/1/0752/8831/products/mogu-kagu-coasters-with-glass_800x.jpg?v=1521917094",
  "https://cdn.shopify.com/s/files/1/0752/8831/products/mogu-kagu-coasters-with-glass-top_800x.jpg?v=1521917103"
]

storiesOf("Gallery", module).add("Default", () => <Gallery images={images} />)
