export default {
  colors: {
    brand: {
      light: "#B1A7F0",
      default: "#7E6EE6",
      dark: "#6d5ae4"
    },
    greyscale: {
      dark: "#151E29",
      darkLight: "#2C343E",
      medium: "#9E9DA3",
      light: "#D9D7E0",
      lighter: "#F3F2F5",
      white: "#FFFFFF"
    },
    danger: {
      default: "#F87E7E",
      dark: "#D25656",
      light: "#FEE9E9"
    },
    yellow: {
      default: "#FCB747",
      light: "#FFF4E4"
    },
    green: {
      default: "#46CF68",
      light: "#E3F8E9"
    },
    blue: {
      default: "#588CF5",
      light: "#E6EEFE"
    }
  },
  radius: {
    xsmall: "2px",
    small: "4px",
    big: "8px",
    round: "50%"
  },
  shadow: {
    subtle: "0 2px 4px 0 rgba(75,84,94,0.06)"
  },
  transition: {
    cubic: (ms = 750) => `cubic-bezier(.19, 1, .22, 1) ${ms}ms`,
    ease: (ms = 200) => `${ms}ms ease-in-out`
  }
}
