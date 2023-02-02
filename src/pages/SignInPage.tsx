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
          height: calculate("height", 350,350),
          width: calculate("width", 250,250),
          margin: 50,
        }}
        source={require("../assets/test.jpg")}
      />
    </View>
  );
}

function SignInPage() {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(true);

  useEffect(() => {
    
    if(email.length>10){
      setButtonDisabled(false)
    }else{
      setButtonDisabled(true)
    }
 
  }, [email])
  
  const { t } = useTranslation();

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
              style={{
                borderColor: colors.escendia_light,
                marginBottom: 15,
              }}
              placeholder={t("Email")}
              onChangeText={(e) => {setEmail(e)}}
            />

            <EscendiaInput
              style={{
                borderColor: colors.escendia_light,
                marginBottom: 5,
              }}
              placeholder={t("Page_SignIn_Password")}
              onChangeText={(e) => {setPassword(e)}}
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
              disabled={buttonDisabled}
              style={{
                backgroundColor: colors.escendia_light,
                alignItems: "center",
              }}
              textStyle={{ color: colors.escendia_dark }}
              onPress={()=>{}}
            >
              Anmelden
            </EscendiaButton>
            <View
              style={{
                backgroundColor: "transparent",
                flexDirection: "row",
                marginTop: 10,
              }}
            >
              <View
                style={{
                  backgroundColor: "skyblue",
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
                }}
              >
                OR
              </EscendiaText>
              <View
                style={{
                  backgroundColor: "skyblue",
                  flex: 1,
                  borderBottomColor: colors.escendia_text_faded,
                  borderBottomWidth: 1,
                  marginVertical: 15,
                }}
              ></View>
            </View>
            <EscendiaButton
              style={{
                backgroundColor: colors.escendia_light,
                alignItems: "center",
              }}
              textStyle={{ color: colors.escendia_dark }}
            >
              (Stellen sie sich hier ein buntes G vor) Weiter Mit Google
            </EscendiaButton>
          </View>
          <View style={{ backgroundColor: "transparent", flex: 1 }}></View>
        </View>
      </View>
    </EscendiaDefaultPage>
  );
}

export default SignInPage;
