import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgComponent = ({ title, titleId, ...props }: SvgProps & SVGRProps) => (
  <Svg viewBox={`0 0 30 36`} aria-labelledby={titleId} {...props}>
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      d="M21.585 0c-1.873.133-4.061 1.361-5.337 2.961-1.163 1.451-2.12 3.607-1.747 5.701 2.046.066 4.16-1.192 5.385-2.819C21.03 4.33 21.898 2.187 21.585 0Z"
      fill={props.fill}
    />
    <Path
      d="M28.984 12.078c-1.798-2.31-4.325-3.652-6.71-3.652-3.15 0-4.483 1.546-6.672 1.546-2.256 0-3.97-1.541-6.695-1.541-2.676 0-5.525 1.676-7.332 4.543-2.54 4.036-2.105 11.625 2.011 18.09 1.473 2.312 3.44 4.913 6.012 4.936 2.29.022 2.935-1.505 6.037-1.521 3.102-.018 3.69 1.541 5.975 1.516 2.575-.02 4.65-2.902 6.122-5.215 1.056-1.658 1.45-2.493 2.268-4.365-5.955-2.324-6.91-11.005-1.016-14.337Z"
      fill={props.fill}
    />
  </Svg>
);

export default SvgComponent;
