import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as React from "react";
import { TextStyle } from "react-native";

interface EscendiaIconProps {
  name: any;
  type: "MaterialCommunity" | undefined;
  size?: number;
  style?: TextStyle;
  color?: string;
  onPress?: (() => void) | undefined;
}

const EscendiaIcon = ({
  type,
  name,
  size,
  style,
  color,
  onPress,
}: EscendiaIconProps) => {
  return type === "MaterialCommunity" ? (
    <MaterialCommunityIcons
      style={{ ...style }}
      name={name}
      size={size ? size : 20}
      color={color ? color : "white"}
      onPress={onPress}
    />
  ) : undefined;
};

export default EscendiaIcon;
