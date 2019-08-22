import React from "react"

import { storiesOf } from "@storybook/react"

import Topbar from "./Topbar"

storiesOf("Primitives | Layout / Topbar", module).add("Simple", () => <Topbar type="simple" />)
.add("Market", () => <Topbar type="market" />)
.add("Sign", () => <Topbar type="sign" />)
