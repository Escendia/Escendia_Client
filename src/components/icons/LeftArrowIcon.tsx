import * as React from "react";
import Svg, { SvgProps, G, Path } from "react-native-svg";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgComponent = ({ title, titleId, ...props }: SVGRProps & SvgProps) => (
  <Svg viewBox={`0 0 256 256`} aria-labelledby={titleId} {...props}>
    {title ? <title id={titleId}>{title}</title> : null}
    <G
      style={{
        stroke: "none",
        strokeWidth: 0,
        strokeDasharray: "none",
        strokeLinecap: "butt",
        strokeLinejoin: "miter",
        strokeMiterlimit: 10,
        fill: "none",
        fillRule: "nonzero",
        opacity: 1,
      }}
    >
      <Path
        d="M65.75 90a3.499 3.499 0 0 0 2.475-5.974L29.2 45 68.225 5.975a3.5 3.5 0 1 0-4.95-4.95l-41.5 41.5a3.499 3.499 0 0 0 0 4.949l41.5 41.5A3.487 3.487 0 0 0 65.75 90z"
        transform="matrix(2.81 0 0 2.81 1.407 1.407)"
        fill={props.fill}
      />
    </G>
  </Svg>
);

export default SvgComponent;
