import { useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect } from "react";
import { View, ScrollView, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import EscendiaText from "../components/EscendiaText";
import EscendiaInput from "../components/EscendiaInput";

import { colors } from "../services/styling/styles";

function TestPage() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView style={{ backgroundColor: colors.escendia_light, flex: 1 }}>
      <View style={{ backgroundColor: colors.escendia_light, flex: 1 }}></View>
      <View style={{ backgroundColor: colors.escendia_dark, flex: 1 }}>
        <Image
          style={{
            resizeMode: "contain",
            height: 150,
          }}
          source={require("../assets/logo.png")}
        />
        <View style={{ borderWidth: 1, borderColor: colors.escendia_light }}>
          Eingabe
        </View>
        <EscendiaText>Hier Steht ein Text</EscendiaText>
        <View style={{ backgroundColor: colors.escendia_light }}>Button</View>
      </View>
      <View style={{ backgroundColor: colors.escendia_light, flex: 1 }}></View>
    </SafeAreaView>
  );
}

export default TestPage;
