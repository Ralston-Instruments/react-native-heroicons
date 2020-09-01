import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
interface Props extends SvgProps {
  size?: number;
}

const ChartPie = ({ size = 24, ...props }: Props) => {
  return (
    <Svg
      viewBox="0 0 20 20"
      fill="currentColor"
      width={size}
      height={size}
      {...props}
    >
      <Path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
      <Path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
    </Svg>
  );
};

export default ChartPie;
