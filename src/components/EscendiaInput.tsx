import React, { Children } from "react";
import {
  View,
  TextStyle,
  NativeSyntheticEvent,
  TextInputChangeEventData,
  GestureResponderEvent,
} from "react-native";
import { TextInput as Input } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome";
import { colors } from "../services/styling/styles";
import Text from "./EscendiaText";

interface EscendiaInputProps {
  value?: string;
  style?: TextStyle;
  outlineStyle?: TextStyle;
  placeholder?: string;
  iconName?: string;
  textColor?: string | undefined;
  onChangeText?: ((e: string) => void) | undefined;
  onIconPress?: ((e: GestureResponderEvent) => void) | undefined;
  left?: React.ReactNode;
  right?: React.ReactNode;
  disabled?: boolean | undefined;
  hasBorder?: boolean | undefined;
  placeholderTextColor?: string | undefined;
}

/* 
      <Input.Icon
        icon="text-search"
        style={{ ...iconStyle }}
        onPress={onIconPress}
      />
*/
const EscendiaInput = ({
  placeholder,
  value,
  onChangeText,
  style,
  textColor,
  placeholderTextColor,
  outlineStyle,
  left,
  right,
  disabled,
  hasBorder,
}: EscendiaInputProps) => (
  <Input
    disabled={disabled}
    placeholder={placeholder}
    value={value}
    onChangeText={onChangeText}
    mode="outlined"
    dense={true}
    style={{
      padding: 2,
      backgroundColor: "transparent",
      fontFamily: "Josefin Sans",
      color: "white",
      fontSize: 20,
      ...style,
    }}
    outlineStyle={{
      borderRadius: hasBorder ? 1 : 0,
      borderColor: colors.escendia_img_background_light,
      ...outlineStyle,
    }}
    textColor={textColor ? textColor : colors.escendia_light}
    placeholderTextColor={
      placeholderTextColor ? placeholderTextColor : colors.escendia_text_faded
    }
    left={left}
    right={right}
  />
);

export default EscendiaInput;
