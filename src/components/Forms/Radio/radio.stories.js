import React from "react";

import { storiesOf } from "@storybook/react";

import Radio from "./Radio";

storiesOf("Radio", module).add("Default", () => (
  <div style={{ display: "flex", flexDirection: "row" }}>
    <Radio label="Buyer" />
  </div>
));
