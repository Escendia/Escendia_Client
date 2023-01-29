import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import i18n, { t } from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";
import LandingPage from "./src/pages/LandingPage";
import TestPage from "./src/pages/TestPage";
import SignInPage from "./src/pages/SignInPage";

import { de, en } from "./src/services/localization/localizations";
import React, { useEffect, useState } from "react";
import { useFonts } from "expo-font";
import "react-native-gesture-handler";
import "react-native-reanimated";

i18n.use(initReactI18next).init({
  resources: {
    de: { translation: de },
    en: { translation: en },
  },
  compatibilityJSON: "v3",
  lng: "de",
  fallbackLng: "de",
});

/*
 */

export type RootStackParams = {
  DefaultStack: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParams>();

export type DefaultStackParams = {
  Landing: undefined;
  SingIn: undefined;
  SingUp: undefined;
};

const DefaultStack = createNativeStackNavigator<DefaultStackParams>();

const DefaultScreenStack = () => {
  return (
    <DefaultStack.Navigator
      initialRouteName="Landing"
      screenOptions={{
        headerShown: false,
      }}
    >
      <DefaultStack.Screen
        name="Landing"
        component={LandingPage}
        options={{ title: t("Page_Landing") }}
      />
      <DefaultStack.Screen
        name="SingIn"
        component={SignInPage}
        options={{ title: t("Page_SingIn") }}
      />
      <DefaultStack.Screen
        name="SingUp"
        component={SignInPage}
        options={{ title: t("Page_SingUp") }}
      />
    </DefaultStack.Navigator>
  );
};

export default function App() {
  const { t } = useTranslation();
  const [fontsLoaded] = useFonts({
    "Josefin Sans": require("./src/assets/fonts/JosefinSans-Regular.otf"),
    "Simply Conception": require("./src/assets/fonts/Simply-Conception-Regular.otf"),
  });

  return (
    <NavigationContainer>
      {fontsLoaded ? (
        <RootStack.Navigator
          initialRouteName="DefaultStack"
          screenOptions={({ route }) => ({ headerShown: false })}
        >
          <RootStack.Screen
            name="DefaultStack"
            component={DefaultScreenStack}
          />
        </RootStack.Navigator>
      ) : null}
    </NavigationContainer>
  );
}
