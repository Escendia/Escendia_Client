import React, { useEffect } from "react";
import { View } from "react-native";

import { colors } from "../services/styling/styles";

import EscendiaButton from "@components/default/EscendiaButton";

function TestPage() {
  useEffect(() => {}, []);

  return (
    <View style={{ backgroundColor: colors.escendia_light, flex: 1 }}>
      <EscendiaButton>Test</EscendiaButton>
    </View>
  );
}

export default TestPage;
