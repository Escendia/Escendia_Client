import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgComponent = ({ title, titleId, ...props }: SvgProps & SVGRProps) => (
  <Svg viewBox={`0 0 24 24`} aria-labelledby={titleId} {...props}>
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      d="M18 0H6C2.7 0 0 2.7 0 6v12c0 3.299 2.7 6 6 6h12c3.3 0 6-2.701 6-6V6c0-3.3-2.7-6-6-6Zm4 18c0 2.205-1.794 4-4 4H6c-2.205 0-4-1.795-4-4V6c0-2.206 1.795-4 4-4h12c2.206 0 4 1.794 4 4v12Z"
      fill={props.fill}
    />
    <Path
      d="M18.501 7a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM12 6a6 6 0 1 0 .001 12A6 6 0 0 0 12 6Zm0 10a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z"
      fill={props.fill}
    />
  </Svg>
);

export default SvgComponent;
