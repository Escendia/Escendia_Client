import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgComponent = ({ title, titleId, ...props }: SvgProps & SVGRProps) => (
  <Svg viewBox={`0 0 23 20`} aria-labelledby={titleId} {...props}>
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      d="M22.5 2.747a8.84 8.84 0 0 1-2.585.76A4.632 4.632 0 0 0 21.895.85a9.175 9.175 0 0 1-2.86 1.168C18.21 1.084 17.027.5 15.735.5c-2.502 0-4.51 2.16-4.51 4.787 0 .379.027.73.11 1.08-3.74-.176-7.04-2.102-9.268-4.991C.472 4.41 2.26 6.92 3.442 7.767c-.715 0-1.43-.233-2.035-.583 0 2.364 1.568 4.32 3.603 4.757-.44.146-1.43.233-2.035.087.578 1.897 2.255 3.298 4.207 3.328C5.642 16.64 3.387 17.66.5 17.34c2.007 1.372 4.372 2.16 6.93 2.16 8.305 0 12.815-7.296 12.815-13.6 0-.205 0-.41-.027-.613.934-.73 1.704-1.577 2.282-2.54Z"
      fill={props.fill}
    />
  </Svg>
);

export default SvgComponent;
