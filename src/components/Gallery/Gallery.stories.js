import React from "react"

import { storiesOf } from "@storybook/react"

import Gallery from "./Gallery"

const images = [
  "https://cdn.shopify.com/s/files/1/0752/8831/products/mogu-kagu-coaster-walnut_1600x.jpg?v=1521917082",
  "https://cdn.shopify.com/s/files/1/0752/8831/products/mogu-kagu-coaster-walnut_1600x.jpg?v=1521917082",
  "https://cdn.shopify.com/s/files/1/0752/8831/products/mogu-kagu-coaster-walnut_1600x.jpg?v=1521917082",
  "https://cdn.shopify.com/s/files/1/0752/8831/products/mogu-kagu-coaster-walnut_1600x.jpg?v=1521917082",
  "https://cdn.shopify.com/s/files/1/0752/8831/products/mogu-kagu-coaster-walnut_1600x.jpg?v=1521917082"
]

storiesOf("Gallery", module).add("Default", () => <Gallery images={images} />)
