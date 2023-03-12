import React from "react";
import {
  GestureResponderEvent,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import { colors } from "../../services/styling/styles";
import EscendiaText from "./EscendiaText";

interface EscendiaButtonProps {
  children: React.ReactNode;
  textStyle?: TextStyle;
  style?: ViewStyle;
  onPress?: (event: GestureResponderEvent) => void;
  iconRight?: React.ReactNode;
  iconLeft?: React.ReactNode;
  disabled?: boolean;
}

const EscendiaButton = ({
  children,
  onPress,
  style,
  textStyle,
  iconRight,
  iconLeft,
  disabled,
  ...rest
}: EscendiaButtonProps) => (
  <TouchableOpacity
    style={{
      borderWidth: 1,
      borderColor: colors.escendia_img_background_dark,
      padding: 5,
      alignItems: "center",
      flexDirection: "row",
      justifyContent: "center",
      ...style,
    }}
    onPress={onPress}
    disabled={disabled}
  >
    <View style={{ paddingRight: 5 }}>{iconLeft}</View>
    <EscendiaText
      style={{
        //marginTop: iconRight === undefined && iconLeft === undefined ? 0 : 5,
        color: colors.escendia_light,
        ...textStyle,
      }}
    >
      {children}
    </EscendiaText>
    <View style={{ paddingLeft: 5 }}>{iconRight}</View>
  </TouchableOpacity>
);

export default EscendiaButton;
