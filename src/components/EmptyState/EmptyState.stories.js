import React from "react"

import { storiesOf } from "@storybook/react"

import EmptyState from "./EmptyState"

storiesOf("Empty State", module).add("Default", () => (
  <EmptyState
    errorMessage="There are no items with the name"
    errorDescription="Try searching for other items."
    searchTerm="cena"
  />
))
