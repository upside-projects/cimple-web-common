export default {
  colors: {
    brand: "#7E6EE6",
    black: "#151E29",
    grayscale: {
      white: "FFFFFF"
    }
  },
  radius: {
    small: "4px",
    big: "8px"
  },
  shadow: {
    subtle: "0 2px 4px 0 rgba(75,84,94,0.06)",
    subtleActive: "0 2px 4px 0 rgba(75,84,94,0.08)"
  },
  transition: {
    cubic: (ms = 750) => `cubic-bezier(.19, 1, .22, 1) ${ms}ms`,
    ease: (ms = 200) => `${ms}ms ease-in-out`
  },
  space: [0, 4, 8, 12, 16, 20, 24, 32, 40, 48, 56, 60]
};
