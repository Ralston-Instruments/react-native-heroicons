import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
interface Props extends SvgProps {
  size?: number;
}

const ChatAlt2 = ({ size = 24, ...props }: Props) => {
  return (
    <Svg width={size} height={size} fill="none" {...props}>
      <Path
        d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z"
        fill="#4B5563"
      />
      <Path
        d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z"
        fill="#4B5563"
      />
    </Svg>
  );
};

export default ChatAlt2;
