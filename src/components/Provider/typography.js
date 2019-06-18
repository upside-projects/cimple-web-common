import { css } from "styled-components"

import HKGroteskRegularWoff from "./fonts/HKGrotesk-Regular.woff"
import HKGroteskRegularWoff2 from "./fonts/HKGrotesk-Regular.woff2"

import HKGroteskMediumWoff from "./fonts/HKGrotesk-Medium.woff"
import HKGroteskMediumWoff2 from "./fonts/HKGrotesk-Medium.woff2"

import HKGroteskSemiBoldWoff from "./fonts/HKGrotesk-SemiBold.woff"
import HKGroteskSemiBoldWoff2 from "./fonts/HKGrotesk-SemiBold.woff2"

export default css`
  /* REGULAR */
  @font-face {
    font-display: auto;
    font-family: "HKGrotesk";
    font-weight: 400;
    font-style: normal;
    src: url(${HKGroteskRegularWoff2}) format("woff2"),
      url(${HKGroteskRegularWoff}) format("woff");
  }

  /* MEDIUM */
  @font-face {
    font-display: auto;
    font-family: "HKGrotesk";
    font-style: normal;
    font-weight: 700;
    src: url(${HKGroteskMediumWoff2}) format("woff2"),
      url(${HKGroteskMediumWoff}) format("woff");
  }

  /* SEMIBOLD */
  @font-face {
    font-display: auto;
    font-family: "HKGrotesk";
    font-style: normal;
    font-weight: 800;
    src: url(${HKGroteskSemiBoldWoff2}) format("woff2"),
      url(${HKGroteskSemiBoldWoff}) format("woff");
  }
`
