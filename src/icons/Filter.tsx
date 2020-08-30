import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
interface Props extends SvgProps {
  size?: number;
}

const Filter = ({ size = 24, ...props }: Props) => {
  return (
    <Svg width={size} height={size} fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z"
        fill="#4A5568"
      />
    </Svg>
  );
};

export default Filter;
