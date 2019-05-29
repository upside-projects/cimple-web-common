import React from "react";

import { storiesOf } from "@storybook/react";

import Link from "./Link";

storiesOf("Link", module).add("Default", () => (
  <Link to="https://google.com">Hello Button</Link>
));
