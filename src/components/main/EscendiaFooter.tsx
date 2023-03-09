import React from "react";
import { Image, View } from "react-native";
import { colors } from "../../services/styling/styles";
import EscendiaText from "../default/EscendiaText";

import { isWeb } from "@services/functions";
import { useTranslation } from "react-i18next";
import EscendiaSocialMedia from "../default/EscendiaSocialMedia";
import { t } from "i18next";

interface EscendiaHeaderProps {
  children?: React.ReactNode;
}

const EscendiaFooter = ({ children, ...rest }: EscendiaHeaderProps) => {
  return (
    <View
      style={{
        backgroundColor: colors.escendia_light,
      }}
    >
      <View style={{ paddingTop: 20, margin: 10 }}>
        <EscendiaText style={{ textAlign: "center" }}>
          {t("Page_All_Footer_Text")}
        </EscendiaText>
      </View>
      <View
        style={{
          paddingTop: 20,
          flex: 1,
          flexDirection: isWeb() ? "row" : "column",
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
            alignItems: isWeb() ? undefined : "center",
          }}
        >
          <Image
            style={{
              resizeMode: "contain",
              height: 150,
            }}
            source={require("../../assets/logo.png")}
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
        <View style={{ alignItems: "center" }}>
          <EscendiaSocialMedia
            size={25}
            color={colors.escendia_dark}
            type={"row"}
          />
        </View>
      </View>
    </View>
  );
};

export default EscendiaFooter;
