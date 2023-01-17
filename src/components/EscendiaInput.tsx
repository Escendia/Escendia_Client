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
  iconStyle?: TextStyle;
  placeholder?: string;
  iconName?: string;
  textColor?: string;
  onChangeText?: ((e: string) => void) | undefined;
  onIconPress?: ((e: GestureResponderEvent) => void) | undefined;
}

const TextInput = ({
  placeholder,
  value,
  onChangeText,
  style,
  textColor,
  outlineStyle,
  onIconPress,
  iconStyle,
}: EscendiaInputProps) => (
  <Input
    placeholder={placeholder}
    value={value}
    onChangeText={onChangeText}
    textColor={textColor}
    mode="outlined"
    dense={true}
    style={{
      flex: 1,
      backgroundColor: "transparent",
      fontFamily: "Josefin Sans",
      color: colors.escendia_text_faded,
      fontSize: 20,
      ...style,
    }}
    outlineStyle={{ ...outlineStyle }}
    left={
      <Input.Icon
        icon="text-search"
        style={{ ...iconStyle }}
        onPress={onIconPress}
      />
    }
  />
);

TextInput.defaultProps = {
  inputStyle: {
    color: colors.escendia_text_faded,
    fontFamily: "Josefin Sans",
  },
  style: {
    backgroundColor: "transparent",
    borderBottomWidth: 1,
    borderBottomColor: colors.escendia_dark,
    height: 20,
    fontSize: 20,
    paddingBottom: 0,
  },
  outlineStyle: {
    borderColor: "transparent",
    borderRadius: 0,
  },
  iconStyle: {
    paddingBottom: 4,
  },
  textColor: colors.escendia_text_faded,
};

export default TextInput;
