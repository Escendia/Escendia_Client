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
import { uuidv4 } from "@firebase/util";
import EscendiaCard from "@components/default/EscendiaCard";
import EscendiaCheckBox from "@components/default/EscendiaCheckbox";
import EscendiaDropwDown from "@components/default/EscendiaDropDown";
import EscendiaDate from "@components/default/EscendiaDate";
import EscendiaAutoComplete from "@components/default/EscendiaAutoComplete";

/* 
      {index % 4 === 0 && index > 0 ? (
        <View
          key={"creation_card_breakline_" + index}
          style={{ width: "100%", height: 30 }}
        ></View>
      ) : undefined}
*/
/* interface EscendiaCardProps {
  title: string;
  index: number;
  size: number;
} */

/* export const EscendiaCard = ({ title, index, size }: EscendiaCardProps) => {
  const [modalState, setModalState] = useState(false);
  const [key, setKey] = useState(uuidv4());

  return (
    <>
      <EscendiaModal
        key={"EscendiaCard_" + key}
        title={title}
        modalState={modalState}
      >
        <EscendiaText>TEST</EscendiaText>
      </EscendiaModal>
      <TouchableOpacity
        key={"EscendiaCard_Touch_" + key}
        style={{ flex: 1 }}
        onPress={() => setModalState(!modalState)}
      >
        <ImageBackground
          key={"EscendiaCard_Touch_Image_" + key}
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
            key={"EscendiaCard_Touch_Image_View" + key}
            style={{
              width: size,
              height: size,
              justifyContent: "flex-end",
            }}
          >
            <View
              key={"EscendiaCard_Touch_Image_View_View" + key}
              style={{
                justifyContent: "flex-end",
                backgroundColor: "rgba(90,69,60,0.6)",
                padding: 10,
              }}
            >
              <EscendiaText
                key={"EscendiaCard_Touch_Image_View_Text" + key}
                style={{ opacity: 1 }}
                color={colors.escendia_text_background}
              >
                {t(title)}
              </EscendiaText>
            </View>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    </>
  );
}; */

function CreationPage() {
  const [creationOptions, setCreationOptions] = useState([
    "Creation_Option_Drink",
    "Creation_Option_Producer",
    "Creation_Option_Events",
    "Creation_Option_Type",
    "Creation_Option_Awards",
  ]);
  const [key, setKey] = useState(uuidv4());

  useEffect(() => {}, []);

  return (
    <EscendiaDefaultPage
      key={"CreationPage_" + key}
      title={t("Page_Creation_Title")}
    >
      <View
        key={"CreationPage_View_" + key}
        style={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        {creationOptions.map((value, index) => {
          const [modalState, setModalState] = useState(false);
          const [text, setTest] = useState("");

          return (
            <View key={"CreationPage_Option_" + key + "_" + index}>
              {/*               <EscendiaModal
                key={"CreationPage_EscendiaModal_" + key + "_" + index}
                title={"Manage your beverages"}
                modalState={modalState}
              >
                <View
                  style={{
                    flex: 1,
                    backgroundColor: "green",
                    alignItems: "center",
                  }}
                >
                  <EscendiaText>TEST</EscendiaText>
                </View>
              </EscendiaModal>
              <EscendiaCard
                onPress={() => setModalState(!modalState)}
                key={"CreationPage_EscendiaCard_" + key + "_" + index}
                title={value}
                width={300}
                height={300}
                image={"test.jpg"}
              /> */}
              {/*               <EscendiaCheckBox
                textStyle={{ color: "white" }}
                title={"test"}
                disabled={true}
                editable={true}
              /> */}
              {/*               <EscendiaInput
                placeholder="TEST"
                value={text}
                onChangeText={(e) => setTest(e)}
                editable={true}
                disabled={true}
              /> */}
              {/*               <EscendiaDropwDown
                value={text}
                onPress={(e) => setTest(e)}
                optionList={[value]}
                editable={true}
              /> */}
              <EscendiaDate type={"year"} date={new Date()} editable={true} />
              {/*               <EscendiaAutoComplete
                values={[]}
                options={[
                  { id: "ID_1", name: "Name_1" },
                  { id: "ID_2", name: "Name_2" },
                  { id: "ID_3", name: "Name_3" },
                ]}
                isMulti={true}
                optionNameId="id"
                optionNameValue="name"
              /> */}
            </View>
          );
        })}
      </View>
    </EscendiaDefaultPage>
  );
}

export default CreationPage;
