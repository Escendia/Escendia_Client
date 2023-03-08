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
import EscendiaButton from "./EscendiaButton";
import EscendiaText from "./EscendiaText";

interface EscendiaModalProps {
  children: React.ReactNode;
  titleRight?: React.ReactNode;
  titleLeft?: React.ReactNode;
  title?: string;
  modalState?: boolean;
  onClose?: () => void;
}

const EscendiaModal = ({
  title,
  titleLeft,
  titleRight,
  modalState,
  onClose,
  children,
  ...rest
}: EscendiaModalProps) => {
  const [state, setState] = useState(false);
  const [key, setKey] = useState(uuidv4());
  const isWebValue = isWeb();
  /*   const [number, setNumber] = useState([]);
   */
  /*   useEffect(() => {
    let array = [];
    for (let i = 0; i <= 1000; i++) {
      array.push(Math.random() * i * 1000);
    }
    console.log("ARRAY", array);
    setNumber(array);
  }, []);

  useEffect(() => {}, [number]); */

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
        style={{
          flex: 1,
          backgroundColor: "rgba(0, 0, 0, 0.6)",
        }}
      >
        <ScrollView
          style={{
            //margin: isWebValue ? 100 : 0,
            marginLeft: isWebValue ? 100 : 0,
            marginRight: isWebValue ? 100 : 0,
            marginTop: isWebValue ? 100 : 0,

            minHeight: Dimensions.get("window").height - 200,
            backgroundColor: colors.escendia_light,
          }}
        >
          <View
            key={"EscendiaModal_ScrollView_View_" + key}
            style={{
              ...StyleSheet.absoluteFillObject,
              position: "absolute",
              alignItems: "flex-end",
              right: isWebValue ? -250 : 0,
            }}
          >
            <LeafIcon
              key={"EscendiaModal_ScrollView_Image_" + key}
              width={calculate("width", 1000, 200)}
              height={calculate("height", 1000, 200)}
              fill={colors.escendia_img_background_light}
            />
          </View>
          <View
            key={"EscendiaModal_ScrollView_Header_" + key}
            style={{
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <View style={{ flex: 1000 }}>
              {/* <EscendiaText style={{ textAlign: "center" }}>{title}</EscendiaText> */}
            </View>
            <View
              style={{
                paddingTop: 20,
                paddingRight: 20,
                alignSelf: "flex-end",
              }}
            >
              <Pressable
                onPress={() => {
                  setState(!state);
                  if (onClose) onClose();
                }}
              >
                <AntDesign
                  name="close"
                  size={40}
                  color={colors.escendia_dark}
                />
              </Pressable>
            </View>
          </View>

          <View
            key={"HeadLineTitle_Container_" + key}
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              left: calculate("width", -200, -20),
            }}
          >
            <EscendiaText
              key={"HeadLineTitle_Container_BackgroundText_" + key}
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
              key={"HeadLineTitle_Container_Title_" + key}
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
          <View
            style={{
              flex: 1,
              minHeight: calculate(
                "height",
                470,
                Dimensions.get("screen").height - 450
              ),
            }}
          >
            {children}
          </View>
        </ScrollView>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          paddingLeft: 100,
          paddingRight: 100,
          paddingBottom: 20,
        }}
      >
        <EscendiaButton
          style={{
            borderTopWidth:1,
            borderTopColor:"black",
            flex: 1,
            backgroundColor: colors.escendia_dark,
          }}
        >
          Speichern
        </EscendiaButton>
      </View>
    </Modal>
  );
};

export default EscendiaModal;
