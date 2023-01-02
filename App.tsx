import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "react-redux";


import DefaultPage from "./src/components/DefaultPage";


import i18n from "i18next";
import "intl";
import { useTranslation, initReactI18next } from "react-i18next";
import translationsDe from "./src/files/locales/de.json";
import translationsEn from "./src/files/locales/en.json";


i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  resources: {
    de: { translation: translationsDe },
    en: { translation: translationsEn },
  },
  lng: "de",
  fallbackLng: "de",
  interpolation: { escapeValue: false },
  react: {
    useSuspense:false,
 }
});

/*


const { t } = useTranslation();




const defaultStack = () => {
  return (
    <React.Fragment>
      <View style={styles.container}>
        <Text>Open up App.tsx nice!</Text>
        <Text>{t("EscendiaDate.Test1")}</Text>
        <StatusBar style="auto" />
      </View>
    </React.Fragment>
  )
}

    <Stack.Screen
        options={{ title: titleHeader }}
        name={t("page.default")}
        component={DefaultPage}
      />

          <Stack.Navigator screenOptions={{ headerShown: false }}>

      {defaultStack()}
    </Stack.Navigator>
*/
//

const Stack = createNativeStackNavigator();

export default function App() {
  const defaultStacks = () => {
    return (
      <React.Fragment>
        <Stack.Screen
          options={{ title: "" }}
          name={t("page.default")}
          component={DefaultPage}
        />
      </React.Fragment>
    );
  };
  const { t } = useTranslation();
  const titleHeader: string = t("page.default");

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {defaultStacks()}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
