import React from "react";

import { storiesOf } from "@storybook/react";

import {
  HeadingL,
  HeadingM,
  HeadingS,
  Text,
  Uppercase,
  UppercaseL
} from "./Typography";

storiesOf("Typography", module)
  .add("Heading", () => (
    <div style={{ flexDirection: "column" }}>
      <div style={{ marginBottom: "24px" }}>
        <Uppercase>Heading L (40px)</Uppercase>
        <HeadingL color="purple">The Complex made simple.</HeadingL>
        <HeadingL color="greyDark">The Complex made simple.</HeadingL>
        <HeadingL color="greyMedium">The Complex made simple.</HeadingL>
        <HeadingL color="greyLight">The Complex made simple.</HeadingL>
      </div>
      <div style={{ marginBottom: "24px" }}>
        <Uppercase>Heading M (32px)</Uppercase>
        <HeadingM color="purple">The Complex made simple.</HeadingM>
        <HeadingM color="greyDark">The Complex made simple.</HeadingM>
        <HeadingM color="greyMedium">The Complex made simple.</HeadingM>
        <HeadingM color="greyLight">The Complex made simple.</HeadingM>
      </div>
      <div style={{ marginBottom: "24px" }}>
        <Uppercase>Heading S (24px)</Uppercase>
        <HeadingS color="purple">The Complex made simple.</HeadingS>
        <HeadingS color="greyDark">The Complex made simple.</HeadingS>
        <HeadingS color="greyMedium">The Complex made simple.</HeadingS>
        <HeadingS color="greyLight">The Complex made simple.</HeadingS>
      </div>
    </div>
  ))
  .add("Text", () => (
    <div style={{ flexDirection: "column" }}>
      <Uppercase>Text (16px)</Uppercase>
      <Text
        style={{
          maxWidth: "400px",
          marginBottom: "24px"
        }}
      >
        We aim to create a dynamic marketplace that will provide you with access
        to suppliers competing in real-time for your business. It will include
        local suppliers as well as national, big and small, old and new.
      </Text>
      <Text color="greyMedium" style={{ maxWidth: "400px" }}>
        We aim to create a dynamic marketplace that will provide you with access
        to suppliers competing in real-time for your business. It will include
        local suppliers as well as national, big and small, old and new.
      </Text>
    </div>
  ))
  .add("Label", () => (
    <div style={{ flexDirection: "column" }}>
      <div
        style={{
          marginBottom: "24px"
        }}
      >
        <Uppercase style={{ marginBottom: "8px" }}>Label (12px)</Uppercase>
        <UppercaseL>Product</UppercaseL>
        <UppercaseL color="purple">Show more</UppercaseL>
        <UppercaseL color="red">Unexpected error</UppercaseL>
      </div>

      <Uppercase style={{ marginBottom: "8px" }}>Label (10px)</Uppercase>
      <Uppercase>Product</Uppercase>
      <Uppercase color="purple">Show more</Uppercase>
      <Uppercase color="red">Unexpected error</Uppercase>
    </div>
  ));
