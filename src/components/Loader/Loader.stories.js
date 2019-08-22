import React from "react"

import { storiesOf } from "@storybook/react"

import Loader from "./Loader"

storiesOf("Primitives | States / Loading", module).add("Completed", () => <Loader />)
