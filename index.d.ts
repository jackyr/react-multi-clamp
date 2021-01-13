declare module "react-multi-clamp" {
  import React from "react";

  export type ReloadOptions = {
    /**
     * Ellipsis can be string, HTML string or element object.
     * 
     * 超出最大行数裁剪后的符号，可以为字符串，html字符串或任意html元素。
     * 
     * @default "..."
     */
    ellipsis?: string | HTMLElement;

    /**
     * The max number of lines to show. It will try to fill up the available space when set to string 'auto', and at this point you should set a static height on the text container element.
     * 
     * 最大行数。设置为字符串'auto'时会根据最大高度自适应裁剪，此时文本容器需要定义高度。
     * 
     * @default 3
     */
    clamp?: string | number;

    /**
     * You can clamp the content from back to front, the ellipsis will be in the front.
     * 
     * 是否反向裁剪。反向将从后往前裁剪，ellipsis符号会显示在最前面。
     * 
     * @default false
     */
    reverse?: boolean;

    /**
     * The default behavior is to split by letters. If you want to split by words, set splitByWords to true.
     * 
     * 组件对于英文文本默认按字符进行裁剪。如果希望按单词裁剪，请将splitByWords设置为true。
     * 
     * @default false
     */
    splitByWords?: boolean;

    /**
     * React-multi-clamp will use native css clamp(-webkit-line-clamp) in supported browser when the ellipsis is set to '...'. If you don't want to use css clamp, set `disableCssClamp` to `true`.
     * 
     * 当ellipsis被设置为'...'时，组件会默认优先使用webkit的原生css裁剪（-webkit-line-clamp），如果想禁用css裁减，请将disableCssClamp设置为true。
     * 
     * @default false
     */
    disableCssClamp?: boolean;

    lineTextLen?: string | number;

    /**
     * This callback function will be executed when clamp starts, and will not be executed when use native css clamp. Clamp will be prevented when return value is false.
     * 
     * 该回调函数在clamp开始时触发，使用原生css裁剪时不会触发。返回值为false时强制不进行clamp。
     * 
     * @default function() {}
     */
    onClampStart?: (result: { needClamp: boolean }) => void | false;

    /**
     * This callback function will be executed when clamp ends, and will not be executed when use native css clamp.
     * 
     * 该回调函数在clamp结束时触发，使用原生css裁剪时不会触发。
     * 
     * @default function() {}
     */
    onClampEnd?: (result: { didClamp: boolean }) => void;

    /**
     * Use the original text to re-clamp when options.useOriginalText set to true.
     * 
     * 是否使用原始文本重新裁剪。
     * 
     * @default false
     */
    useOriginalText?: boolean;
  };

  export type MultiClampHTMLDivElement = HTMLDivElement & {
    multiClamp: {
      reload(options?: ReloadOptions): void;
    };
  };

  export type ClampProps = {
    /**
     * Ellipsis can be string or react element.
     * 
     * 超出最大行数裁剪后的符号，可以为字符串或任意react元素。
     * 
     * @default "..."
     */
    ellipsis?: string | JSX.Element;

    /**
     * The max number of lines to show. It will try to fill up the available space when set to string 'auto', and at this point you should set a static height on the text container element.
     * 
     * 最大行数。设置为字符串'auto'时会根据最大高度自适应裁剪，此时文本容器需要定义高度。
     * 
     * @default 3
     */
    clamp?: string | number;

    /**
     * You can clamp the content from back to front, the ellipsis will be in the front.
     * 
     * 是否反向裁剪。反向将从后往前裁剪，ellipsis符号会显示在最前面。
     * 
     * @default false
     */
    reverse?: boolean;

    /**
     * The default behavior is to split by letters. If you want to split by words, set splitByWords to true.
     * 
     * 组件对于英文文本默认按字符进行裁剪。如果希望按单词裁剪，请将splitByWords设置为true。
     * 
     * @default false
     */
    splitByWords?: boolean;

    /**
     * React-multi-clamp will use native css clamp(-webkit-line-clamp) in supported browser when the ellipsis is set to '...'. If you don't want to use css clamp, set `disableCssClamp` to `true`.
     * 
     * 当ellipsis被设置为'...'时，组件会默认优先使用webkit的原生css裁剪（-webkit-line-clamp），如果想禁用css裁减，请将disableCssClamp设置为true。
     * 
     * @default false
     */
    disableCssClamp?: boolean;

    lineTextLen?: string | number;

    /**
     * This callback function will be executed when clamp starts, and will not be executed when use native css clamp. Clamp will be prevented when return value is false.
     * 
     * 该回调函数在clamp开始时触发，使用原生css裁剪时不会触发。返回值为false时强制不进行clamp。
     * 
     * @default function() {}
     */
    onClampStart?: (result: { needClamp: boolean }) => void | false;

    /**
     * This callback function will be executed when clamp ends, and will not be executed when use native css clamp.
     * 
     * 该回调函数在clamp结束时触发，使用原生css裁剪时不会触发。
     * 
     * @default function() {}
     */
    onClampEnd?: (result: { didClamp: boolean }) => void;

    ref?: React.Ref<MultiClampHTMLDivElement | undefined>;
  };

  const Clamp: React.FC<ClampProps>;

  export default Clamp;
}
