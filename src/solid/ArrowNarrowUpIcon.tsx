import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
interface Props extends SvgProps {
  size?: number;
}

const ArrowNarrowUpIcon = ({ size = 24, ...props }: Props) => {
  return (
    <Svg
      fill="currentColor"
      aria-hidden="true"
      viewBox="0 0 20 20"
      width={size}
      height={size}
      {...props}
    >
      <Path
        fillRule="evenodd"
        d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"
        clipRule="evenodd"
      />
    </Svg>
  );
};

export default ArrowNarrowUpIcon;
