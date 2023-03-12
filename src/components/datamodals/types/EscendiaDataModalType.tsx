import EscendiaInput from "@components/default/EscendiaInput";
import EscendiaModal from "@components/default/EscendiaModal";
import EscendiaText from "@components/default/EscendiaText";
import { Type } from "@config/types";
import { uuidv4 } from "@firebase/util";
import { colors } from "@services/styling/styles";
import { t } from "i18next";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { View } from "react-native";
import EscendiaDataModal from "../EscendiaDataModal";
import { Tab, TabView } from "@rneui/themed";
import EscendiaTabView from "@components/default/EscendiaTabView";
import { getLocales, getCalendars } from "expo-localization";

interface EscendiaDataModalTypeProps {
  type?: Type;
  modalState: boolean;
  setModalState: Dispatch<SetStateAction<boolean>>;
  viewType: "view" | "edit" | undefined;
}

/* 
              <EscendiaInput
                outlineStyle={{ borderColor: colors.escendia_dark }}
                textColor={colors.escendia_dark}
                disabled={disabled}
                placeholder={t("EscendiaDataModalType_Placeholder_Name")}
                value={nameDE}
                onChangeText={setNameDE}
                onConfirm={setNameDE}
              />

*/
/* const EscendiaTabView = ({ components }) => {
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {}, []);

  return (
    <>
      <Tab
        value={index}
        onChange={(e) => setIndex(e)}
        indicatorStyle={{
          backgroundColor: "white",
          height: 3,
        }}
        buttonStyle={{
          backgroundColor: colors.escendia_dark,
        }}
        variant="default"
      >
        {components.map((component) => {
          return (
            <Tab.Item
              title={component.title}
              titleStyle={{ color: colors.escendia_light, fontSize: 12 }}
            />
          );
        })}
      </Tab>
      <TabView value={index} onChange={setIndex} animationType="spring">
        {components.map((component, indexMap) => {
          return (
            <TabView.Item style={{ flex: 1, width: "100%" }}>
              {index === indexMap ? (
                <View>{component.component}</View>
              ) : undefined}
            </TabView.Item>
          );
        })}
      </TabView>
    </>
  );
}; */

const EscendiaDataModalType = ({
  type,
  modalState,
  viewType,
  setModalState,
  ...rest
}: EscendiaDataModalTypeProps) => {
  const [key, setKey] = useState(uuidv4());

  const [nameDE, setNameDE] = useState<string>("");
  const [nameEN, setNameEN] = useState<string>("");

  const [disabled, setDisabled] = useState<boolean>(false);

  function onSave() {
    var object = { namede: nameDE, nameen: nameEN };

    setNameDE("");
    setNameEN("");
    console.log("onSave", object["name" + getLocales()[0].languageCode]);
  }

  function onCancle() {
    console.log("onCancle");
  }

  useEffect(() => {
    setDisabled(viewType === "edit" ? false : true);
  }, [viewType]);

  useEffect(() => {
    if (type !== undefined) {
    }
  }, [type]);

  return (
    <EscendiaDataModal
      onCancle={onCancle}
      onSave={onSave}
      modalState={modalState}
      setModalState={setModalState}
      title={t("EscendiaDataModalType_Title")}
      viewType={viewType}
    >
      <View style={{ flex: 1, margin: 20 }}>
        <EscendiaTabView
          height={60}
          components={[
            {
              title: t("EscendiaDataModalType_Name_Deutsch"),
              component: (
                <EscendiaInput
                  key={"EscendiaDataModalType_Input_DE_" + key}
                  outlineStyle={{ borderColor: colors.escendia_dark }}
                  textColor={colors.escendia_dark}
                  disabled={disabled}
                  placeholder={t("EscendiaDataModalType_Placeholder_Name")}
                  value={nameDE}
                  onChangeText={setNameDE}
                  onConfirm={setNameDE}
                />
              ),
            },
            {
              title: t("EscendiaDataModalType_Name_Englisch"),
              component: (
                <EscendiaInput
                  key={"EscendiaDataModalType_Input_EN_" + key}
                  outlineStyle={{ borderColor: colors.escendia_dark }}
                  textColor={colors.escendia_dark}
                  disabled={disabled}
                  placeholder={t("EscendiaDataModalType_Placeholder_Name")}
                  value={nameEN}
                  onChangeText={setNameEN}
                  onConfirm={setNameEN}
                />
              ),
            },
          ]}
        />
      </View>
    </EscendiaDataModal>
  );
};

export default EscendiaDataModalType;
