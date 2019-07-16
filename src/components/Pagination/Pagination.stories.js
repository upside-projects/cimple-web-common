import React from "react"

import { storiesOf } from "@storybook/react"
import { State, Store } from "@sambego/storybook-state"

import Pagination from "./Pagination"

const store = new Store({
  current: 1
})

storiesOf("Pagination", module).add("Pagination", () => (
  <State store={store}>
    {state => (
      <Pagination
        current={state.current}
        total={20}
        paginationSize={10}
        onChange={page => store.set({ current: page })}
      />
    )}
  </State>
))
