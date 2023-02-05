import {
  createNavigationContainerRef,
  NavigationContainer,
} from "@react-navigation/native";
import i18n from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";
import { Dimensions } from "react-native";
import LandingPage from "./src/pages/LandingPage";
import SignInPage from "./src/pages/SignInPage";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { calculate } from "@services/functions";
import { useFonts } from "expo-font";
import { initializeApp } from "firebase/app";
import React, { useEffect } from "react";
import "react-native-gesture-handler";
import "react-native-reanimated";
import SignUpPage from "./src/pages/SignUpPage";
import { de, en } from "./src/services/localization/localizations";
import EscendiaSidebar from "@components/sidebar/EscendiaSidebar";
import { useDBStore, useUserStore } from "@services/store/store";
import TestPage from "./src/pages/TestPage";
import AsyncStorage from "@react-native-async-storage/async-storage";

i18n.use(initReactI18next).init({
  resources: {
    de: { translation: de },
    en: { translation: en },
  },
  compatibilityJSON: "v3",
  lng: "de",
  fallbackLng: "de",
});

/* export type RootStackParams = {
  DefaultStack: undefined;
};

const RootStack = createDrawerNavigator<RootStackParams>(); */

export type StackParams = {
  Landing: undefined;
  SignIn: undefined;
  SignUp: undefined;
  Test: undefined;
};

const Stack = createDrawerNavigator<StackParams>();

export const globalNavigation = createNavigationContainerRef<StackParams>();

export default function App({ props }) {
  const [fontsLoaded] = useFonts({
    "Josefin Sans": require("./src/assets/fonts/JosefinSans-Regular.otf"),
    "Simply Conception": require("./src/assets/fonts/Simply-Conception-Regular.otf"),
  });

  const setApp = useDBStore((state) => state.setApp);
  const app = useDBStore((state) => state.app);
  const auth = useDBStore((state) => state.auth);
  const setUser = useUserStore((state) => state.setUser);
  const { t } = useTranslation();

  // Initialize Firebase
  useEffect(() => {
    setApp(
      initializeApp({
        apiKey: "AIzaSyDBK5uZCVMoMBlchiyri9NO4bYM9jsNCLg",

        authDomain: "escendia-374212.firebaseapp.com",

        projectId: "escendia-374212",

        storageBucket: "escendia-374212.appspot.com",

        messagingSenderId: "943523318087",

        appId: "1:943523318087:web:479105c34ecb0588016462",

        measurementId: "G-YC52M51XS5",
      })
    );
  }, []);

  useEffect(() => {
    if (auth === undefined) return;
    auth.onAuthStateChanged((user) => {
      setUser(user);
      globalNavigation.navigate("Landing");
    });
  }, [auth]);

  const width = calculate("width", 450, Dimensions.get("screen").width);

  return (
    <NavigationContainer ref={globalNavigation}>
      {fontsLoaded && app !== undefined ? (
        <Stack.Navigator
          initialRouteName="Landing"
          screenOptions={{
            headerShown: false,
            drawerStyle: {
              width: width,
            },
          }}
          useLegacyImplementation={false}
          drawerContent={(props) => {
            return <EscendiaSidebar props={props} />;
          }}
        >
          <Stack.Screen
            name="Landing"
            component={LandingPage}
            options={{
              title: t("Page_Landing"),
            }}
          />
          <Stack.Screen
            name="SignIn"
            component={SignInPage}
            options={{ title: t("Page_SignIn") }}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUpPage}
            options={{ title: t("Page_SignUp") }}
          />
          <Stack.Screen
            name="Test"
            component={TestPage}
            options={{ title: t("Page_TestPage") }}
          />
        </Stack.Navigator>
      ) : null}
    </NavigationContainer>
  );
}
