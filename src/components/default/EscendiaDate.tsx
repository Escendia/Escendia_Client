import { useEffect, useState } from "react";
import * as React from "react";
import { Checkbox } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import EscendiaText from "./EscendiaText";
import { TextStyle, View } from "react-native";
import { t } from "i18next";
import EscendiaIcon from "./EscendiaIcon";
import { uuidv4 } from "@firebase/util";
import EscendiaInput from "./EscendiaInput";
import EscendiaPicker from "./EscendiaPicker";

interface EscendiaDateProps {
  style?: TextStyle;
  date: Date;
  placeholder?: string;
  type?: "time" | "year" | undefined;
  onSelect?: ((date: Date) => void) | undefined;
  disabled?: boolean | undefined;
  editable?: boolean | undefined;
  mode?: "outlined" | "flat" | undefined;
}

const EscendiaDate = ({
  style,
  date,
  mode,
  type,
  placeholder,
  onSelect,
  disabled,
  editable,
}: EscendiaDateProps) => {
  const [isDisabled, setIsDisabled] = useState(disabled);
  const [isEditable, setIsEditable] = useState(true);
  const [valueForEdit, setValueForEdit] = useState(date);
  const [showPicker, setShowPicker] = useState(false);
  const [toggle, setToggle] = useState(false);

  const [key, setKey] = useState(uuidv4());

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

  function convertDateToString(convertDate: Date): string {
    if (
      convertDate === null ||
      convertDate === undefined ||
      convertDate.getTime() === 0
    )
      return placeholder ? placeholder : t("EscendiaDate_NoDate");
    let date = new Date(convertDate);

    switch (type) {
      case "time":
        return (
          date.getHours() +
          ":" +
          (date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes())
        );
      case "year":
        return date.getFullYear().toString();
      default:
        return (
          getWeekFromDate(date) +
          ", " +
          date.getDate() +
          "." +
          (date.getMonth() + 1) +
          "." +
          date.getFullYear()
        );
    }
  }

  function getWeekFromDate(date: Date): string {
    let weekDay = date.getDay();

    switch (weekDay) {
      case 0:
        return t("EscendiaDate_Week_Sunday");
      case 1:
        return t("EscendiaDate_Week_Monday");
      case 2:
        return t("EscendiaDate_Week_Tuesday");
      case 3:
        return t("EscendiaDate_Week_Wednesday");
      case 4:
        return t("EscendiaDate_Week_Thursday");
      case 5:
        return t("EscendiaDate_Week_Friday");
      case 6:
        return t("EscendiaDate_Week_Saturday");
    }
  }

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
    setValueForEdit(date);
  }, [date]);

  return (
    <View>
      <EscendiaInput
        contentStyle={{ ...style }}
        placeholder={placeholder}
        value={convertDateToString(valueForEdit)}
        disabled={disabled}
        editable={editable}
        toggle={toggle}
        setToggle={setToggle}
        //onConfirm={(date) => setShowPicker(false)}
        onChangeStart={() => setShowPicker(true)}
        onChangeText={(date) => {
          var conertedDate = new Date(date);
          if (onSelect) onSelect(conertedDate);
        }}
      />
      <EscendiaPicker
        type={type}
        mode={mode}
        date={valueForEdit}
        show={showPicker}
        setShow={setShowPicker}
        label={t("EscendiaDate.Select.Title")}
        onSelect={(date) => {
          setValueForEdit(new Date(date));
        }}
        onDismiss={() => {
          setToggle(true);
          setShowPicker(false);
        }}
        onConfirm={(date) => {
          setValueForEdit(new Date(date));
          setToggle(true);
          setShowPicker(false);
        }}
      />
    </View>
  );
};

export default EscendiaDate;
