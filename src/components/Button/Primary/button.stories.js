import React from "react"

import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"

import Button from "./Button"

storiesOf("Button Primary", module).add("Default", () => (
  <Button onClick={action("clicked")}>This is a button</Button>
))

storiesOf("Button Primary", module).add("With Loading", () => (
  <Button onClick={action("clicked")} isLoading>
    Submitting
  </Button>
))

storiesOf("Button Primary", module).add("Disabled", () => (
  <Button onClick={action("clicked")} disabled>
    Hello Button
  </Button>
))

storiesOf("Button Primary", module).add("Full", () => (
  <Button onClick={action("clicked")} full loading>
    Hello Button
  </Button>
))

storiesOf("Button Primary", module).add("Danger", () => (
  <Button danger onClick={action("clicked")}>
    Delete account
  </Button>
))
