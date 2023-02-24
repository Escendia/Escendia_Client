import { uuidv4 } from "@firebase/util";
import React, { useState } from "react";
import {
  GestureResponderEvent,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
  Modal,
  ScrollView,
  StyleSheet,
  Pressable,
  Dimensions,
} from "react-native";
import { colors } from "../../services/styling/styles";
import EscendiaText from "./EscendiaText";
import LeafIcon from "../icons/LeafIcon";
import { calculate } from "@services/functions";
import { AntDesign } from "@expo/vector-icons";
import { useTranslation } from "react-i18next";

interface EscendiaModalProps {
  children: React.ReactNode;
  //onPress?: (event: GestureResponderEvent) => void;
  titleRight?: React.ReactNode;
  tilteLeft?: React.ReactNode;
  title: string;
  modalState: boolean;
  onClose: () => void;
}

/* const [openModal, setOpenModal] = useState(false);
const [modalUUID, setModelUUID] = useState(uuidv4()); */
//const { t } = useTranslation();

const EscendiaModal = ({
  title,
  modalState,
  onClose,
  children,
  ...rest
}: EscendiaModalProps) => (
  <Modal
    key={"modal_" + title}
    visible={modalState}
    transparent={true}
    onRequestClose={onClose}
  >
    <ScrollView
      key={"modal_scrollview_" + title}
      style={{
        //minHeight: Dimensions.get("window").width,
        backgroundColor: colors.escendia_text_background,
        margin: 20,
      }}
    >
      <View
        style={{
          ...StyleSheet.absoluteFillObject,
          position: "absolute",
          alignItems: "flex-end",
        }}
      >
        <LeafIcon
          width={calculate("width", 1000, 300)}
          height={calculate("height", 1000, 300)}
          fill={colors.escendia_img_background_light}
        />
      </View>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          flexDirection: "row",
          padding: 10,
          borderBottomWidth: 1,
          borderBottomColor: colors.escendia_img_background_light,
        }}
      >
        <View style={{ flex: 1000 }}>
          <EscendiaText style={{ textAlign: "center" }}>{title}</EscendiaText>
        </View>
        <View style={{ alignSelf: "flex-end" }}>
          <Pressable onPress={onClose}>
            <AntDesign name="close" size={24} color="black" />
          </Pressable>
        </View>
      </View>
      <View style={{ minHeight: Dimensions.get("window").height - 200 }}>
        {children}
      </View>
    </ScrollView>
  </Modal>
);

export default EscendiaModal;
