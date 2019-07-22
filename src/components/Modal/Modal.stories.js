import React from "react"

import { storiesOf } from "@storybook/react"

import { State, Store } from "@sambego/storybook-state"
import { Button } from "../index"

import Modal from "./Modal"

const store = new Store({
  opened: false
})

storiesOf("Modal", module).add("Default", () => (
  <State store={store}>
    {state => {
      const onClose = () => {
        store.set({ opened: !store.state.opened })
      }

      return (
        <div>
          <Button onClick={() => store.set({ opened: !store.state.opened })}>
            Open modal
          </Button>

          <Modal isOpen={state.opened} onClose={onClose}>
            Cena
          </Modal>
        </div>
      )
    }}
  </State>
))
