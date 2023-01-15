import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import i18n from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";
import LandingPage from "./src/pages/LandingPage";
import { de, en } from "./src/services/localization/localizations";
import React from "react";

i18n.use(initReactI18next).init({
  resources: {
    de: { translation: de },
    en: { translation: en },
  },
  compatibilityJSON: "v3",
  lng: "de",
  fallbackLng: "de",
});

const Stack = createNativeStackNavigator();

export default function App() {
  const { t } = useTranslation();

  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="LandingPage">
          <Stack.Screen name="LandingPage" component={LandingPage} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}
