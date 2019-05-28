export default {
  colors: {
    brand: "#7E6EE6",
    black: "#151E29",
    red: "#F87E7E",
    greyscale: {
      white: "#FFFFFF",
      medium: "#C7C7C8",
      light: "#D9D7E0"
    }
  },
  radius: {
    xsmall: "2px",
    small: "4px",
    big: "8px"
  },
  shadow: {
    subtle: "0 2px 4px 0 rgba(75,84,94,0.06)"
  },
  transition: {
    cubic: (ms = 750) => `cubic-bezier(.19, 1, .22, 1) ${ms}ms`,
    ease: (ms = 200) => `${ms}ms ease-in-out`
  }
};
