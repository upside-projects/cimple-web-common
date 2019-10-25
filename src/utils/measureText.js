export const measureTextWidth = (text, font) => {
  var canvas = measureTextWidth.canvas || (measureTextWidth.canvas = document.createElement('canvas'));
  var context = canvas.getContext('2d');
  context.font = font;
  var metrics = context.measureText(text);

  return metrics.width;
};
