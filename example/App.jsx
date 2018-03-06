import React, { Component } from 'react';
import MultiClamp from '../src/MultiClamp.jsx';
import './App.css';

const text1 = 'React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.';
const text2 = "2009年12月，ECMAScript 5.0 版正式发布。Harmony 项目则一分为二，一些较为可行的设想定名为 JavaScript.next 继续开发，后来演变成 ECMAScript 6；一些不是很成熟的设想，则被视为 JavaScript.next.next，在更远的将来再考虑推出。TC39 委员会的总体考虑是，ES5 与 ES3 基本保持兼容，较大的语法修正和新功能加入，将由 JavaScript.next 完成。当时，JavaScript.next 指的是ES6，第六版发布以后，就指 ES7。TC39 的判断是，ES5 会在2013年的年中成为 JavaScript 开发的主流标准，并在此后五年中一直保持这个位置。";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: text1,
    }
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        text: 'When text changes example: ' + this.state.text,
      });
    }, 2000);
  }
  render() {
    return (
      <div className="App">
        <MultiClamp>{text1}</MultiClamp>
        <br />
        <MultiClamp disableCssClamp>{text1}</MultiClamp>
        <br />
        <MultiClamp clamp={2} ellipsis={<a style={{ color: 'blue', paddingLeft: '5px' }}>more>></a>} splitByWords>{text1}</MultiClamp>
        <br />
        <MultiClamp clamp={1} ellipsis="……" reverse>{text2}</MultiClamp>
        <br />
        <MultiClamp clamp="auto" style={{ height: '96px' }}>{text2}</MultiClamp>
        <br />
        <MultiClamp splitByWords>{this.state.text}</MultiClamp>
      </div>
    );
  }
}

export default App;
