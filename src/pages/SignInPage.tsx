import EscendiaButton from "@components/default/EscendiaButton";
import EscendiaInput from "@components/default/EscendiaInput";
import EscendiaText from "@components/default/EscendiaText";
import EscendiaDefaultPage from "@components/main/EscendiaDefaultPage";
import { AntDesign } from "@expo/vector-icons";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
import { calculate, isWeb } from "@services/functions";
import { useDBStore, useUserStore } from "@services/store/store";
import { colors } from "@services/styling/styles";
import { StackParams } from "App";
import { FirebaseError } from "firebase/app";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithCredential,
  signInWithPopup,
} from "firebase/auth";
import { t } from "i18next";
import React, { useEffect, useState } from "react";
import { Image, View } from "react-native";
import { useToast } from "react-native-toast-notifications";

const ImageView = () => {
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
};

function SignInPage() {
  const auth = useDBStore((state) => state.auth);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();
  const { navigate }: DrawerNavigationProp<StackParams> = useNavigation();

  function onSignIn() {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {})
      .catch((error: FirebaseError) => {
        toast.show(
          t("Toast_Warning_SignIn_" + error.code.replace(/[^a-zA-Z0-9 ]/g, ""))
        );
      });
  }

  function onSignInGoogle() {
    let googleProvider = new GoogleAuthProvider();
    console.log("googleProvider", googleProvider);

    signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log("onSignInGoogle-RESULT", result);
      })
      .catch((error) => {
        console.log("onSignInGoogle-ERROR", error);
        toast.show(
          t("Toast_Warning_SignIn_" + error.code.replace(/[^a-zA-Z0-9 ]/g, ""))
        );
      });
  }

  return (
    <EscendiaDefaultPage title={"Page_SignIn_Title"}>
      <View
        style={{
          flexDirection: "row",
        }}
      >
        {isWeb() ? <ImageView /> : undefined}
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
              style={{
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
              style={{
                marginBottom: 15,
              }}
              value={password}
              placeholder={t("Page_SignIn_Password")}
              onChangeText={(e) => {
                setPassword(e);
              }}
            />

            <EscendiaText
              style={{
                fontSize: isWeb() ? 20 : 15,
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
              onPress={onSignInGoogle}
              iconLeft={
                <AntDesign
                  name="google"
                  size={20}
                  color={colors.escendia_img_background_light}
                />
              }
            >
              {t("Page_SignIn_Google")}
            </EscendiaButton>
            <EscendiaText
              style={{
                fontSize: isWeb() ? 20 : 15,
                fontWeight: "100",
                alignSelf: "center",
                color: colors.escendia_light,
                marginBottom: 15,
                paddingTop: 25,
              }}
              onPress={() => navigate("SignUp")}
            >
              {t("Page_SignIn_NoAccount")}
            </EscendiaText>
          </View>
          {isWeb() ? (
            <View style={{ backgroundColor: "transparent", flex: 1 }}></View>
          ) : undefined}
        </View>
      </View>
    </EscendiaDefaultPage>
  );
}

export default SignInPage;
