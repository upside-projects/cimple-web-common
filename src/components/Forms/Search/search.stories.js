import React from "react"

import { storiesOf } from "@storybook/react"

import Searchbar from "./Search"

storiesOf("Search", module).add("Search", () => (
  <Searchbar placeholder="Search for goods" />
))
