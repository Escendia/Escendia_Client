import { useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect } from "react";
import {
  View
} from "react-native";

const LandingPage = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <View>

    </View>
  );
};

export default LandingPage;
