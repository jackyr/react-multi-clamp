import React from 'react';
import PropTypes from 'prop-types';
import MultiClamp from 'multi-clamp';

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
    splitByWords: PropTypes.bool,
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
    splitByWords: false,
    disableCssClamp: false,
  }
  shouldComponentUpdate(nextProps) {
    const nextChildren = nextProps.children;
    const children = this.props.children;
    if (Array.isArray(children)) {
      return !Array.isArray(nextChildren) || nextChildren.join('') !== children.join('');
    }
    return children !== nextChildren;
  }
  componentDidMount() {
    let ellipsisHtm = this.ellipsis.innerHTML;
    this.ellipsis.parentNode.removeChild(this.ellipsis);

    this.multiClamp = new MultiClamp(this.wrapper, {
      ...this.props,
      ellipsis: ellipsisHtm,
    });
  }
  componentDidUpdate() {
    this.multiClamp.reload();
  }
  render() {
    const { className, style, children, ellipsis } = this.props;

    return (<div
      className={className}
      style={style}
      ref={ref => { this.wrapper = ref; }}
    >
      {children}
      <span
        style={{ display: 'none' }}
        ref={ref => { this.ellipsis = ref; }}
      >{ellipsis}</span>
    </div>);
  }
};

export default Clamp;
