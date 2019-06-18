function applyColor(props) {
  const { colors } = props.theme

  const map = {
    black: colors.greyscale.dark,
    purple: colors.brand.default,
    purpleDark: colors.brand.light,
    purpleLight: colors.brand.dark,
    default: colors.greyscale.dark,
    grey: colors.greyscale.default,
    greyDark: colors.greyscale.dark,
    greyLight: colors.greyscale.light,
    greyMedium: colors.greyscale.medium,
    red: colors.danger.default,
    redDark: colors.danger.dark,
    white: colors.greyscale.white
  }

  if (props.color !== undefined) {
    return map[props.color] || map.default
  }

  return map.default
}

export default applyColor
