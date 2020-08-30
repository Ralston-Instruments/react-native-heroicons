import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
interface Props extends SvgProps {
  size?: number;
}

const MenuAlt4 = ({ size = 24, ...props }: Props) => {
  return (
    <Svg width={size} height={size} fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 7a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 13a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
        fill="#4A5568"
      />
    </Svg>
  );
};

export default MenuAlt4;
