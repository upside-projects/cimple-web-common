import React from "react"

import { storiesOf } from "@storybook/react"

import EmptyState from "./EmptyState"

storiesOf("Primitives | States / Empty", module).add("Default", () => (
  <EmptyState
    asset="https://cimple-static-assets.s3-eu-west-1.amazonaws.com/cimple-no+results%403x.png"
    errorMessage="There is nothing here."
    errorDescription="Try searching for other items or categories."
  />
))
