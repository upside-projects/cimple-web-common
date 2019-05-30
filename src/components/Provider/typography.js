import { css } from "styled-components";

import HKGroteskLightWoff from "./fonts/HKGrotesk-Light.woff";
import HKGroteskLightWoff2 from "./fonts/HKGrotesk-Light.woff2";
import HKGroteskLightItalicWoff from "./fonts/HKGrotesk-LightItalic.woff";
import HKGroteskLightItalicWoff2 from "./fonts/HKGrotesk-LightItalic.woff2";

import HKGroteskRegularWoff from "./fonts/HKGrotesk-Regular.woff";
import HKGroteskRegularWoff2 from "./fonts/HKGrotesk-Regular.woff2";
import HKGroteskItalicWoff from "./fonts/HKGrotesk-Italic.woff";
import HKGroteskItalicWoff2 from "./fonts/HKGrotesk-Italic.woff2";

import HKGroteskMediumWoff from "./fonts/HKGrotesk-Medium.woff";
import HKGroteskMediumWoff2 from "./fonts/HKGrotesk-Medium.woff2";
import HKGroteskMediumItalicWoff from "./fonts/HKGrotesk-MediumItalic.woff";
import HKGroteskMediumItalicWoff2 from "./fonts/HKGrotesk-MediumItalic.woff2";

import HKGroteskSemiBoldWoff from "./fonts/HKGrotesk-SemiBold.woff";
import HKGroteskSemiBoldWoff2 from "./fonts/HKGrotesk-SemiBold.woff2";
import HKGroteskSemiBoldItalicWoff from "./fonts/HKGrotesk-SemiBoldItalic.woff";
import HKGroteskSemiBoldItalicWoff2 from "./fonts/HKGrotesk-SemiBoldItalic.woff2";

import HKGroteskBoldWoff from "./fonts/HKGrotesk-Bold.woff";
import HKGroteskBoldWoff2 from "./fonts/HKGrotesk-Bold.woff2";
import HKGroteskBoldItalicWoff from "./fonts/HKGrotesk-BoldItalic.woff";
import HKGroteskBoldItalicWoff2 from "./fonts/HKGrotesk-BoldItalic.woff2";

export default css`
  /* LIGHT */
  @font-face {
    font-display: auto;
    font-family: "HKGrotesk";
    font-style: normal;
    font-weight: 100;
    src: url(${HKGroteskLightWoff2}) format("woff2"),
      url(${HKGroteskLightWoff}) format("woff");
  }

  @font-face {
    font-display: auto;
    font-family: "HKGrotesk";
    font-style: italic;
    font-weight: 100;
    src: url(${HKGroteskLightItalicWoff2}) format("woff2"),
      url(${HKGroteskLightItalicWoff}) format("woff");
  }

  /* REGULAR */
  @font-face {
    font-display: auto;
    font-family: "HKGrotesk";
    font-style: normal;
    src: url(${HKGroteskRegularWoff2}) format("woff2"),
      url(${HKGroteskRegularWoff}) format("woff");
  }

  @font-face {
    font-display: auto;
    font-family: "HKGrotesk";
    font-style: italic;
    src: url(${HKGroteskItalicWoff2}) format("woff2"),
      url(${HKGroteskItalicWoff}) format("woff");
  }

  /* MEDIUM */
  @font-face {
    font-display: auto;
    font-family: "HKGrotesk";
    font-style: normal;
    font-weight: 500;
    src: url(${HKGroteskMediumWoff2}) format("woff2"),
      url(${HKGroteskMediumWoff}) format("woff");
  }

  @font-face {
    font-display: auto;
    font-family: "HKGrotesk";
    font-weight: 500;
    font-style: italic;
    src: url(${HKGroteskMediumItalicWoff2}) format("woff2"),
      url(${HKGroteskMediumItalicWoff}) format("woff");
  }

  /* SEMIBOLD */
  @font-face {
    font-display: auto;
    font-family: "HKGrotesk";
    font-style: normal;
    font-weight: 600;
    src: url(${HKGroteskSemiBoldWoff2}) format("woff2"),
      url(${HKGroteskSemiBoldWoff}) format("woff");
  }

  @font-face {
    font-display: auto;
    font-family: "HKGrotesk";
    font-weight: 600;
    font-style: italic;
    src: url(${HKGroteskSemiBoldItalicWoff2}) format("woff2"),
      url(${HKGroteskSemiBoldItalicWoff}) format("woff");
  }

  /* BOLD */
  @font-face {
    font-display: auto;
    font-family: "HKGrotesk";
    font-weight: 900;
    font-style: normal;
    src: url(${HKGroteskBoldWoff2}) format("woff2"),
      url(${HKGroteskBoldWoff}) format("woff");
  }

  @font-face {
    font-display: auto;
    font-family: "HKGrotesk";
    font-weight: 900;
    font-style: italic;
    src: url(${HKGroteskBoldItalicWoff2}) format("woff2"),
      url(${HKGroteskBoldItalicWoff}) format("woff");
  }
`;
