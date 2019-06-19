import React from "react"

import { storiesOf } from "@storybook/react"

import T from "./Table"
import Sort from "../Sort/Sort"
import Tag from "../Tag/Tag"
import ArrowLink from "../Links/ArrowLink/ArrowLink"

storiesOf("Table", module).add("Navigation", () => (
  <div style={{ width: "700px" }}>
    <T>
      <T.Header>
        <T.Cell>
          <Sort>Order ID</Sort>
        </T.Cell>
        <T.Cell>
          <Sort>Status</Sort>
        </T.Cell>
        <T.Cell>
          <Sort>Total</Sort>
        </T.Cell>
        <T.Cell>
          <Sort>Order Date</Sort>
        </T.Cell>
        <T.Cell></T.Cell>
      </T.Header>
      <T.Body>
        <T.Row>
          <T.Cell>#45678</T.Cell>
          <T.Cell>
            <Tag status="canceled">Canceled</Tag>
          </T.Cell>
          <T.Cell>£82</T.Cell>
          <T.Cell>10/09/10</T.Cell>
          <T.Cell>
            <ArrowLink to="https:google.com">View order</ArrowLink>
          </T.Cell>
        </T.Row>
        <T.Row>
          <T.Cell>#45678</T.Cell>
          <T.Cell>
            <Tag status="completed">Completed</Tag>
          </T.Cell>
          <T.Cell>£82</T.Cell>
          <T.Cell>10/09/10</T.Cell>
          <T.Cell>
            <ArrowLink to="https:google.com">View order</ArrowLink>
          </T.Cell>
        </T.Row>
        <T.Row>
          <T.Cell>#45678</T.Cell>
          <T.Cell>
            <Tag status="refunded">Refunded</Tag>
          </T.Cell>
          <T.Cell>£82</T.Cell>
          <T.Cell>10/09/10</T.Cell>
          <T.Cell>
            <ArrowLink to="https:google.com">View order</ArrowLink>
          </T.Cell>
        </T.Row>
      </T.Body>
    </T>
  </div>
))
