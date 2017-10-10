export const int = str => parseInt(str, 10);

export const num = str => (str + '').replace(/[^\d.]/g, '') - 0;

export const setText = (elm, text) => {
  return elm.textContent ? elm.textContent = text : elm.innerText = text;
};

export const getText = elm => {
  return elm.textContent ? elm.textContent : elm.innerText;
};

export const getStyle = (elm, style) => {
  if (window.getComputedStyle) return window.getComputedStyle(elm, null).getPropertyValue(style);
  return elm.currentStyle.getAttribute(style.replace(/-(\w)/g, (v, v1) => v1.toUpperCase()));
};

export const getHeight = elm => {
  const height = getStyle(elm, 'height');
  if (height.indexOf('px') > -1) return num(height);
  return num(elm.clientHeight) - num(getStyle(elm, 'padding-top')) - num(getStyle(elm, 'padding-bottom'));
};
