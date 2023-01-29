import React, { Children } from "react";
import {
  GestureResponderEvent,
  Text as RNText,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
  Platform,
  StyleSheet,
  View,
  Image,
  Dimensions,
  Linking,
} from "react-native";
import { colors } from "../services/styling/styles";
import EscendiaText from "./EscendiaText";
import FacebookIcon from "./icons/FacebookIcon";
import TwitterIcon from "./icons/TwitterIcon";
import InstagramIcon from "./icons/InstagramIcon";

import EscendiaInput from "./EscendiaInput";
import { useTranslation } from "react-i18next";

interface EscendiaHeaderProps {
  children?: React.ReactNode;
}

function SocialMediaRow(props: any) {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 10,
      }}
    >
      <TouchableOpacity
        style={{ flex: 1, padding: 5 }}
        onPress={() => {
          Linking.openURL("http://www.facebook.de");
        }}
      >
        <FacebookIcon height={24} fill={colors.escendia_dark} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          Linking.openURL("http://www.twitter.de");
        }}
        style={{
          flex: 1,
          borderRadius: 1,
          borderLeftWidth: 1,
          borderRightWidth: 1,
          borderStyle: "dashed",
          borderColor: colors.escendia_dark,
          padding: 5,
        }}
      >
        <TwitterIcon height={24} fill={colors.escendia_dark} />
      </TouchableOpacity>
      <TouchableOpacity
        style={{ flex: 1, padding: 5 }}
        onPress={() => {
          Linking.openURL("http://www.instagram.de");
        }}
      >
        <InstagramIcon height={24} fill={colors.escendia_dark} />
      </TouchableOpacity>
    </View>
  );
}

const EscendiaFooter = ({ children, ...rest }: EscendiaHeaderProps) => {
  const { t } = useTranslation();

  return (
    <View
      style={{
        backgroundColor: colors.escendia_light,
      }}
    >
      <View style={{ paddingTop: 20 }}>
        <EscendiaText style={{ textAlign: "center" }}>
          {t("Page_All_Footer_Text")}
        </EscendiaText>
      </View>
      <View
        style={{
          paddingTop: 20,
          flex: 1,
          flexDirection: Platform.OS === "web" ? "row" : "column",
        }}
      >
        <View
          style={{
            flex: 2,
            alignItems: "center",
          }}
        >
          <EscendiaText
            style={{
              fontWeight: "bold",
              paddingBottom: 10,
            }}
          >
            {t("Page_All_Footer_Service")}
          </EscendiaText>
          <EscendiaText>{t("Page_All_Footer_AGB")}</EscendiaText>
          <EscendiaText>{t("Page_All_Footer_Privacy")}</EscendiaText>
          <EscendiaText>{t("Page_All_Footer_Cookie")}</EscendiaText>
          <EscendiaText>{t("Page_All_Footer_Payment")}</EscendiaText>
        </View>
        <View
          style={{
            flex: 1,
            alignItems: Platform.OS === "web" ? undefined : "center",
          }}
        >
          <Image
            style={{
              resizeMode: "contain",
              height: 150,
            }}
            source={require("../assets/logo.png")}
          />
        </View>
        <View style={{ flex: 2, alignItems: "center" }}>
          <EscendiaText
            style={{
              fontWeight: "bold",
              paddingBottom: 10,
            }}
          >
            {t("Page_All_Footer_Company")}
          </EscendiaText>
          <EscendiaText>{t("Page_All_Footer_Impress")}</EscendiaText>
          <EscendiaText>{t("Page_All_Footer_AboutUs")}</EscendiaText>
          <EscendiaText>{t("Page_All_Footer_ContactUs")}</EscendiaText>
        </View>
      </View>
      <View
        style={{
          flexDirection: "column",
          paddingTop: 20,
          paddingBottom: 20,
          borderTopColor: colors.escendia_dark,
          borderTopWidth: 1,
        }}
      >
        <View
          style={{
            flex: 1,
            alignItems: "center",
          }}
        >
          <EscendiaText>{t("Page_All_Footer_CopyRight")}</EscendiaText>
        </View>
        {SocialMediaRow({})}
      </View>
    </View>
  );
};

export default EscendiaFooter;
