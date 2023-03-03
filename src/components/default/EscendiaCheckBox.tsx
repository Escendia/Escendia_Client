import { useEffect, useState } from "react";
import * as React from "react";
import { Checkbox } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import EscendiaText from "./EscendiaText";
import { TextStyle, View } from "react-native";
import { t } from "i18next";
import EscendiaIcon from "./EscendiaIcon";
import { uuidv4 } from "@firebase/util";

interface EscendiaCheckBoxProps {
  value?: boolean;
  disabled?: boolean | undefined;
  editable?: boolean | undefined;
  onPress?: ((e: boolean) => void) | undefined;
  iconColor?: string;
  title?: string;
  titlePosition?: "left" | "right" | undefined;
  textStyle?: TextStyle;
}

const EscendiaCheckBox = ({
  value,
  disabled,
  editable,
  iconColor,
  onPress,
  title,
  titlePosition,
  textStyle,
}: EscendiaCheckBoxProps) => {
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

  useEffect(() => {
    setValueForEdit(value);
  }, [value]);

  return (
    <View
      key={"EscendiaCheckBox_" + key}
      style={{ flex: 1, flexDirection: "row", alignItems: "center" }}
    >
      {title !== undefined &&
      (titlePosition === "left" || titlePosition === undefined) ? (
        <EscendiaText
          key={"EscendiaCheckBox_Text_" + key}
          style={{ paddingRight: 10, ...textStyle }}
        >
          {t(title)}
        </EscendiaText>
      ) : undefined}
      <Checkbox
        key={"EscendiaCheckBox_Checkbox" + key}
        disabled={isDisabled}
        status={(value ? value : valueForEdit) ? "checked" : "unchecked"}
        onPress={(e) => {
          setValueForEdit(!valueForEdit);
          if (onPress) onPress(!valueForEdit);
        }}
      />
      {title !== undefined && titlePosition === "right" ? (
        <EscendiaText
          key={"EscendiaCheckBox_Text" + key}
          style={{ paddingLeft: 10, ...textStyle }}
        >
          {t(title)}
        </EscendiaText>
      ) : undefined}
      {editable ? (
        <EscendiaIcon
          key={"EscendiaCheckBox_Icon" + key}
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
    </View>
  );
};

export default EscendiaCheckBox;
