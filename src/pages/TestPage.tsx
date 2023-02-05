import { useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect } from "react";
import { View, ScrollView, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { colors } from "../services/styling/styles";
import { black } from "react-native-paper/lib/typescript/styles/themes/v2/colors";

import EscendiaButton from "@components/default/EscendiaButton";
import EscendiaText from "@components/default/EscendiaText";

function TestPage() {
  return (
    <View style={{ backgroundColor: colors.escendia_light, flex: 1 }}>
      <EscendiaText>Test</EscendiaText>
    </View>
  );
}

export default TestPage;
