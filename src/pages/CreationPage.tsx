import React, { useEffect, useState } from "react";
import {
  View,
  ImageBackground,
  Modal,
  Pressable,
  ScrollView,
  Image,
  StyleSheet,
  Dimensions,
} from "react-native";

import { colors } from "../services/styling/styles";
import { AntDesign } from "@expo/vector-icons";
import EscendiaButton from "@components/default/EscendiaButton";
import EscendiaDefaultPage from "@components/main/EscendiaDefaultPage";
import EscendiaText from "@components/default/EscendiaText";
import { useTranslation } from "react-i18next";
import { TouchableOpacity } from "react-native-gesture-handler";
import { calculate, isWeb } from "@services/functions";
import LeafIcon from "../components/icons/LeafIcon";
import EscendiaInput from "@components/default/EscendiaInput";
import EscendiaModal from "@components/default/EscendiaModal";
import { t } from "i18next";

/* 
      {index % 4 === 0 && index > 0 ? (
        <View
          key={"creation_card_breakline_" + index}
          style={{ width: "100%", height: 30 }}
        ></View>
      ) : undefined}
*/
interface EscendiaCardProps {
  title: string;
  index: number;
  size: number;
}

export const EscendiaCard = ({ title, index, size }: EscendiaCardProps) => {
  const { t } = useTranslation();
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <EscendiaInput
        disabled={true}
        editable={true}
        placeholder={title}
        onConfirm={(e) => {
          console.log(e);
        }}
      />
      {/*       <EscendiaModal title={title} modalState={openModal} onClose=>
        <EscendiaText>TEST</EscendiaText>
      </EscendiaModal>
      <TouchableOpacity
        key={"creation_card_touch_" + index}
        style={{ flex: 1 }}
        onPress={() => setOpenModal(!openModal)}
      >
        <ImageBackground
          key={"creation_card_image_" + index}
          style={{
            flex: 1,
            borderWidth: 1,
            padding: 0,
            borderColor: "grey",
            flexGrow: 1,
            alignItems: "center",
            backgroundColor: "white",
            margin: 20,
            shadowRadius: 10,
            shadowColor: colors.escendia_light,
            justifyContent: "flex-end",
          }}
          resizeMode="stretch"
          source={require("../assets/test.jpg")}
        >
          <View
            style={{
              width: size,
              height: size,
              justifyContent: "flex-end",
            }}
          >
            <View
              style={{
                justifyContent: "flex-end",
                backgroundColor: "rgba(90,69,60,0.6)",
                padding: 10,
              }}
            >
              <EscendiaText
                style={{ opacity: 1 }}
                key={"sidebar_option_text_" + index}
                color={colors.escendia_text_background}
              >
                {t(title)}
              </EscendiaText>
            </View>
          </View>
        </ImageBackground>
      </TouchableOpacity> */}
    </>
  );
};

function CreationPage() {
  const [creationOptions, setCreationOptions] = useState([
    "Creation_Option_Drink",
    "Creation_Option_Producer",
    "Creation_Option_Events",
    "Creation_Option_Type",
    "Creation_Option_Awards",
  ]);

  useEffect(() => {}, []);

  return (
    <EscendiaDefaultPage title={t("Page_Creation_Title")}>
      <View
        style={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        {creationOptions.map((value, index) => {
          return <EscendiaCard title={value} index={index} size={300} />;
        })}
      </View>
    </EscendiaDefaultPage>
  );
}

export default CreationPage;
