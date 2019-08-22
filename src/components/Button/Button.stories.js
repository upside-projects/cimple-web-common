import React from "react"

import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"

import ButtonPrimary from "./Primary/ButtonPrimary"
import ButtonSecondary from "./Secondary/ButtonSecondary"

storiesOf("Primitives | Buttons/Primary", module)
  .add("Default", () => (
    <ButtonPrimary onClick={action("clicked")}>This is a button</ButtonPrimary>
))
.add("With Loading", () => (
  <ButtonPrimary onClick={action("clicked")} isLoading>
    Submitting
  </ButtonPrimary> 
))
.add("Disabled", () => (
  <ButtonPrimary onClick={action("clicked")} disabled>
    Hello ButtonPrimary
  </ButtonPrimary>
))
.add("Full", () => (
  <ButtonPrimary onClick={action("clicked")} full loading>
    Hello ButtonPrimary
  </ButtonPrimary>
))
.add("Danger", () => (
  <ButtonPrimary danger onClick={action("clicked")}>
    Delete account
  </ButtonPrimary>
))

storiesOf("Primitives | Buttons/Secondary", module)
  .add("Default", () => (
    <ButtonSecondary onClick={action("clicked")}>This is a ButtonSecondary</ButtonSecondary>
  ))
  .add("With Loading", () => (
    <ButtonSecondary onClick={action("clicked")} isLoading>
      Submitting
  </ButtonSecondary>
  ))
  .add("Disabled", () => (
    <ButtonSecondary onClick={action("clicked")} disabled>
      Hello ButtonSecondary
  </ButtonSecondary>
  ))
  .add("Full", () => (
    <ButtonSecondary onClick={action("clicked")} full loading>
      Hello ButtonSecondary
  </ButtonSecondary>
  ))
  .add("Danger", () => (
    <ButtonSecondary danger onClick={action("clicked")}>
      Delete account
  </ButtonSecondary>
  ))
