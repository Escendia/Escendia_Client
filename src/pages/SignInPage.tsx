import EscendiaButton from "@components/default/EscendiaButton";
import EscendiaDefaultPage from "@components/main/EscendiaDefaultPage";
import EscendiaInput from "@components/default/EscendiaInput";
import EscendiaText from "@components/default/EscendiaText";
import { useNavigation } from "@react-navigation/native";
import { calculate } from "@services/functions";
import { useDBStore, useUserStore } from "@services/store/store";
import { colors } from "@services/styling/styles";
import { FirebaseError } from "firebase/app";
import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Image, View } from "react-native";

function ImageView(props: any) {
  return (
    <View
      style={{
        backgroundColor: "transparent",
        flex: 1,
        justifyContent: "center",
        alignItems: "flex-end",
      }}
    >
      <Image
        style={{
          //resizeMode: "contain",
          height: calculate("height", 550, 550),
          width: calculate("width", 450, 450),
          margin: 50,
        }}
        source={require("../assets/test.jpg")}
      />
    </View>
  );
}

function SignInPage() {
  const navigation = useNavigation();
  const { t } = useTranslation();

  const auth = useDBStore((state) => state.auth);
  const setUser = useUserStore((state) => state.setUser);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function onSignIn() {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        navigation.navigate("Landing");
      })
      .catch((error: FirebaseError) => {
        console.log(t("DB_Error_" + error.code.replace(/[^a-zA-Z0-9 ]/g, "")));
      });
  }

  return (
    <EscendiaDefaultPage title={"Page_SignIn_Title"}>
      <View
        style={{
          flexDirection: "row",
        }}
      >
        {ImageView({})}
        <View
          style={{
            backgroundColor: "transparent",
            flex: 1,
            padding: 15,
            flexDirection: "row",
          }}
        >
          <View
            style={{
              backgroundColor: "transparent",
              flex: 1.5,
              alignSelf: "center",
            }}
          >
            <EscendiaInput
              outlineStyle={{
                borderColor: colors.escendia_text_faded,
              }}
              style={{
                borderColor: "black",
                marginBottom: 15,
              }}
              value={email}
              placeholder={t("Page_SignIn_Email")}
              onChangeText={(e) => {
                setEmail(e);
              }}
            />

            <EscendiaInput
              secureTextEntry={true}
              outlineStyle={{
                borderColor: colors.escendia_text_faded,
              }}
              style={{
                borderColor: colors.escendia_light,
                marginBottom: 5,
              }}
              value={password}
              placeholder={t("Page_SignIn_Password")}
              onChangeText={(e) => {
                setPassword(e);
              }}
            />
            <EscendiaText
              style={{
                fontSize: 25,
                fontWeight: "100",
                alignSelf: "flex-end",
                color: colors.escendia_light,
                marginBottom: 15,
              }}
              onPress={() => {}}
            >
              {t("Page_SignIn_PasswordForget")}
            </EscendiaText>
            <EscendiaButton
              style={{
                padding: 15,
                backgroundColor: colors.escendia_light,
                alignItems: "center",
              }}
              textStyle={{ color: colors.escendia_dark }}
              onPress={onSignIn}
            >
              {t("Page_SignIn_SignIn")}
            </EscendiaButton>
            <View
              style={{
                backgroundColor: "transparent",
                flexDirection: "row",
                marginTop: 40,
                marginBottom: 40,
              }}
            >
              <View
                style={{
                  backgroundColor: "transparent",
                  flex: 1,
                  borderBottomColor: colors.escendia_text_faded,
                  borderBottomWidth: 1,
                  marginVertical: 15,
                }}
              ></View>
              <EscendiaText
                style={{
                  fontSize: 25,
                  fontWeight: "bold",
                  alignSelf: "center",
                  color: colors.escendia_light,
                  paddingRight: 10,
                  paddingLeft: 10,
                }}
              >
                {t("Page_SignIn_Or")}
              </EscendiaText>
              <View
                style={{
                  backgroundColor: "transparent",
                  flex: 1,
                  borderBottomColor: colors.escendia_text_faded,
                  borderBottomWidth: 1,
                  marginVertical: 15,
                }}
              ></View>
            </View>
            <EscendiaButton
              style={{
                backgroundColor: "transparent",
                alignItems: "center",
                padding: 15,
                borderColor: colors.escendia_text_faded,
              }}
            >
              {t("Page_SignIn_Google")}
            </EscendiaButton>
          </View>
          <View style={{ backgroundColor: "transparent", flex: 1 }}></View>
        </View>
      </View>
    </EscendiaDefaultPage>
  );
}

export default SignInPage;
