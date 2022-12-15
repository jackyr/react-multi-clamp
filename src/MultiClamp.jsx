import React from 'react';
import PropTypes from 'prop-types';
import MultiClamp from 'multi-clamp';

const Clamp = class extends React.Component {
  static propTypes = {
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
    onClampStart: PropTypes.func,
    onClampEnd: PropTypes.func,
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
    const ellipsisElementMode = React.isValidElement(this.props.ellipsis) && React.Children.count(this.props.ellipsis) === 1;
    this.state = {
      ellipsisInit: !ellipsisElementMode,
      ellipsisElementMode,
    };
  }
  componentDidMount() {
    let ellipsis;

    if (this.state.ellipsisElementMode) {
      ellipsis = this.wrapper.previousElementSibling || this.wrapper.previousSibling;
    } else {
      ellipsis = this.ellipsis.innerHTML;
    }

    this.setState({
      ellipsisInit: false,
    }, () => {
      const self = this;
      this.multiClamp = new MultiClamp(this.wrapper, {
        ...this.props,
        ellipsis,
        onClampEnd(...args) {
          if (ellipsis === (self.wrapper.previousElementSibling || self.wrapper.previousSibling)) {
            self.wrapper.parentNode.removeChild(ellipsis);
          }
          if (self.props.onClampEnd) {
            self.props.onClampEnd.apply(this, args);
          }
        },
      });
    });
  }
  componentDidUpdate(prevProps) {
    if (this.multiClamp && this.diffChildren(this.props, prevProps)) {
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
    const { children, ellipsis } = this.props;
    const props = { ...this.props };

    'key|ellipsis|clamp|reverse|splitByWords|disableCssClamp|lineTextLen|onClampStart|onClampEnd'
      .split('|').forEach(v => delete props[v]);

    return (<>
      {this.state.ellipsisElementMode && ellipsis}
      <div
        {...props}
        ref={ref => { this.wrapper = ref; }}
      >
        {
          this.state.ellipsisInit ? <div
            style={{ display: 'none' }}
            ref={ref => { this.ellipsis = ref; }}
          >{ellipsis}</div> : children
        }
      </div>
    </>);
  }
};

export default Clamp;
