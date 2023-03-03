import { useEffect, useState } from "react";
import * as React from "react";
import { Checkbox } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import EscendiaText from "./EscendiaText";
import { TextStyle, View, NativeModules } from "react-native";
import { t } from "i18next";
import EscendiaIcon from "./EscendiaIcon";
import { uuidv4 } from "@firebase/util";
import { DatePickerModal, TimePickerModal } from "react-native-paper-dates";
import { useTranslation } from "react-i18next";
import EscendiaAutoComplete from "./EscendiaAutoComplete";
import EscendiaModal from "./EscendiaModal";

interface EscendiaPickerProps {
  label?: string;
  date?: Date;
  show?: boolean;
  //single, multiple, range
  mode?: any;
  type?: "time" | "year" | undefined;
  onDismiss?: (() => void) | undefined;
  onSelect?: ((date: Date) => void) | undefined;
  onConfirm?: ((date: Date) => void) | undefined;
  setShow?: ((show: boolean) => void) | undefined;
}

interface EscendiaPickerYearProps {
  label?: string;
  date?: Date;
  show?: boolean;
  //single, multiple, range
  mode?: any;
  type?: "time" | "year" | undefined;
  onDismiss?: (() => void) | undefined;
  onSelect?: ((date: Date) => void) | undefined;
}

export const EscendiaPickerYear = ({}: EscendiaPickerYearProps) => {
  const [key, setKey] = useState(uuidv4());

  return <></>;
};

const EscendiaPicker = ({
  date,
  show,
  type,
  label,
  mode,
  onDismiss,
  onSelect,
  setShow,
  onConfirm,
}: EscendiaPickerProps) => {
  const [valueForEdit, setValueForEdit] = useState(date);
  const [language, setLanguage] = useState("de");
  const { i18n } = useTranslation();

  useEffect(() => {
    setLanguage(i18n.languages[0]);
  }, []);

  const [key, setKey] = useState(uuidv4());
  const [years, setYears] = useState([]);
  //const [yearModal, setYearModal] = useState(false);

  function onPickerSelect(date) {
    onSelect(parseDate(date));
  }

  function parseDate(date) {
    switch (type) {
      case "time": {
        let currentDate = new Date();
        return new Date(
          currentDate.getFullYear(),
          currentDate.getMonth(),
          currentDate.getDate(),
          date.hours,
          date.minutes
        );
        break;
      }
      case "year": {
        return date.date;
        break;
      }
      default:
        return date.date;
    }
  }

  useEffect(() => {
    setValueForEdit(date);
  }, [date]);

  useEffect(() => {
    if (type === "year") {
      let dates = [];
      for (var i = 1970; i <= 2100; i++) {
        dates.push({ id: i, name: i });
      }
      setYears(dates);
    }
  }, []);

  /*    <DatePickerModal
      date={date || new Date()}
      visible={show}
      mode={mode || "single"}
      onChange={onPickerSelect}
      onDismiss={onDismiss}
      onConfirm={onPickerSelect}
      locale={"de"}
    /> */
  return type === "year" ? (
    years !== undefined ? (
      <EscendiaModal
        key={"CreationPage_EscendiaModal_" + key}
        title={"Jahres auswahl"}
        modalState={show}
        onClose={() => {
          setShow(!show);
          onDismiss();
        }}
      >
        <EscendiaAutoComplete
          hideFilter={true}
          onSelect={(e) => onConfirm(new Date(Date.parse(e.id + "-1-1")))}
          values={{ id: date.getFullYear(), name: date.getFullYear() }}
          options={years}
          listOptionProps={{
            initialNumToRender: years.length,
            /*             getItemLayout: (data, index) => ({
              length: 20,
              offset: 20 * index,
              index,
            }), */
            //initialScrollIndex: years.length / 2,
          }}
          optionNameId={"id"}
          optionNameValue={"name"}
        />
      </EscendiaModal>
    ) : undefined
  ) : type === "time" ? (
    <TimePickerModal
      visible={show}
      onDismiss={onDismiss}
      onConfirm={(time) => onConfirm(parseDate(time))}
      hours={date ? date.getHours() : new Date().getHours()} // default: current hours
      minutes={date ? date.getMinutes() : new Date().getMinutes()} // default: current minutes
      label={t("EscendiaPicker_Time_Select")} // optional, default 'Select time'
      cancelLabel={t("EscendiaPicker_Time_Cancel")} // optional, default: 'Cancel'
      confirmLabel={t("EscendiaPicker_Time_OK")} // optional, default: 'Ok'
      animationType="fade" // optional, default is 'none'
      locale={language}
    />
  ) : (
    <DatePickerModal
      startYear={date.getFullYear() - 300}
      label={t("EscendiaPicker_Single_Datum")}
      saveLabel={t("EscendiaPicker_Single_Save")}
      date={date || new Date()}
      visible={show}
      mode={mode || "single"}
      onChange={onPickerSelect}
      onDismiss={onDismiss}
      onConfirm={() => onConfirm(date)}
      locale={language}
    />
  );
};

export default EscendiaPicker;
