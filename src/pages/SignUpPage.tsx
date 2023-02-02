import EscendiaButton from "@components/EscendiaButton";
import EscendiaDefaultPage from "@components/EscendiaDefaultPage";
import EscendiaInput from "@components/EscendiaInput";
import EscendiaText from "@components/EscendiaText";
import { useNavigation } from "@react-navigation/native";
import { calculate } from "@services/functions";
import { colors } from "@services/styling/styles";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Alert, Image, View } from "react-native";
import { transparent } from "react-native-paper/lib/typescript/styles/themes/v2/colors";

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
  function validatePassword(password:string, passwordconfirm:string) {
    var minNumberofChars = 6;
    var maxNumberofChars = 16;
    var regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    if (password.length<3) {
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
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(true);

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
              onChangeText={(e) => {
                setEmail(e);
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
              placeholder={t("Page_SignUp_Password")}
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
              placeholder={t("Page_SignUp_Password_Confirm")}
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
              disabled={buttonDisabled}
              style={{
                padding: 15,
                backgroundColor: colors.escendia_light,
                alignItems: "center",
              }}
              textStyle={{ color: colors.escendia_dark }}
              onPress={() => {}}
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

export default SignUpPage;
