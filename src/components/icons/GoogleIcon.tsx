import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgComponent = ({ title, titleId, ...props }: SvgProps & SVGRProps) => (
  <Svg viewBox={`0 0 33 36`} aria-labelledby={titleId} {...props}>
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      d="M6.582.576C5.205-.203 3.588-.184 2.22.587l16.038 15.13 5.387-5.51L6.582.576ZM.616 2.135A4.266 4.266 0 0 0 0 4.333V31.66c0 .77.205 1.503.574 2.144L16.702 17.31.616 2.135ZM30.79 14.239l-5.14-2.9-5.775 5.903 7.077 6.676 3.84-2.167c1.38-.783 2.208-2.187 2.208-3.757-.002-1.57-.827-2.974-2.21-3.755ZM18.32 18.836 2.147 35.375c.702.41 1.472.625 2.247.625.748 0 1.5-.193 2.189-.583l18.341-10.351-6.604-6.23Z"
      fill={props.fill}
    />
  </Svg>
);

export default SvgComponent;
