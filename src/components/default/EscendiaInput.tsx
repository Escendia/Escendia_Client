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
  textColor?: string | undefined;
  onChangeText?: ((e: string) => void) | undefined;
  onConfirm?: ((e: string) => void) | undefined;
  onIconPress?: ((e: GestureResponderEvent) => void) | undefined;
  left?: React.ReactNode;
  right?: React.ReactNode;
  disabled?: boolean | undefined;
  hasBorder?: boolean | undefined;
  placeholderTextColor?: string | undefined;
  secureTextEntry?: boolean | undefined;
  dense?: boolean;
  editable?: boolean | undefined;
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
  hasBorder,
  secureTextEntry,
  dense,
  contentStyle,
  editable,
}: EscendiaInputProps) => {
  const [isSecure, setIsSecure] = useState(secureTextEntry);

  const [isDisabled, setIsDisabled] = useState(disabled);
  const [isEditable, setIsEditable] = useState(editable);

  const [valueForEdit, setValueForEdit] = useState(value);
  const [key, setKey] = useState(uuidv4());
  const [ref, setRef] = useState(React.createRef<TextInput>());

  useEffect(() => {
    setValueForEdit(value);
  }, [value]);

  useEffect(() => {}, [isEditable, isDisabled, key]);
  useEffect(() => {}, [ref]);

  return (
    <Input
      ref={ref}
      key={key}
      dense={dense}
      disabled={isDisabled}
      placeholder={placeholder}
      value={editable ? valueForEdit : value}
      onChangeText={(e) => {
        editable ? setValueForEdit(e) : onChangeText(e);
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
      mode="outlined"
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
        borderRadius: 1,
        borderColor:
          (!hasBorder && !editable) || isDisabled
            ? "transparent"
            : colors.escendia_img_background_light,
        ...outlineStyle,
      }}
      textColor={textColor ? textColor : colors.escendia_light}
      placeholderTextColor={
        placeholderTextColor ? placeholderTextColor : colors.escendia_text_faded
      }
      selectionColor={"grey"}
      left={left}
      autoFocus={true}
      right={
        editable ? (
          <Input.Icon
            icon={isEditable ? "pencil" : "content-save"}
            iconColor={"white"}
            onPress={() => {
              setIsEditable(!isEditable);
              setIsDisabled(!isDisabled);
              if (isEditable) {
                //Hier Auto Open Keyboad ?!
                ref.current.focus();
              } else {
                if (onChangeText) onChangeText(valueForEdit);
              }
            }}
          />
        ) : secureTextEntry ? (
          <Input.Icon
            icon={isSecure ? "eye" : "eye-off"}
            iconColor={"white"}
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
