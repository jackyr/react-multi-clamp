'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var int = exports.int = function int(str) {
  return parseInt(str, 10);
};

var num = exports.num = function num(str) {
  return (str + '').replace(/[^\d.]/g, '') - 0;
};

var setText = exports.setText = function setText(elm, text) {
  return elm.textContent ? elm.textContent = text : elm.innerText = text;
};

var getText = exports.getText = function getText(elm) {
  return elm.textContent ? elm.textContent : elm.innerText;
};

var getStyle = exports.getStyle = function getStyle(elm, style) {
  if (window.getComputedStyle) return window.getComputedStyle(elm, null).getPropertyValue(style);
  return elm.currentStyle.getAttribute(style.replace(/-(\w)/g, function (v, v1) {
    return v1.toUpperCase();
  }));
};

var getHeight = exports.getHeight = function getHeight(elm) {
  var height = getStyle(elm, 'height');
  if (height.indexOf('px') > -1) return num(height);
  return num(elm.clientHeight) - num(getStyle(elm, 'padding-top')) - num(getStyle(elm, 'padding-bottom'));
};