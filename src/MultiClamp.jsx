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
  constructor(props) {
    super(props);
    this.state = {
      ellipsisInit: true,
    };
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.ellipsisInit && !nextState.ellipsisInit) return true;
    return this.diffChildren(nextProps, this.props);
  }
  componentDidMount() {
    const ellipsisHtm = this.ellipsis.innerHTML;
    this.setState({
      ellipsisInit: false,
    }, () => {
      this.multiClamp = new MultiClamp(this.wrapper, {
        ...this.props,
        ellipsis: ellipsisHtm,
      });
    });
  }
  componentDidUpdate(prevProps) {
    if (this.diffChildren(this.props, prevProps)) {
      this.multiClamp.reload();
    }
  }
  diffChildren(nextProps, prevProps) {
    const nextChildren = nextProps.children;
    const prevChildren = prevProps.children;
    if (Array.isArray(prevChildren)) {
      return !Array.isArray(nextChildren) || nextChildren.join('') !== prevChildren.join('');
    }
    return prevChildren !== nextChildren;
  }
  render() {
    const { className, style, children, ellipsis } = this.props;

    return (<div
      className={className}
      style={style}
      ref={ref => { this.wrapper = ref; }}
    >
      {
        this.state.ellipsisInit ? <div
          style={{ display: 'none' }}
          ref={ref => { this.ellipsis = ref; }}
        >{ellipsis}</div> : children
      }
    </div>);
  }
};

export default Clamp;
