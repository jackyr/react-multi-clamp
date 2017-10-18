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

var _multiClamp = require('multi-clamp');

var _multiClamp2 = _interopRequireDefault(_multiClamp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Clamp = (_temp = _class = function (_React$Component) {
  _inherits(Clamp, _React$Component);

  function Clamp() {
    _classCallCheck(this, Clamp);

    return _possibleConstructorReturn(this, (Clamp.__proto__ || Object.getPrototypeOf(Clamp)).apply(this, arguments));
  }

  _createClass(Clamp, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      var nextChildren = nextProps.children;
      var children = this.props.children;
      if (Array.isArray(children)) {
        return !Array.isArray(nextChildren) || nextChildren.join('') !== children.join('');
      }
      return children !== nextChildren;
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var ellipsisHtm = this.ellipsis.innerHTML;
      this.ellipsis.parentNode.removeChild(this.ellipsis);

      this.multiClamp = new _multiClamp2.default(this.wrapper, _extends({}, this.props, {
        ellipsis: ellipsisHtm
      }));
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.multiClamp.reload();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          className = _props.className,
          style = _props.style,
          children = _props.children,
          ellipsis = _props.ellipsis;


      return _react2.default.createElement(
        'div',
        {
          className: className,
          style: style,
          ref: function ref(_ref2) {
            _this2.wrapper = _ref2;
          }
        },
        children,
        _react2.default.createElement(
          'span',
          {
            style: { display: 'none' },
            ref: function ref(_ref) {
              _this2.ellipsis = _ref;
            }
          },
          ellipsis
        )
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
  splitByWords: _propTypes2.default.bool,
  disableCssClamp: _propTypes2.default.bool,
  lineTextLen: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
}, _class.defaultProps = {
  ellipsis: '...',
  clamp: 3,
  reverse: false,
  splitByWords: false,
  disableCssClamp: false
}, _temp);

exports.default = Clamp;