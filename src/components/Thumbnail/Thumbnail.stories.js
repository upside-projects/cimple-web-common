import React from "react";

import { storiesOf } from "@storybook/react";

import Thumbnail from "./Thumbnail";

storiesOf("Thumbnail/Default", module)
  .add("Default", () => (
    <Thumbnail src="https://images.unsplash.com/photo-1541690161184-75cbc0386cd6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&q=80" />
  ))
  .add("Empty", () => <Thumbnail />);

storiesOf("Thumbnail/Small", module)
  .add("Default", () => (
    <Thumbnail
      small
      src="https://images.unsplash.com/photo-1541690161184-75cbc0386cd6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&q=80"
    />
  ))
  .add("Empty", () => <Thumbnail small />);
