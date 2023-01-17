import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgComponent = ({ title, titleId, ...props }: SvgProps & SVGRProps) => (
  <Svg viewBox={`0 0 13 24`} aria-labelledby={titleId} {...props}>
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      d="M8.29 23.5V13.01h3.536l.53-4.09H8.29V6.31c0-1.184.329-1.991 2.036-1.991l2.174-.001V.66C12.124.611 10.833.5 9.331.5 6.195.5 4.047 2.406 4.047 5.904V8.92H.5v4.09h3.547V23.5H8.29Z"
      fill={props.fill}
    />
  </Svg>
);

export default SvgComponent;
