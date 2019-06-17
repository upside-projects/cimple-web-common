import { css } from "styled-components"

import HKGroteskRegularWoff from "./fonts/HKGrotesk-Regular.woff"
import HKGroteskRegularWoff2 from "./fonts/HKGrotesk-Regular.woff2"
import HKGroteskItalicWoff from "./fonts/HKGrotesk-Italic.woff"
import HKGroteskItalicWoff2 from "./fonts/HKGrotesk-Italic.woff2"

import HKGroteskMediumWoff from "./fonts/HKGrotesk-Medium.woff"
import HKGroteskMediumWoff2 from "./fonts/HKGrotesk-Medium.woff2"
import HKGroteskMediumItalicWoff from "./fonts/HKGrotesk-MediumItalic.woff"
import HKGroteskMediumItalicWoff2 from "./fonts/HKGrotesk-MediumItalic.woff2"

import HKGroteskSemiBoldWoff from "./fonts/HKGrotesk-SemiBold.woff"
import HKGroteskSemiBoldWoff2 from "./fonts/HKGrotesk-SemiBold.woff2"
import HKGroteskSemiBoldItalicWoff from "./fonts/HKGrotesk-SemiBoldItalic.woff"
import HKGroteskSemiBoldItalicWoff2 from "./fonts/HKGrotesk-SemiBoldItalic.woff2"

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

  @font-face {
    font-display: auto;
    font-family: "HKGrotesk";
    font-weight: 400;
    font-style: italic;
    src: url(${HKGroteskItalicWoff2}) format("woff2"),
      url(${HKGroteskItalicWoff}) format("woff");
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

  @font-face {
    font-display: auto;
    font-family: "HKGrotesk";
    font-weight: 700;
    font-style: italic;
    src: url(${HKGroteskMediumItalicWoff2}) format("woff2"),
      url(${HKGroteskMediumItalicWoff}) format("woff");
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

  @font-face {
    font-display: auto;
    font-family: "HKGrotesk";
    font-weight: 800;
    font-style: italic;
    src: url(${HKGroteskSemiBoldItalicWoff2}) format("woff2"),
      url(${HKGroteskSemiBoldItalicWoff}) format("woff");
  }
`
