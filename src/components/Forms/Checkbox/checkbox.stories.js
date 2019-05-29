import React from "react";

import { storiesOf } from "@storybook/react";
import { State, Store } from "@sambego/storybook-state";

import Checkbox from "./Checkbox";

const store = new Store({
  checked: false
});

storiesOf("Checkbox", module).add("Default", () => (
  <State store={store}>
    {state => (
      <Checkbox
        label="Transportation"
        checked={state.checked}
        onChange={() => store.set({ checked: !store.state.checked })}
      />
    )}
  </State>
));
