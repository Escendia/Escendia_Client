import EscendiaInput from "@components/default/EscendiaInput";
import EscendiaText from "@components/default/EscendiaText";
import EscendiaDefaultPage from "@components/main/EscendiaDefaultPage";
import { t } from "i18next";
import React, { useEffect, useState } from "react";
import { View, ViewBase } from "react-native";
import { transparent } from "react-native-paper/lib/typescript/styles/themes/v2/colors";
import { colors } from "../services/styling/styles";


export default function ProfilePage() {
  const [userName, setUserName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("")
  return (
    <EscendiaDefaultPage title={"Page_Profile_Title"}>
      <View
        style={{
          backgroundColor: "transparent",
          flex: 1,
          paddingLeft: 25,
          paddingTop: 100,
        }}
      >
        <EscendiaText
          style={{
            fontSize: 25,
            fontWeight: "bold",
            alignSelf: "flex-start",
            color: colors.escendia_light,
            paddingRight: 10,
            paddingLeft: 15,
          }}
        >
          {t("Page_Profile_Email")}
        </EscendiaText>
        <EscendiaInput
        disabled={true}
              outlineStyle={{
                borderColor: "transparent",
                alignSelf:"flex-start",
                paddingLeft:0,
                marginLeft:0
              }}
              style={{
                borderColor: "Blue",
                marginBottom: 15,
                alignSelf:"flex-start",
                paddingLeft:0,
                marginLeft:0
              }}
              placeholder={t("Page_Profile_Email")}
              value={email}
              onChangeText={(e) => {
                setEmail(e);
              }}
            />
             <EscendiaText
          style={{
            fontSize: 25,
            fontWeight: "bold",
            alignSelf: "flex-start",
            color: colors.escendia_light,
            paddingRight: 10,
            paddingLeft: 0,
          }}
        >
          {t("Page_Profile_Password")}
        </EscendiaText>
        <EscendiaInput
        disabled={true}
              outlineStyle={{
                borderColor: colors.escendia_text_faded,
              }}
              style={{
                borderColor: "yellow",
                marginBottom: 15,
                alignSelf:"flex-start"
              }}
              placeholder={t("Page_Profile_Password")}
              value={password}
              onChangeText={(d) => {
                setPassword(d);
              }}
            />
      </View>
    </EscendiaDefaultPage>
  );
}
