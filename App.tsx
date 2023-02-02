import {
  DrawerActions,
  NavigationContainer,
  useNavigation,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import i18n, { t } from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";
import LandingPage from "./src/pages/LandingPage";
import TestPage from "./src/pages/TestPage";
import SignInPage from "./src/pages/SignInPage";
import { View } from "react-native";

import { de, en } from "./src/services/localization/localizations";
import React, { useEffect, useState } from "react";
import { useFonts } from "expo-font";
import "react-native-gesture-handler";
import "react-native-reanimated";
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerNavigationProp,
} from "@react-navigation/drawer";
import EscendiaText from "@components/EscendiaText";
import { colors } from "@services/styling/styles";

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

const RootStack = createDrawerNavigator<RootStackParams>();

export type DefaultStackParams = {
  Landing: undefined;
  SingIn: undefined;
  SingUp: undefined;
};

const DefaultStack = createDrawerNavigator<DefaultStackParams>();

const DefaultScreenStack = ({ props }) => {
  return (
    <DefaultStack.Navigator
      initialRouteName="Landing"
      screenOptions={{
        headerShown: false,
      }}
      useLegacyImplementation={false}
      drawerContent={(props) => {
        return (
          <View
            style={{
              flex: 1,
              backgroundColor: colors.escendia_dark,
            }}
          >
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                padding: 20,
                borderBottomWidth: 1,
                borderBottomColor: colors.escendia_text_faded,
                backgroundColor: colors.escendia_light,
              }}
            >
              <EscendiaText
                onPress={() => {
                  props.navigation.closeDrawer();
                }}
              >
                X
              </EscendiaText>
            </View>
            <DrawerContentScrollView
              contentContainerStyle={{
                alignItems: "center",
                flex: 200,
                backgroundColor: colors.escendia_dark,
              }}
            >
              <EscendiaText>Seite 1</EscendiaText>
              <EscendiaText>Seite 1</EscendiaText>
              <EscendiaText>Seite 1</EscendiaText>
              <EscendiaText>Seite 1</EscendiaText>
              <EscendiaText>Seite 1</EscendiaText>
              <EscendiaText>Seite 1</EscendiaText>
            </DrawerContentScrollView>
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                padding: 20,
                borderTopWidth: 1,
                borderTopColor: colors.escendia_text_faded,
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <EscendiaText>F</EscendiaText>
                <EscendiaText>|</EscendiaText>
                <EscendiaText>T</EscendiaText>
                <EscendiaText>|</EscendiaText>
                <EscendiaText>I</EscendiaText>
              </View>
            </View>
          </View>
        );
      }}
    >
      <DefaultStack.Screen
        name="Landing"
        component={SignInPage}
        options={{
          title: t("Page_Landing"),
        }}
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

export default function App({ props }) {
  const { t } = useTranslation();
  const [fontsLoaded] = useFonts({
    "Josefin Sans": require("./src/assets/fonts/JosefinSans-Regular.otf"),
    "Simply Conception": require("./src/assets/fonts/Simply-Conception-Regular.otf"),
  });
  /*    */
  console.log(props);
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
