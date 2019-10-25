export const measureTextWidth = (text, font) => {
  if (typeof window !== 'undefined') {
    var canvas = measureTextWidth.canvas || (measureTextWidth.canvas = window.document.createElement('canvas'));
    var context = canvas.getContext('2d');
    context.font = font;
    var metrics = context.measureText(text);

    return metrics.width;
  }

  return '24px';
};
