import React from 'react';
import PropTypes from 'prop-types';
import { int, num, setText, getText, getStyle, getHeight } from './utils';

const Clamp = class extends React.Component {
  static propTypes = {
    className: PropTypes.any,
    style: PropTypes.any,
    children: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
      ])),
    ]),
    ellipsis: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element,
    ]),
    clamp: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    reverse: PropTypes.bool,
    disableCssClamp: PropTypes.bool,
    lineTextLen: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
  }
  static defaultProps = {
    ellipsis: '...',
    clamp: 3,
    reverse: false,
    disableCssClamp: false,
  }
  constructor(props) {
    super(props);
    this.clampNum = int(props.clamp);
    if (isNaN(this.clampNum) || this.clampNum < 1) {
      throw new Error('Invaild clamp number!');
    }
    this.hasCssClamp = !props.disableCssClamp && !props.reverse && props.ellipsis === '...' && typeof document.body.style.webkitLineClamp !== 'undefined';
    this.getSingleLineHeight = this.getSingleLineHeight.bind(this);
    this.state = {};
  }
  shouldComponentUpdate(nextProps) {
    const nextChildren = nextProps.children;
    const children = this.props.children;
    if (children instanceof Array) {
      return !(nextChildren instanceof Array) || nextChildren.join('') !== children.join('');
    }
    return children !== nextChildren;
  }
  componentDidMount() {
    this.clamp();
  }
  componentDidUpdate() {
    this.clamp();
  }
  getSingleLineHeight() {
    const createSingleLineAndGetHeight = () => {
      const tempText = getText(this.content);
      setText(this.content, '.');
      const height = getHeight(this.wrapper);
      setText(this.content, tempText);
      return height;
    };

    const lineHeight = getStyle(this.wrapper, 'line-height');

    if (lineHeight.indexOf('px') > -1) {
      return num(lineHeight);
    } else if (!isNaN(lineHeight)) {
      const fontSize = getStyle(this.wrapper, 'font-size');
      if (fontSize.indexOf('px') > -1) return num(fontSize) * (lineHeight * 100) / 100;
      if (fontSize.indexOf('pt') > -1) return num(fontSize) * 400 / 300 * (lineHeight * 100) / 100;
      return createSingleLineAndGetHeight();
    } else {
      return createSingleLineAndGetHeight();
    }
  }
  clamp() {
    const { children, reverse, lineTextLen } = this.props;
    const text = children instanceof Array ? children.join('') : children;
    if (text === undefined || this.hasCssClamp) return;
    
    const currentHeight = getHeight(this.wrapper);
    const singleLineHeight = this.getSingleLineHeight();
    if (!currentHeight || !singleLineHeight) return;
    
    const maxHeight = singleLineHeight * this.clampNum;
    const defaultIncrease = (lineTextLen || Math.min(20, text.length / this.clampNum)) * this.clampNum;

    if (currentHeight > maxHeight) {
      this.ellipsis.style.display = '';
      this.textSlice(text, maxHeight, reverse, defaultIncrease, 0, false);
    } else {
      this.ellipsis.style.display = 'none';
    }
  }
  textSlice(text, maxHeight, reverse, increase, len, isDecrease) {
    let i;
    
    setText(this.content, reverse ? text.substring(text.length - len) : text.substring(0, len));

    if (getHeight(this.wrapper) > maxHeight) {
      i = isDecrease ? increase : int(increase / 2) || 1;
      this.textSlice(text, maxHeight, reverse, i, len - i, true);
    } else {
      if (increase === 1 && isDecrease) {
        return;
      }
      i = isDecrease ? int(increase / 2) || 1 : increase;
      this.textSlice(text, maxHeight, reverse, i, len + i, false);
    }
  }
  render() {
    const { className, style, children, ellipsis, reverse } = this.props;

    const wrapperCssClampStyle = {
      ...style,
      display: '-webkit-box',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      WebkitLineClamp: this.clampNum,
      WebkitBoxOrient: 'vertical',
    };

    const ellipsisEl = !this.hasCssClamp && (<span
      ref={ref => { this.ellipsis = ref; }}
      style={{ display: 'none' }}
    >{ellipsis}</span>);

    return (<div
      className={className}
      style={this.hasCssClamp ? wrapperCssClampStyle : style}
      ref={ref => { this.wrapper = ref; }}
    >
      {reverse && ellipsisEl}
      <span ref={ref => { this.content = ref; }}>{children}</span>
      {!reverse && ellipsisEl}
    </div>);
  }
};

export default Clamp;
