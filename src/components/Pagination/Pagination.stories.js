import React from "react"

import { storiesOf } from "@storybook/react"

import Pagination from "./Pagination"

storiesOf("Pagination", module).add("Pagination", () => (
  <Pagination current={1} total={20} />
))
