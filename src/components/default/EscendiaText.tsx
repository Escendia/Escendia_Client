import React from "react";
import {
  GestureResponderEvent,
  Text as RNText,
  TextStyle,
  TouchableOpacity
} from "react-native";
import { colors } from "../../services/styling/styles";


interface EscendiaTextProps {
  fontFamily?: string;
  children: React.ReactNode;
  style?: TextStyle;
  color: string;
  onPress?: (event: GestureResponderEvent) => void;
  fontSize: number;
  fontWeight?:
    | "normal"
    | "bold"
    | "100"
    | "200"
    | "300"
    | "400"
    | "500"
    | "600"
    | "700"
    | "800"
    | "900"
    | undefined;
}

const EscendiaText = ({
  color,
  style,
  children,
  fontFamily,
  onPress,
  fontSize,
  fontWeight,
  ...rest
}: EscendiaTextProps) =>
  onPress != null ? (
    <TouchableOpacity onPress={onPress}>
      <RNText
        {...rest}
        style={{
          fontWeight: fontWeight,
          fontSize: fontSize,
          fontFamily: fontFamily,
          color: color,
          ...style,
        }}
      >
        {children}
      </RNText>
    </TouchableOpacity>
  ) : (
    <RNText
      {...rest}
      style={{
        fontWeight: fontWeight,
        fontSize: fontSize,
        fontFamily: fontFamily,
        color: color,
        ...style,
      }}
    >
      {children}
    </RNText>
  );

  EscendiaText.defaultProps = {
  fontFamily: "Josefin Sans",
  color: colors.escendia_dark,
  fontSize: 20,
  fontWeight: "400",
};

export default EscendiaText;
