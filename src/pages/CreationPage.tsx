import { useEffect, useState } from "react";
import { View } from "react-native";

import EscendiaDataModalType from "@components/datamodals/types/EscendiaDataModalType";
import EscendiaCard from "@components/default/EscendiaCard";
import EscendiaDefaultPage from "@components/main/EscendiaDefaultPage";
import { uuidv4 } from "@firebase/util";
import { t } from "i18next";

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
}; 
[
    "Creation_Option_Drink",
    "Creation_Option_Producer",
    "Creation_Option_Events",
    "Creation_Option_Type",
    "Creation_Option_Awards",
  ]

*/

const EscendiaTypeCreation = () => {
  const [modalState, setModalState] = useState(false);
  const [key, setKey] = useState(uuidv4());

  return (
    <View key={"CreationPage_Option_" + key}>
      <EscendiaDataModalType
        modalState={modalState}
        viewType={"edit"}
        setModalState={setModalState}
      />
      <EscendiaCard
        onPress={() => setModalState(!modalState)}
        key={"CreationPage_EscendiaCard_" + key}
        title={t("Creation_Option_Type")}
        width={300}
        height={300}
        image={require("../assets/test.jpg")}
      />
    </View>
  );
};

function CreationPage() {
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
        <EscendiaTypeCreation />
      </View>
    </EscendiaDefaultPage>
  );
}

export default CreationPage;

/* 
                          
        {creationOptions.map((value, index) => {
          const [modalState, setModalState] = useState(false);
          const [text, setTest] = useState("");

          return (
            <View key={"CreationPage_Option_" + key + "_" + index}>
              <EscendiaDataModalType
                modalState={modalState}
                viewType={"edit"}
                setModalState={setModalState}
              />
              <EscendiaCard
                onPress={() => setModalState(!modalState)}
                key={"CreationPage_EscendiaCard_" + key + "_" + index}
                title={value.title}
                width={300}
                height={300}
                image={require("../assets/test.jpg")}
              />
            </View>
          );
        })}



<EscendiaCheckBox
                textStyle={{ color: "white" }}
                title={"test"}
                disabled={true}
                editable={true}
              /> 
                            <EscendiaInput
                placeholder="TEST"
                value={text}
                onChangeText={(e) => setTest(e)}
                editable={true}
                disabled={true}
              /> 
                            <EscendiaDropwDown
                value={text}
                onPress={(e) => setTest(e)}
                optionList={[value]}
                editable={true}
              /> 
               <EscendiaDate type={"year"} date={new Date()} editable={true} /> 
                            <EscendiaAutoComplete
                values={[]}
                options={[
                  { id: "ID_1", name: "Name_1" },
                  { id: "ID_2", name: "Name_2" },
                  { id: "ID_3", name: "Name_3" },
                ]}
                isMulti={true}
                optionNameId="id"
                optionNameValue="name"
              /> 

*/
