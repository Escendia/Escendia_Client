import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useEffect, useState, useRef } from "react";
import { TextStyle, View } from "react-native";
import { List } from "react-native-paper";
import { Picker } from "@react-native-picker/picker";
import { colors } from "@services/styling/styles";
import { t } from "i18next";
import EscendiaIcon from "./EscendiaIcon";
import { uuidv4 } from "@firebase/util";

interface EscendiaDropDownProps {
  value?: string;
  style?: TextStyle;
  disabled?: boolean | undefined;
  editable?: boolean | undefined;
  optionList?: string[];
  iconColor?: string;
  onPress?: ((e: string) => void) | undefined;
  type: "normal" | "edit" | undefined;
}

const EscendiaDropwDown = ({
  value,
  disabled,
  editable,
  optionList,
  iconColor,
  onPress,
  style,
  type,
}: EscendiaDropDownProps) => {
  const [pickerRef, setPickedRef] = useState(useRef());

  const [isDisabled, setIsDisabled] = useState(disabled);
  const [isEditable, setIsEditable] = useState(true);
  const [valueForEdit, setValueForEdit] = useState(value);
  const [key, setKey] = useState(uuidv4());

  useEffect(() => {
    if (
      disabled === undefined ||
      (disabled === false && editable === undefined)
    ) {
      setIsDisabled(true);
    }
    if (disabled === false && editable === true) {
      setIsEditable(false);
    }
  }, []);

  /* 
  function open() {
    pickerRef?.current?.focus();
  }

  function close() {
    pickerRef?.current?.blur();
  } */

  return (
    <View
      key={"EscendiaDropwDown_" + key}
      style={{ flex: 1, flexDirection: "row", alignItems: "center" }}
    >
      {optionList !== undefined ? (
        <>
          <Picker
            key={"EscendiaDropwDown_Picker_" + key}
            style={{
              backgroundColor: colors.escendia_dark,
              borderColor: colors.escendia_text_faded,
              borderWidth: isEditable ? 0 : 1,
              padding: 10,
              fontSize: 20,
              fontFamily: "Josefin Sans",
              color: colors.escendia_light,
              ...style,
            }}
            enabled={!isDisabled}
            ref={pickerRef}
            selectedValue={valueForEdit}
            onValueChange={(itemValue, itemIndex) => setValueForEdit(itemValue)}
          >
            {optionList.map((value, index) => {
              return (
                <Picker.Item
                  key={"EscendiaDropwDown_Picker_Options_" + key + "_" + index}
                  label={t(value)}
                  value={value}
                />
              );
            })}
            <Picker.Item
              key={"EscendiaDropwDown_Picker_Options_" + key + "_Null"}
              label={""}
              value={undefined}
            />
          </Picker>
          {type === "edit" && editable ? (
            <EscendiaIcon
              key={"EscendiaDropwDown_Icon" + key}
              type={"MaterialCommunity"}
              style={{ paddingLeft: 10 }}
              name={isEditable ? "pencil" : "content-save"}
              color={iconColor ? iconColor : "white"}
              onPress={() => {
                setIsEditable(!isEditable);
                setIsDisabled(!isDisabled);
                if (isEditable) {
                  //Hier Auto Open Keyboad ?!
                } else {
                  if (onPress) onPress(valueForEdit);
                }
              }}
            />
          ) : undefined}
        </>
      ) : undefined}
    </View>
  );
};

export default EscendiaDropwDown;
