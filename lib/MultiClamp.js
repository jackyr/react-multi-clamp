'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Clamp = (_temp = _class = function (_React$Component) {
  _inherits(Clamp, _React$Component);

  function Clamp(props) {
    _classCallCheck(this, Clamp);

    var _this = _possibleConstructorReturn(this, (Clamp.__proto__ || Object.getPrototypeOf(Clamp)).call(this, props));

    _this.clampNum = (0, _utils.int)(props.clamp);
    if (isNaN(_this.clampNum) || _this.clampNum < 1) {
      throw new Error('Invaild clamp number!');
    }
    _this.hasCssClamp = !props.disableCssClamp && !props.reverse && props.ellipsis === '...' && typeof document.body.style.webkitLineClamp !== 'undefined';
    _this.getSingleLineHeight = _this.getSingleLineHeight.bind(_this);
    _this.state = {};
    return _this;
  }

  _createClass(Clamp, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      var nextChildren = nextProps.children;
      var children = this.props.children;
      if (children instanceof Array) {
        return !(nextChildren instanceof Array) || nextChildren.join('') !== children.join('');
      }
      return children !== nextChildren;
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.clamp();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.clamp();
    }
  }, {
    key: 'getSingleLineHeight',
    value: function getSingleLineHeight() {
      var _this2 = this;

      var createSingleLineAndGetHeight = function createSingleLineAndGetHeight() {
        var tempText = (0, _utils.getText)(_this2.content);
        (0, _utils.setText)(_this2.content, '.');
        var height = (0, _utils.getHeight)(_this2.wrapper);
        (0, _utils.setText)(_this2.content, tempText);
        return height;
      };

      var lineHeight = (0, _utils.getStyle)(this.wrapper, 'line-height');

      if (lineHeight.indexOf('px') > -1) {
        return (0, _utils.num)(lineHeight);
      } else if (!isNaN(lineHeight)) {
        var fontSize = (0, _utils.getStyle)(this.wrapper, 'font-size');
        if (fontSize.indexOf('px') > -1) return (0, _utils.num)(fontSize) * (lineHeight * 100) / 100;
        if (fontSize.indexOf('pt') > -1) return (0, _utils.num)(fontSize) * 400 / 300 * (lineHeight * 100) / 100;
        return createSingleLineAndGetHeight();
      } else {
        return createSingleLineAndGetHeight();
      }
    }
  }, {
    key: 'clamp',
    value: function clamp() {
      var _props = this.props,
          children = _props.children,
          reverse = _props.reverse,
          lineTextLen = _props.lineTextLen;

      var text = children instanceof Array ? children.join('') : children;
      if (text === undefined || this.hasCssClamp) return;

      var currentHeight = (0, _utils.getHeight)(this.wrapper);
      var singleLineHeight = this.getSingleLineHeight();
      if (!currentHeight || !singleLineHeight) return;

      var maxHeight = singleLineHeight * this.clampNum;
      var defaultIncrease = (lineTextLen || Math.min(20, text.length / this.clampNum)) * this.clampNum;

      if (currentHeight > maxHeight) {
        this.ellipsis.style.display = '';
        this.textSlice(text, maxHeight, reverse, defaultIncrease, 0, false);
      } else {
        this.ellipsis.style.display = 'none';
      }
    }
  }, {
    key: 'textSlice',
    value: function textSlice(text, maxHeight, reverse, increase, len, isDecrease) {
      var i = void 0;

      (0, _utils.setText)(this.content, reverse ? text.substring(text.length - len) : text.substring(0, len));

      if ((0, _utils.getHeight)(this.wrapper) > maxHeight) {
        i = isDecrease ? increase : (0, _utils.int)(increase / 2) || 1;
        this.textSlice(text, maxHeight, reverse, i, len - i, true);
      } else {
        if (increase === 1 && isDecrease) {
          return;
        }
        i = isDecrease ? (0, _utils.int)(increase / 2) || 1 : increase;
        this.textSlice(text, maxHeight, reverse, i, len + i, false);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props2 = this.props,
          className = _props2.className,
          style = _props2.style,
          children = _props2.children,
          ellipsis = _props2.ellipsis,
          reverse = _props2.reverse;


      var wrapperCssClampStyle = _extends({}, style, {
        display: '-webkit-box',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        WebkitLineClamp: this.clampNum,
        WebkitBoxOrient: 'vertical'
      });

      var ellipsisEl = !this.hasCssClamp && _react2.default.createElement(
        'span',
        {
          ref: function ref(_ref) {
            _this3.ellipsis = _ref;
          },
          style: { display: 'none' }
        },
        ellipsis
      );

      return _react2.default.createElement(
        'div',
        {
          className: className,
          style: this.hasCssClamp ? wrapperCssClampStyle : style,
          ref: function ref(_ref3) {
            _this3.wrapper = _ref3;
          }
        },
        reverse && ellipsisEl,
        _react2.default.createElement(
          'span',
          { ref: function ref(_ref2) {
              _this3.content = _ref2;
            } },
          children
        ),
        !reverse && ellipsisEl
      );
    }
  }]);

  return Clamp;
}(_react2.default.Component), _class.propTypes = {
  className: _propTypes2.default.any,
  style: _propTypes2.default.any,
  children: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.arrayOf(_propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]))]),
  ellipsis: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]),
  clamp: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  reverse: _propTypes2.default.bool,
  disableCssClamp: _propTypes2.default.bool,
  lineTextLen: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
}, _class.defaultProps = {
  ellipsis: '...',
  clamp: 3,
  reverse: false,
  disableCssClamp: false
}, _temp);

exports.default = Clamp;