import React from "react"

import { storiesOf } from "@storybook/react"
import { State, Store } from "@sambego/storybook-state"

import Counter from "./Counter"

const store = new Store({
  quantity: 1
})

storiesOf("Counter", module).add("Default", () => (
  <State store={store}>
    {state => (
      <Counter
        value={state.quantity}
        minValue={1}
        maxValue={100}
        onChange={value => store.set({ quantity: value })}
      />
    )}
  </State>
))
