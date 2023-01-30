import React, { Children } from "react";
import {
  GestureResponderEvent,
  Text as RNText,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
  View,
} from "react-native";
import { colors } from "../services/styling/styles";
import EscendiaText from "./EscendiaText";

interface EscendiaButtonProps {
  children: React.ReactNode;
  textStyle?: TextStyle;
  style?: ViewStyle;
  onPress?: (event: GestureResponderEvent) => void;
  iconRight?: React.ReactNode;
  iconLeft?: React.ReactNode;
}

const EscendiaButton = ({
  children,
  onPress,
  style,
  textStyle,
  iconRight,
  iconLeft,
  ...rest
}: EscendiaButtonProps) => (
  <TouchableOpacity
    style={{
      borderWidth: 2,
      borderColor: colors.escendia_img_background_dark,
      padding: 5,
      alignItems: "center",
      flexDirection: "row",
      justifyContent: "center",
      ...style,
    }}
    onPress={onPress}
  >
    <View style={{ paddingRight: 5 }}>{iconLeft}</View>
    <EscendiaText style={{ color: colors.escendia_light, ...textStyle }}>
      {children}
    </EscendiaText>
    <View style={{ paddingLeft: 5 }}>{iconRight}</View>
  </TouchableOpacity>
);

export default EscendiaButton;
