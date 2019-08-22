import React from "react"

import { storiesOf } from "@storybook/react"

import Tag from "./Tag"

storiesOf("Primitives | Tags", module).add("Completed", () => (
  <Tag status="completed">Completed</Tag>
))
.add("Canceled", () => (
  <Tag status="canceled">Canceled</Tag>
))
.add("Refunded", () => (
  <Tag status="refunded">Refunded</Tag>
))
.add("Ongoing", () => (
  <Tag status="ongoing">Ongoing</Tag>
))
.add("Default", () => <Tag>Stationary</Tag>)
.add("Brand", () => <Tag brand>Stationary</Tag>)
