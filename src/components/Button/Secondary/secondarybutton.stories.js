import React from "react"

import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"

import SecondaryButton from "./SecondaryButton"

storiesOf("Button Secondary", module).add("Default", () => (
  <SecondaryButton onClick={action("clicked")}>A button</SecondaryButton>
))

storiesOf("Button Secondary", module).add("With Loading", () => (
  <SecondaryButton onClick={action("clicked")} isLoading>
    Submitting
  </SecondaryButton>
))

storiesOf("Button Secondary", module).add("Disabled", () => (
  <SecondaryButton onClick={action("clicked")} disabled>
    A disabled button
  </SecondaryButton>
))

storiesOf("Button Secondary", module).add("Full", () => (
  <SecondaryButton onClick={action("clicked")} full>
    A full button
  </SecondaryButton>
))
