# react-multi-clamp [![npm](https://img.shields.io/npm/v/react-multi-clamp.svg?style=flat-square)](https://www.npmjs.com/package/react-multi-clamp)
Simple, efficient and easy-to-use multiline text clamp react component.

简单、高效、易用的多行文本裁剪react组件。

## Samples
Default multiline text clamp:

默认多行文本裁剪效果：

![Default multiline text clamp](https://raw.githubusercontent.com/jackyr/react-multi-clamp/master/example/sample1.png)

Custom ellipsis:

自定义省略符号：

![Custom ellipsis](https://raw.githubusercontent.com/jackyr/react-multi-clamp/master/example/sample2.png)

Resversed clamp:

反向裁剪：

![Resversed clamp](https://raw.githubusercontent.com/jackyr/react-multi-clamp/master/example/sample3.png)

## Browser compatibility
Supports IE9+ / Android4.4+ / etc. ES5 enviroment.

支持PC/移动设备所有兼容ES5环境的浏览器。

## Installation
You can install react-multi-clamp from npm.

你可以从npm安装react-multi-clamp组件。

```sh
npm install react-multi-clamp --save
```

## Usage
Import(ES6) or require(ES5) react-multi-clamp.

引入react-multi-clamp组件。

```js
import MultiClamp from 'react-multi-clamp';
```

```js
var MultiClamp = require('react-multi-clamp');
```

Just wrap the content in react-multi-clamp component.

将要裁减的内容包裹起来即可。

```html 
<MultiClamp ellipsis="..." clamp="3">React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.</MultiClamp>
```

## Options
#### `ellipsis`: PropTypes.string || PropTypes.element
Ellipsis can be string or react element. default: '...'

超出最大行数裁剪后的符号，可以为字符串或任意react元素。默认为：'...'

#### `clamp`: PropTypes.string || PropTypes.number
The max number of lines to show. default: 3

最大行数。默认为：3

#### `reverse`: PropTypes.bool
You can clamp the content from back to front, the ellipsis will be in the front. default: false

是否反向裁剪。反向将从后往前裁剪，ellipsis符号会显示在最前面。默认为：false

#### `disableCssClamp`: PropTypes.bool
React-multi-clamp will use native css clamp(-webkit-line-clamp) in supported browser when the ellipsis is set to '...'. If you don't want to use css clamp, set disableCssClamp to true. default: false

当ellipsis被设置为'...'时，组件会默认优先使用webkit的原生css裁剪（-webkit-line-clamp），如果想禁用css裁减，请将disableCssClamp设置为true。默认为：false

## Development and testing
从github仓库克隆代码进行开发调试

```sh
git clone git@github.com:jackyr/react-multi-clamp.git
cd react-multi-clamp
npm install
npm start
```

## License
MIT