import EscendiaInput from "@components/default/EscendiaInput";
import EscendiaTabView from "@components/default/EscendiaTabView";
import { Attribute } from "@config/models/Attribute";
import { Type } from "@config/types";
import { uuidv4 } from "@firebase/util";
import { updateDatabaseValue } from "@services/functions";
import { useUserStore } from "@services/store/store";
import { colors } from "@services/styling/styles";
import i18next, { t } from "i18next";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { View } from "react-native";
import { useToast } from "react-native-toast-notifications";
import EscendiaDataModal from "../EscendiaDataModal";

interface EscendiaDataModalAttributeProps {
  attribute?: Attribute;
  type?: Type;
  modalState: boolean;
  setModalState: Dispatch<SetStateAction<boolean>>;
  viewType: "view" | "edit" | undefined;
}

const EscendiaDataModalAttribute = ({
  attribute,
  type,
  modalState,
  viewType,
  setModalState,
  ...rest
}: EscendiaDataModalAttributeProps) => {
  const [key, setKey] = useState(uuidv4());

  const [attributeValue, setAttributeValue] = useState(new Attribute());
  const [disabled, setDisabled] = useState<boolean>(false);

  const toast = useToast();
  const user = useUserStore((state) => state.user);

  useEffect(() => {
    if (attribute) {
      setAttributeValue(attribute);
    }
  }, []);

  function onSave() {
    updateDatabaseValue([attributeValue], "attribute", user, toast).then(
      (valueList) => {
        if (valueList.length > 0) {
          setAttributeValue(new Attribute());
        }
      }
    );
  }

  useEffect(() => {
    setDisabled(viewType === "edit" ? false : true);
  }, [viewType]);

  useEffect(() => {
    if (type !== undefined) {
    }
  }, [type]);

  function onChange(language, name) {
    setAttributeValue(attributeValue.change("addName", language, name));
  }

  return (
    <EscendiaDataModal
      onCancle={() => {}}
      onSave={onSave}
      modalState={modalState}
      setModalState={setModalState}
      title={t("EscendiaDataModalType_Title")}
      viewType={viewType}
    >
      <View style={{ flex: 1, margin: 20 }}>
        <EscendiaTabView
          height={60}
          components={i18next.languages.map((language) => {
            return {
              title: t("EscendiaDataModalType_Name_" + language),
              component: (
                <EscendiaInput
                  key={"EscendiaDataModalType_Input_" + language + "_" + key}
                  outlineStyle={{ borderColor: colors.escendia_dark }}
                  textColor={colors.escendia_dark}
                  disabled={disabled}
                  placeholder={t("EscendiaDataModalType_Placeholder_Name")}
                  value={attributeValue.getName(language)}
                  onChangeText={(name) => onChange(language, name)}
                  onConfirm={(name) => onChange(language, name)}
                />
              ),
            };
          })}
        />
      </View>
    </EscendiaDataModal>
  );
};

export default EscendiaDataModalAttribute;
