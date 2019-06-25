import React from "react"

import { storiesOf } from "@storybook/react"

import ArrowLink from "../Links/ArrowLink/ArrowLink"
import Table from "./Table"
import Tag from "../Tag/Tag"
import Sort from "../Sort/Sort"
import SmallProduct from "../Product/SmallProduct/SmallProduct"

storiesOf("Table", module).add("List", () => (
  <div style={{ width: "1024px" }}>
    <Table>
      <Table.Header>
        <Table.Cell>
          <Sort>Order ID</Sort>
        </Table.Cell>
        <Table.Cell>
          <Sort>Status</Sort>
        </Table.Cell>
        <Table.Cell>
          <Sort>Total</Sort>
        </Table.Cell>
        <Table.Cell>
          <Sort>Order Placed</Sort>
        </Table.Cell>
        <Table.Cell></Table.Cell>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell>#45678</Table.Cell>
          <Table.Cell>
            <Tag status="canceled">Canceled</Tag>
          </Table.Cell>
          <Table.Cell>£82</Table.Cell>
          <Table.Cell>10/09/10</Table.Cell>
          <Table.Cell>
            <ArrowLink to="https:google.com">View order</ArrowLink>
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>#45678</Table.Cell>
          <Table.Cell>
            <Tag status="completed">Completed</Tag>
          </Table.Cell>
          <Table.Cell>£82</Table.Cell>
          <Table.Cell>10/09/10</Table.Cell>
          <Table.Cell>
            <ArrowLink to="https:google.com">View order</ArrowLink>
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>#45678</Table.Cell>
          <Table.Cell>
            <Tag status="refunded">Refunded</Tag>
          </Table.Cell>
          <Table.Cell>£82</Table.Cell>
          <Table.Cell>10/09/10</Table.Cell>
          <Table.Cell>
            <ArrowLink to="https:google.com">View order</ArrowLink>
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  </div>
))

storiesOf("Table", module).add("List with Thumbnail", () => (
  <div style={{ width: "1024px" }}>
    <Table>
      <Table.Header>
        <Table.Cell>
          <Sort>Product</Sort>
        </Table.Cell>
        <Table.Cell>
          <Sort>Average Price</Sort>
        </Table.Cell>
        <Table.Cell>
          <Sort>Price range</Sort>
        </Table.Cell>
        <Table.Cell>
          <Sort>Category</Sort>
        </Table.Cell>
        <Table.Cell></Table.Cell>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell>
            <SmallProduct
              name="Stainless Steel Stapler"
              id="81209382018"
              src="https://images.unsplash.com/photo-1541690161184-75cbc0386cd6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&q=80"
            />
          </Table.Cell>
          <Table.Cell>£82</Table.Cell>
          <Table.Cell>£82 — £100</Table.Cell>
          <Table.Cell>Stationery</Table.Cell>
          <Table.Cell>
            <ArrowLink to="https:google.com">View order</ArrowLink>
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <SmallProduct />
          </Table.Cell>
          <Table.Cell>£82</Table.Cell>
          <Table.Cell>£82 — £100</Table.Cell>
          <Table.Cell>Stationery</Table.Cell>
          <Table.Cell>
            <ArrowLink to="https:google.com">View order</ArrowLink>
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  </div>
))
