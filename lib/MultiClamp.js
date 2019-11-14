"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _multiClamp = _interopRequireDefault(require("multi-clamp"));

var _class, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Clamp = (_temp = _class =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Clamp, _React$Component);

  function Clamp(props) {
    var _this;

    _classCallCheck(this, Clamp);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Clamp).call(this, props));
    var ellipsisElementMode = _react["default"].isValidElement(_this.props.ellipsis) && _react["default"].Children.count(_this.props.ellipsis) === 1;
    _this.state = {
      ellipsisInit: !ellipsisElementMode,
      ellipsisElementMode: ellipsisElementMode
    };
    return _this;
  }

  _createClass(Clamp, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var ellipsis;

      if (this.state.ellipsisElementMode) {
        ellipsis = this.wrapper.previousElementSibling || this.wrapper.previousSibling;
      } else {
        ellipsis = this.ellipsis.innerHTML;
      }

      this.setState({
        ellipsisInit: false
      }, function () {
        _this2.multiClamp = new _multiClamp["default"](_this2.wrapper, _objectSpread({}, _this2.props, {
          ellipsis: ellipsis
        }));
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.diffChildren(this.props, prevProps)) {
        this.multiClamp.reload();
      }
    }
  }, {
    key: "diffChildren",
    value: function diffChildren(nextProps, prevProps) {
      var nextChildren = nextProps.children;
      var prevChildren = prevProps.children;

      if (Array.isArray(prevChildren)) {
        return !Array.isArray(nextChildren) || nextChildren.join('') !== prevChildren.join('');
      }

      return prevChildren !== nextChildren;
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props = this.props,
          children = _this$props.children,
          ellipsis = _this$props.ellipsis;

      var props = _objectSpread({}, this.props);

      'key|ellipsis|clamp|reverse|splitByWords|disableCssClamp|lineTextLen|onClampStart|onClampEnd'.split('|').forEach(function (v) {
        return delete props[v];
      });
      return _react["default"].createElement(_react["default"].Fragment, null, this.state.ellipsisElementMode && ellipsis, _react["default"].createElement("div", _extends({}, props, {
        ref: function ref(_ref2) {
          _this3.wrapper = _ref2;
        }
      }), this.state.ellipsisInit ? _react["default"].createElement("div", {
        style: {
          display: 'none'
        },
        ref: function ref(_ref) {
          _this3.ellipsis = _ref;
        }
      }, ellipsis) : children));
    }
  }]);

  return Clamp;
}(_react["default"].Component), _defineProperty(_class, "propTypes", {
  children: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].arrayOf(_propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]))]),
  ellipsis: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].element]),
  clamp: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  reverse: _propTypes["default"].bool,
  splitByWords: _propTypes["default"].bool,
  disableCssClamp: _propTypes["default"].bool,
  lineTextLen: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  onClampStart: _propTypes["default"].func,
  onClampEnd: _propTypes["default"].func
}), _defineProperty(_class, "defaultProps", {
  ellipsis: '...',
  clamp: 3,
  reverse: false,
  splitByWords: false,
  disableCssClamp: false
}), _temp);
var _default = Clamp;
exports["default"] = _default;