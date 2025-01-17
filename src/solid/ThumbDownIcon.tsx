import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
interface Props extends SvgProps {
  size?: number;
}

const ThumbDownIcon = ({ size = 24, ...props }: Props) => {
  return (
    <Svg
      fill="currentColor"
      aria-hidden="true"
      viewBox="0 0 20 20"
      width={size}
      height={size}
      {...props}
    >
      <Path d="M18 9.5a1.5 1.5 0 11-3 0v-6a1.5 1.5 0 013 0v6zm-4 .167v-5.43a2 2 0 00-1.105-1.79l-.05-.025A4 4 0 0011.055 2H5.64a2 2 0 00-1.962 1.608l-1.2 6A2 2 0 004.44 12H8v4a2 2 0 002 2 1 1 0 001-1v-.667a4 4 0 01.8-2.4l1.4-1.866a4 4 0 00.8-2.4z" />
    </Svg>
  );
};

export default ThumbDownIcon;
