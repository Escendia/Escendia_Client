import { uuidv4 } from "@firebase/util";
import React, { useEffect, useState } from "react";
import { InteractionManager, NativeSyntheticEvent } from "react-native";
import { TextInput } from "react-native";
import { TextInputSubmitEditingEventData } from "react-native";
import { TextInputKeyPressEventData } from "react-native";
import { GestureResponderEvent, TextStyle } from "react-native";
import { Button, TextInput as Input } from "react-native-paper";
import { colors } from "../../services/styling/styles";

interface EscendiaInputProps {
  value?: string;
  style?: TextStyle;
  outlineStyle?: TextStyle;
  contentStyle?: TextStyle;
  placeholder?: string;
  iconName?: string;
  iconColor?: string;
  textColor?: string | undefined;
  onChangeText?: ((e: string) => void) | undefined;
  onConfirm?: ((e: string) => void) | undefined;
  onIconPress?: ((e: GestureResponderEvent) => void) | undefined;
  onChangeStart?: (() => void) | undefined;
  setToggle?: ((e: boolean) => void) | undefined;
  left?: React.ReactNode;
  right?: React.ReactNode;
  disabled?: boolean | undefined;
  editable?: boolean | undefined;
  placeholderTextColor?: string | undefined;
  secureTextEntry?: boolean | undefined;
  dense?: boolean;
  selectionColor?: string | undefined;
  mode?: "outlined" | "flat" | undefined;
  toggle?: boolean | undefined;
}

const EscendiaInput = ({
  placeholder,
  value,
  onChangeText,
  onConfirm,
  style,
  textColor,
  placeholderTextColor,
  outlineStyle,
  left,
  right,
  disabled,
  secureTextEntry,
  dense,
  contentStyle,
  editable,
  iconColor,
  selectionColor,
  mode,
  onChangeStart,
  toggle,
  setToggle,
}: EscendiaInputProps) => {
  const [isSecure, setIsSecure] = useState(secureTextEntry);

  const [isDisabled, setIsDisabled] = useState(disabled);
  const [isEditable, setIsEditable] = useState(true);

  const [valueForEdit, setValueForEdit] = useState(value);
  const [key, setKey] = useState(uuidv4());
  const [ref, setRef] = useState(React.createRef<TextInput>());

  useEffect(() => {
    if (disabled === undefined && editable === undefined) {
      setIsDisabled(false);
    }

    if (disabled === undefined && editable !== undefined) {
      setIsDisabled(true);
    }

    if (disabled === false && editable === true) {
      setIsEditable(false);
    }
  }, []);

  useEffect(() => {
    if (toggle) {
      setIsEditable(!isEditable);
      setIsDisabled(!isDisabled);
      setToggle(!toggle);
    }
  }, [toggle]);

  useEffect(() => {
    setValueForEdit(value);
  }, [value]);

  useEffect(() => {
    console.log("isDisabled", isDisabled);
  }, [isDisabled]);

  return (
    <Input
      ref={ref}
      key={key}
      dense={dense}
      disabled={isDisabled}
      placeholder={placeholder}
      value={value ? value : valueForEdit}
      onChangeText={(e) => {
        onChangeText ? onChangeText(e) : setValueForEdit(e);
      }}
      onSubmitEditing={(
        e: NativeSyntheticEvent<TextInputSubmitEditingEventData>
      ) => {
        if (editable) {
          setIsEditable(!isEditable);
          setIsDisabled(!isDisabled);
        }
        if (onConfirm) onConfirm(valueForEdit);
      }}
      onKeyPress={(e: NativeSyntheticEvent<TextInputKeyPressEventData>) => {
        if (e.nativeEvent.key === "Enter") {
          if (editable) {
            setIsEditable(!isEditable);
            setIsDisabled(!isDisabled);
          }
          if (onConfirm) onConfirm(valueForEdit);
        }
      }}
      mode={mode ? mode : "outlined"}
      secureTextEntry={isSecure}
      contentStyle={{ paddingLeft: isDisabled ? 0 : 15, ...contentStyle }}
      style={{
        padding: 2,
        backgroundColor: "transparent",
        fontFamily: "Josefin Sans",
        color: "white",
        fontSize: 20,
        ...style,
      }}
      outlineStyle={{
        borderRadius: isDisabled ? 0 : 1,
        borderColor: isDisabled
          ? "transparent"
          : colors.escendia_img_background_light,
        ...outlineStyle,
      }}
      textColor={textColor ? textColor : colors.escendia_light}
      placeholderTextColor={
        placeholderTextColor ? placeholderTextColor : colors.escendia_text_faded
      }
      selectionColor={selectionColor ? selectionColor : "grey"}
      left={left}
      right={
        editable ? (
          <Input.Icon
            icon={isEditable ? "pencil" : "content-save"}
            iconColor={iconColor ? iconColor : "white"}
            onPress={() => {
              setIsEditable(!isEditable);
              setIsDisabled(!isDisabled);
              if (isEditable) {
                //Hier Auto Open Keyboad ?!
                ref.current.focus();
                if (onChangeStart) onChangeStart();
              } else {
                if (onChangeText) onChangeText(valueForEdit);
              }
            }}
          />
        ) : secureTextEntry ? (
          <Input.Icon
            icon={isSecure ? "eye" : "eye-off"}
            iconColor={iconColor ? iconColor : "white"}
            onPress={() => setIsSecure(!isSecure)}
          />
        ) : (
          right
        )
      }
    />
  );
};

export default EscendiaInput;
