import EscendiaButton from "@components/default/EscendiaButton";
import EscendiaDefaultPage from "@components/main/EscendiaDefaultPage";
import EscendiaInput from "@components/default/EscendiaInput";
import EscendiaText from "@components/default/EscendiaText";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { calculate } from "@services/functions";
import { useDBStore, useUserStore } from "@services/store/store";
import { colors } from "@services/styling/styles";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import React, { useEffect, useState } from "react";
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

function SignUpPage() {
  function validatePassword(password: string, passwordconfirm: string) {
    var minNumberofChars = 6;
    var maxNumberofChars = 16;
    var regularExpression =
      /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    if (password.length < 3) {
      setPasswordError("");
      return;
    }
    if (password != passwordconfirm) {
      setPasswordError(t("Page_SignUp_PasswordDifference"));
      return;
    }
    if (
      password.length < minNumberofChars ||
      password.length > maxNumberofChars
    ) {
      setPasswordError(t("Page_SignUp_PasswordLength"));
      return;
    }
    if (!regularExpression.test(password)) {
      setPasswordError(t("Page_SignUp_LetterReq"));
      return;
    }
    setPasswordError("");
  }

  function onSignUp() {
    //Ab 3 Läuft die Prüfung
    if (password.length > 3 && passwordError === "" && userName !== "") {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredentials) => {
          //
          updateProfile(auth.currentUser, { displayName: userName })
            .then(() => {
              navigation.navigate("Landing");
            })
            .catch((error) => {
              t("DB_Error_" + error.code.replace(/[^a-zA-Z0-9 ]/g, ""));
            });
        })
        .catch((error) => {
          console.log(
            t("DB_Error_" + error.code.replace(/[^a-zA-Z0-9 ]/g, ""))
          );
        });
    }
  }

  const auth = useDBStore((state) => state.auth);
  const setUser = useUserStore((state) => state.setUser);

  const navigation = useNavigation();
  const [userName, setUserName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordConfirm, setPasswordConfirm] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");

  useEffect(() => {
    validatePassword(password, passwordConfirm);
  }, [password, passwordConfirm]);

  const { t } = useTranslation();

  return (
    <EscendiaDefaultPage title={"Page_SignUp_Title"}>
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
              placeholder={t("Page_SignUp_Username")}
              value={userName}
              onChangeText={(e) => {
                setUserName(e);
              }}
            />
            <EscendiaInput
              outlineStyle={{
                borderColor: colors.escendia_text_faded,
              }}
              style={{
                borderColor: "black",
                marginBottom: 15,
              }}
              placeholder={t("Page_SignUp_Email")}
              value={email}
              onChangeText={(e) => {
                setEmail(e);
              }}
            />

            <EscendiaInput
              outlineStyle={{
                borderColor: colors.escendia_text_faded,
              }}
              style={{
                borderColor: colors.escendia_light,
                marginBottom: 5,
              }}
              value={password}
              placeholder={t("Page_SignUp_Password")}
              secureTextEntry={true}
              onChangeText={(e) => {
                setPassword(e);
              }}
            />
            <EscendiaInput
              outlineStyle={{
                borderColor: colors.escendia_text_faded,
              }}
              style={{
                borderColor: "black",
                marginBottom: 15,
              }}
              value={passwordConfirm}
              placeholder={t("Page_SignUp_Password_Confirm")}
              secureTextEntry={true}
              onChangeText={(e) => {
                setPasswordConfirm(e);
              }}
            />
            <EscendiaText
              style={{
                fontSize: 15,
                fontWeight: "100",
                alignSelf: "flex-end",
                color: colors.escendia_light,
                marginBottom: 15,
              }}
              //onPress={() => {}}
            >
              {passwordError}
            </EscendiaText>

            <EscendiaButton
              style={{
                padding: 15,
                backgroundColor: colors.escendia_light,
                alignItems: "center",
              }}
              textStyle={{ color: colors.escendia_dark }}
              onPress={onSignUp}
            >
              {t("Page_SignUp_SignUp")}
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
                {t("Page_SignUp_Or")}
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
              iconLeft={
                <AntDesign
                  name="google"
                  size={20}
                  color={colors.escendia_img_background_light}
                />
              }
            >
              {t("Page_SignUp_Google")}
            </EscendiaButton>
          </View>
          <View style={{ backgroundColor: "transparent", flex: 1 }}></View>
        </View>
      </View>
    </EscendiaDefaultPage>
  );
}

export default SignUpPage;
