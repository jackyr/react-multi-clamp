import React, { Component } from 'react';
import Tooltip from 'rc-tooltip';
import 'rc-tooltip/assets/bootstrap.css';
import MultiClamp from '../src/MultiClamp.jsx';

export default class MultiClampWithToolTip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      withToolTip: false,
    };
  }
  onClampStart = (e) => {
    if (!this.state.withToolTip && e.needClamp) {
      this.setState({
        withToolTip: true,
      });
      return false;
    }
  }
  render() {
    const clamp = <MultiClamp disableCssClamp onClampStart={this.onClampStart}>
      {this.props.children}
    </MultiClamp>;

    if (this.state.withToolTip) {
      return <Tooltip
        placement="top" 
        overlay={<div style={{ width: 500 }}>{this.props.children}</div>}
      >{clamp}</Tooltip>;
    }

    return clamp;
  }
}
