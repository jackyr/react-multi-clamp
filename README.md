# react-multi-clamp [![npm](https://img.shields.io/npm/v/react-multi-clamp.svg?style=flat-square)](https://www.npmjs.com/package/react-multi-clamp)
Simple, efficient and easy-to-use multiline text clamp react component. (supports reverse clamp)

简单、高效、易用的多行文本裁剪react组件。（支持反向裁剪）

Encapsulation based on [multi-clamp](https://github.com/jackyr/multi-clamp) module [![npm](https://img.shields.io/npm/v/multi-clamp.svg?style=flat-square)](https://www.npmjs.com/package/multi-clamp)

本组件基于[multi-clamp](https://github.com/jackyr/multi-clamp)模块封装

## Samples
Default multiline text clamp:

默认多行文本裁剪效果：

![Default multiline text clamp](https://raw.githubusercontent.com/jackyr/react-multi-clamp/master/example/sample1.png)

Custom ellipsis:

自定义省略符号：

![Custom ellipsis](https://raw.githubusercontent.com/jackyr/react-multi-clamp/master/example/sample2.png)

Reverse clamp:

反向裁剪：

![Reversed clamp](https://raw.githubusercontent.com/jackyr/react-multi-clamp/master/example/sample3.png)

[Demo Page](https://jackyr.github.io/react-multi-clamp/site/)

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
Import react-multi-clamp.

引入react-multi-clamp组件。

```js
import MultiClamp from 'react-multi-clamp';
```

Just wrap the content(**must be pure text**) in react-multi-clamp component.

将要裁减的内容（**必须为纯文本**）包裹起来即可。

```html 
<MultiClamp ellipsis="..." clamp={3}>{longText}</MultiClamp>
```

## Options
#### `ellipsis`: PropTypes.string || PropTypes.element
Ellipsis can be string or react element. default: '...'

超出最大行数裁剪后的符号，可以为字符串或任意react元素。默认为：'...'

#### `clamp`: PropTypes.number || 'auto'
The max number of lines to show. It will try to fill up the available space when set to string 'auto', and at this point you should set a static height on the text container element. default: 3

最大行数。设置为字符串'auto'时会根据最大高度自适应裁剪，此时文本容器需要定义高度。默认为：3

#### `reverse`: PropTypes.bool
You can clamp the content from back to front, the ellipsis will be in the front. default: false

是否反向裁剪。反向将从后往前裁剪，ellipsis符号会显示在最前面。默认为：false

#### `splitByWords`: PropTypes.bool
The default behavior is to split by letters. If you want to split by words, set splitByWords to true. default: false

组件对于英文文本默认按字符进行裁剪。如果希望按单词裁剪，请将splitByWords设置为true。默认为：false

#### `disableCssClamp`: PropTypes.bool
React-multi-clamp will use native css clamp(-webkit-line-clamp) in supported browser when the ellipsis is set to '...'. If you don't want to use css clamp, set disableCssClamp to true. default: false

当ellipsis被设置为'...'时，组件会默认优先使用webkit的原生css裁剪（-webkit-line-clamp），如果想禁用css裁减，请将disableCssClamp设置为true。默认为：false

#### `onClampStart`: function({ needClamp: boolean }): void || false
This callback function will be executed when clamp starts, and will not be executed when use native css clamp. Clamp will be prevented when return value is false. default: function() {}

该回调函数在clamp开始时触发，使用原生css裁剪时不会触发。返回值为false时强制不进行clamp。默认为：function() {}

#### `onClampEnd`: function({ didClamp: boolean }): void
This callback function will be executed when clamp ends, and will not be executed when use native css clamp. default: function() {}

该回调函数在clamp结束时触发，使用原生css裁剪时不会触发。默认为：function() {}

## Testing
```sh
git clone git@github.com:jackyr/react-multi-clamp.git
cd react-multi-clamp
npm install
npm start
```

## Changelog
#### v2.0.5
- Typescript definitions bugfix. [#11](https://github.com/jackyr/react-multi-clamp/pull/11)
- ts类型定义bug修正。 [#11](https://github.com/jackyr/react-multi-clamp/pull/11)

#### v2.0.4
- Typescript definitions bugfix. [#9](https://github.com/jackyr/react-multi-clamp/issues/9)
- ts类型定义bug修正。 [#9](https://github.com/jackyr/react-multi-clamp/issues/9)

#### v2.0.3
- Add typescript definitions. [#8](https://github.com/jackyr/react-multi-clamp/pull/8)
- 增加ts类型定义。 [#8](https://github.com/jackyr/react-multi-clamp/pull/8)

#### v2.0.2
- Bugfix when passing element object to option ellipsis. [#5](https://github.com/jackyr/react-multi-clamp/issues/5)
- 裁剪符号为react元素时bug修正。[#5](https://github.com/jackyr/react-multi-clamp/issues/5)

#### v2.0.1
- Bugfix when passing element object to option ellipsis. [#3](https://github.com/jackyr/react-multi-clamp/issues/3)
- 裁剪符号为react元素时bug修正。[#3](https://github.com/jackyr/react-multi-clamp/issues/3)

#### v2.0.0
- Dependency [multi-clamp](https://github.com/jackyr/multi-clamp) update to v2.0, refactoring. [multi-clamp#3](https://github.com/jackyr/multi-clamp/issues/3)
- 依赖[multi-clamp](https://github.com/jackyr/multi-clamp)升级至v2.0，其内部实现重构。[multi-clamp#3](https://github.com/jackyr/multi-clamp/issues/3)

## License
MIT