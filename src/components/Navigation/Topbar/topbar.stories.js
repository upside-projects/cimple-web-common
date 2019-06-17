import React from "react";

import { storiesOf } from "@storybook/react";

import Topbar from "./Topbar";

storiesOf("Topbar", module).add("Simple", () => <Topbar type="simple" />);
storiesOf("Topbar", module).add("Market", () => <Topbar type="market" />);
storiesOf("Topbar", module).add("Sign", () => <Topbar type="sign" />);
