import { AntDesign } from "@expo/vector-icons";
import { uuidv4 } from "@firebase/util";
import { calculate, isWeb } from "@services/functions";
import { t } from "i18next";
import React, { useEffect, useState } from "react";
import {
  Dimensions,
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import { colors } from "../../services/styling/styles";
import LeafIcon from "../icons/LeafIcon";
import EscendiaText from "./EscendiaText";

interface EscendiaModalProps {
  children: React.ReactNode;
  titleRight?: React.ReactNode;
  titleLeft?: React.ReactNode;
  bottomChildren?: React.ReactNode;
  title?: string;
  modalState?: boolean;
  onClose?: () => void;
}

const EscendiaModalHeader = ({
  keyValue,
  isWebValue,
  state,
  setState,
  onClose,
  title,
}) => {
  return (
    <>
      <View
        key={"EscendiaModal_ScrollView_View_" + keyValue}
        style={{
          ...StyleSheet.absoluteFillObject,
          position: "absolute",
          alignItems: "flex-end",
          right: isWebValue ? -250 : 0,
        }}
      >
        <LeafIcon
          width={calculate("width", 1000, 200)}
          height={calculate("height", 1000, 200)}
          fill={colors.escendia_img_background_light}
        />
      </View>
      <View
        key={"EscendiaModal_ScrollView_Header_Left_" + keyValue}
        style={{
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <View
          key={"EscendiaModal_ScrollView_Header_Mid_" + keyValue}
          style={{ flex: 1000 }}
        ></View>
        <View
          key={"EscendiaModal_ScrollView_Header_Right_" + keyValue}
          style={{
            paddingTop: 20,
            paddingRight: 20,
            alignSelf: "flex-end",
          }}
        >
          <Pressable
            key={"EscendiaModal_ScrollView_Header_Press_" + keyValue}
            onPress={() => {
              setState(!state);
              if (onClose) onClose();
            }}
          >
            <AntDesign name="close" size={40} color={colors.escendia_dark} />
          </Pressable>
        </View>
      </View>

      <View
        key={"HeadLineTitle_Container_" + keyValue}
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          left: calculate("width", -200, -20),
        }}
      >
        <EscendiaText
          key={"HeadLineTitle_Container_BackgroundText_" + keyValue}
          fontFamily="Simply Conception"
          color={colors.escendia_img_background_light}
          style={{
            fontSize: calculate("none", 200, 80),
            fontWeight: "600",
            textAlign: "center",
            flex: isWebValue ? 1 : undefined,
            marginHorizontal: calculate("none", 0, -100),
          }}
        >
          {t("Page_All_Header_Escendia")}
        </EscendiaText>
        <EscendiaText
          fontFamily="Simply Conception"
          key={"HeadLineTitle_Container_Title_" + keyValue}
          style={{
            fontSize: calculate("none", 80, 40),
            fontWeight: "600",
            flex: isWebValue ? 1 : undefined,
            marginHorizontal: calculate("none", -500, -100),
          }}
        >
          {t(title)}
        </EscendiaText>
      </View>
    </>
  );
};

const EscendiaModalBody = ({ children, keyValue }) => {
  return (
    <View
      key={"EscendiaModalBody_" + keyValue}
      style={{
        flex: 1,
        minHeight: calculate("height", 640, 620),
      }}
    >
      {children}
    </View>
  );
};

const EscendiaModalFooter = ({ bottomChildren, keyValue }) => {
  const isWebValue = isWeb();

  return (
    <View
      key={"EscendiaModalFooter_" + keyValue}
      style={{
        flexDirection: "row",
        justifyContent: "center",
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        paddingLeft: isWebValue ? 100 : 0,
        paddingRight: isWebValue ? 100 : 0,
        paddingBottom: isWebValue ? (bottomChildren ? 20 : 50) : 0,
      }}
    >
      {bottomChildren}
    </View>
  );
};
const EscendiaModal = ({
  title,
  titleLeft,
  titleRight,
  modalState,
  onClose,
  children,
  bottomChildren,
  ...rest
}: EscendiaModalProps) => {
  const [state, setState] = useState(false);
  const [key, setKey] = useState(uuidv4());
  const isWebValue = isWeb();

  useEffect(() => {
    if (modalState !== undefined) {
      setState(modalState);
    }
  }, [modalState]);

  return (
    <Modal
      key={"EscendiaModal_" + key}
      visible={state}
      transparent={true}
      onRequestClose={() => {
        setState(!state);
        if (onClose) onClose();
      }}
    >
      <View
        key={"EscendiaModal_View_" + key}
        style={{
          flex: 1,
          backgroundColor: "rgba(0, 0, 0, 0.6)",
        }}
      >
        <ScrollView
          style={{
            flex: 1,
            marginLeft: isWebValue ? 100 : 0,
            marginRight: isWebValue ? 100 : 0,
            marginTop: isWebValue ? 50 : 0,
            minHeight: Dimensions.get("window").height - 200,
            backgroundColor: colors.escendia_light,
          }}
        >
          <EscendiaModalHeader
            keyValue={key}
            isWebValue={isWebValue}
            state={state}
            setState={setState}
            onClose={onClose}
            title={title}
          />
          <EscendiaModalBody keyValue={key} children={children} />
        </ScrollView>
      </View>
      <EscendiaModalFooter keyValue={key} bottomChildren={bottomChildren} />
    </Modal>
  );
};

export default EscendiaModal;
