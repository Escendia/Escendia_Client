
import { useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect } from "react";
import { View, ScrollView, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { colors } from "../services/styling/styles";
import { black } from "react-native-paper/lib/typescript/styles/themes/v2/colors";
import EscendiaInput from "@components/EscendiaInput";
import EscendiaText from "@components/EscendiaText";
import EscendiaButton from "@components/EscendiaButton";

function TestPage() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
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
            height: 350,
            width: 250,
            margin: 50,
          }}
          source={require("../assets/test.jpg")}
        />
      </View>
    );
  }
  return (
    <SafeAreaView style={{ backgroundColor: colors.escendia_light, flex: 1 }}>
      <View style={{ backgroundColor: colors.escendia_light, flex: 1 }}>
        <View
          style={{
            backgroundColor: "transparent",
            flex: 1,
            //alignItems: "flex-start",
            margin: 10,
            flexDirection: "row",
          }}
        >
          <View style={{ backgroundColor: colors.escendia_light, flex: 1 }}>
          <Image
            style={{
              //resizeMode: "contain",
              height: 15,
              width: 15,
            }}
            source={require("../assets/favicon.png")}
          />
          </View>
          <View style={{ backgroundColor: colors.escendia_light, flex: 1 }}>
          <Image
            style={{
              //resizeMode: "contain",
              height: 150,
              width: 150,
            }}
            source={require("../assets/logo.png")}
          />
          </View>
        </View>
        <View style={{ backgroundColor: "transparent", flex: 9 }}></View>
      </View>

      <View
        style={{
          backgroundColor: colors.escendia_dark,
          flex: 1.5,
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
              placeholder={"Email*"}
            />

            <EscendiaInput
              style={{
                borderColor: colors.escendia_light,
                marginBottom: 5,
              }}
              placeholder={"Passwort*"}
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
              Passwort vergessen?
            </EscendiaText>
            <EscendiaButton
              style={{
                backgroundColor: colors.escendia_light,
                alignItems: "center",
              }}
              textStyle={{ color: colors.escendia_dark }}
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
      <View
        style={{ backgroundColor: colors.escendia_light, flex: 0.7 }}
      ></View>
    </SafeAreaView>
  );
}

export default TestPage;
