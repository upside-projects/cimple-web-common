import React from "react"

import { storiesOf } from "@storybook/react"

import Tag from "./Tag"

storiesOf("Tag", module).add("Completed", () => (
  <Tag status="completed">Completed</Tag>
))

storiesOf("Tag", module).add("Canceled", () => (
  <Tag status="canceled">Canceled</Tag>
))

storiesOf("Tag", module).add("Refunded", () => (
  <Tag status="refunded">Refunded</Tag>
))