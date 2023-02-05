import React, { useState } from "react";
import { GestureResponderEvent, TextStyle } from "react-native";
import { Button, TextInput as Input } from "react-native-paper";
import { colors } from "../../services/styling/styles";

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
  secureTextEntry?: boolean | undefined;
}

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
  secureTextEntry,
}: EscendiaInputProps) => {
  const [isSecure, setisSecure] = useState(secureTextEntry);

  return (
    <Input
      disabled={disabled}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      mode="outlined"
      dense={true}
      secureTextEntry={isSecure}
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
      right={
        secureTextEntry ? (
          <Input.Icon
            icon={"eye"}
            iconColor={"grey"}
            onPress={() => setisSecure(!isSecure)}
          />
        ) : (
          right
        )
      }
    />
  );
};

export default EscendiaInput;
