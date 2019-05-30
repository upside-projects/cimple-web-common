import React from "react";

import { storiesOf } from "@storybook/react";

import { HeadingL, HeadingM, HeadingS, Uppercase } from "./Typography";

storiesOf("Typography", module)
  .add("Label", () => <Uppercase>Product</Uppercase>)
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
  ));
