declare module "react-multi-clamp" {
  import React from "react";

  export type ReloadOptions = {
    ellipsis?: string | HTMLElement;
    clamp?: string | number;
    reverse?: boolean;
    splitByWords?: boolean;
    disableCssClamp?: boolean;
    lineTextLen?: string | number;
    onClampStart?: (result: { needClamp: boolean }) => void;
    onClampEnd?: (result: { didClamp: boolean }) => void;
    useOriginalText?: boolean;
  };

  export type MultiClampHTMLDivElement = HTMLDivElement & {
    multiClamp: {
      reload(options?: ReloadOptions): void;
    };
  };

  export type ClampProps = {
    ellipsis?: string | JSX.Element;
    clamp?: string | number;
    reverse?: boolean;
    splitByWords?: boolean;
    disableCssClamp?: boolean;
    lineTextLen?: string | number;
    onClampStart?: (result: { needClamp: boolean }) => void;
    onClampEnd?: (result: { didClamp: boolean }) => void;
    ref?: Ref<MultiClampHTMLDivElement>;
  };

  declare const Clamp: React.FC<ClampProps>;

  export default Clamp;
}
