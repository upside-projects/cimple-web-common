import React from "react"

import { storiesOf } from "@storybook/react"

import Cart from "../Icons/Cart"
import NavLink from "./NavLink/NavLink"
import ArrowLink from "./ArrowLink/ArrowLink"
import ExternalLink from "./ExternalLink/ExternalLink"
import BackLink from "./BackLink/BackLink"

storiesOf("Link", module).add("Navigation", () => (
  <NavLink to="/orders" internalType="gatsby">
    Orders
  </NavLink>
))

storiesOf("Link", module).add("Navigation with Icon", () => (
  <NavLink to="https://google.com" withIcon={<Cart />}>
    Cart
  </NavLink>
))

storiesOf("Link", module).add("Arrow", () => (
  <div>
    <ArrowLink to="https://google.com">View order</ArrowLink>
    <ArrowLink withColor to="https://google.com">
      View order
    </ArrowLink>
  </div>
))

storiesOf("Link", module).add("External", () => (
  <ExternalLink to="https://google.com">Cimple Marketplace</ExternalLink>
))

storiesOf("Link", module).add("Back", () => (
  <BackLink to="https://google.com">Back</BackLink>
))
