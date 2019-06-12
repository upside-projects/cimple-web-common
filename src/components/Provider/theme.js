export default {
  colors: {
    brand: {
      light: "#B1A7F0",
      default: "#7E6EE6",
      dark: "#6d5ae4"
    },
    greyscale: {
      dark: "#151E29",
      medium: "#9E9DA3",
      light: "#D9D7E0",
      white: "#FFFFFF"
    },
    error: {
      default: "#F87E7E",
      dark: "#D25656"
    },
    yellow: "#FCB747",
    green: "#46CF68",
    blue: "#588CF5"
   
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
};
