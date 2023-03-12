import EscendiaButton from "@components/default/EscendiaButton";
import EscendiaModal from "@components/default/EscendiaModal";
import EscendiaText from "@components/default/EscendiaText";
import { colors } from "@services/styling/styles";
import { t } from "i18next";
import React, { Dispatch, SetStateAction, useState } from "react";
import { View } from "react-native";
import { uuidv4 } from "@firebase/util";

interface EscendiaDataModalProps {
  children: React.ReactNode;
  title?: string;
  modalState: boolean;
  setModalState: Dispatch<SetStateAction<boolean>>;
  viewType: "view" | "edit" | undefined;
  onSave: () => void;
  onCancle: () => void;
}

const EscendiaDataModalSaveButton = ({ onSave }) => {
  return (
    <EscendiaButton
      style={{
        borderTopWidth: 1,
        borderTopColor: "black",
        flex: 1,
        backgroundColor: colors.escendia_dark,
      }}
      onPress={onSave}
    >
      {t("EscendiaDataModal_SaveModal_Body_Save")}
    </EscendiaButton>
  );
};

const EscendiaDataModalSaveQuestionButton = ({ onSave, onCancle }) => {
  return (
    <>
      <EscendiaButton
        style={{
          borderTopWidth: 1,
          borderTopColor: "black",
          flex: 1,
          backgroundColor: colors.escendia_dark,
        }}
        onPress={onSave}
      >
        {t("EscendiaDataModal_SaveModal_Body_Save")}
      </EscendiaButton>
      <EscendiaButton
        style={{
          borderTopWidth: 1,
          borderTopColor: "black",
          flex: 1,
          backgroundColor: colors.escendia_dark,
        }}
        onPress={onCancle}
      >
        {t("EscendiaDataModal_SaveModal_Body_Cancle")}
      </EscendiaButton>
    </>
  );
};

const EscendiaDataModal = ({
  title,
  children,
  modalState,
  setModalState,
  viewType,
  onSave,
  onCancle,
  ...rest
}: EscendiaDataModalProps) => {
  const [saveModalState, setSaveModalState] = useState(false);
  const [key, setKey] = useState(uuidv4());

  function onCloseCheck() {
    setModalState(false);
    setSaveModalState(true);
  }

  function onModalSave() {
    setSaveModalState(false);
    setModalState(false);
    onSave();
  }

  function onModalCancle() {
    setSaveModalState(false);
    setModalState(false);
    onCancle();
  }

  return (
    <>
      {viewType === "edit" ? (
        <EscendiaModal
          title={t("EscendiaDataModal_SaveModal_Title")}
          modalState={saveModalState}
          onClose={() => onModalCancle()}
          bottomChildren={
            <EscendiaDataModalSaveQuestionButton
              onCancle={onModalCancle}
              onSave={onModalSave}
            />
          }
        >
          <View
            key={"EscendiaDataModal_SaveModal_Body_" + key}
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <EscendiaText
              style={{ textAlign: "center" }}
              key={"EscendiaDataModal_SaveModal_Body_Text_" + key}
              fontSize={40}
            >
              {t("EscendiaDataModal_SaveModal_Body")}
            </EscendiaText>
          </View>
        </EscendiaModal>
      ) : undefined}
      <EscendiaModal
        title={title}
        modalState={modalState}
        onClose={onCloseCheck}
        bottomChildren={
          viewType === "edit" ? (
            <EscendiaDataModalSaveButton onSave={onModalSave} />
          ) : undefined
        }
      >
        <View
          key={"EscendiaDataModal_Body_" + key}
          style={{
            flex: 1,
          }}
        >
          {children}
        </View>
      </EscendiaModal>
    </>
  );
};

export default EscendiaDataModal;
