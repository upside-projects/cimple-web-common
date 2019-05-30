function applyColor(props) {
  const { colors } = props.theme;

  const map: any = {
    black: colors.greyscale.dark,
    purple: colors.brand.default,
    purpleDark: colors.brand.light,
    purpleLight: colors.brand.dark,
    default: colors.greyscale.dark,
    grey: colors.greyscale.default,
    greyDark: colors.greyscale.dark,
    greyLight: colors.greyscale.light,
    greyMedium: colors.greyscale.medium,
    white: colors.greyscale.white
  };

  if (props.color !== undefined) {
    return map[props.color];
  }

  return map.default;
}

export default applyColor;
