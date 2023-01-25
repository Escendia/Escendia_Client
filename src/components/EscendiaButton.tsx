import React, { Children } from "react";
import {
  GestureResponderEvent,
  Text as RNText,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from "react-native";
import { colors } from "../services/styling/styles";
import EscendiaText from "./EscendiaText";

interface EscendiaButtonProps {
  children: React.ReactNode;
  textStyle?: TextStyle;
  style?: ViewStyle;
  onPress?: (event: GestureResponderEvent) => void;
}

const EscendiaButton = ({
  children,
  onPress,
  style,
  textStyle,
  ...rest
}: EscendiaButtonProps) => (
  <TouchableOpacity
    style={{
      borderWidth: 2,
      borderColor: colors.escendia_img_background_dark,
      padding: 5,
      alignItems: "center",
      ...style,
    }}
    onPress={onPress}
  >
    <EscendiaText style={{ color: colors.escendia_light, ...textStyle }}>
      {children}
    </EscendiaText>
  </TouchableOpacity>
);

export default EscendiaButton;
