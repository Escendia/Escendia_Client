import EscendiaText from "@components/default/EscendiaText";
import EscendiaSidebar from "@components/sidebar/EscendiaSidebar";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {
  createNavigationContainerRef,
  NavigationContainer,
} from "@react-navigation/native";
import { calculate } from "@services/functions";
import { useDBStore, useUserStore } from "@services/store/store";
import { colors } from "@services/styling/styles";
import { useFonts } from "expo-font";
import { initializeApp } from "firebase/app";
import i18n from "i18next";
import React, { useEffect } from "react";
import { initReactI18next, useTranslation } from "react-i18next";
import { Dimensions, View } from "react-native";
import "react-native-gesture-handler";
import "react-native-reanimated";
import { ToastProvider } from "react-native-toast-notifications";
import { onCLS, onFID, onLCP } from "web-vitals";
import LandingPage from "./src/pages/LandingPage";
import ProfilePage from "./src/pages/ProfilePage";
import SignInPage from "./src/pages/SignInPage";
import SignUpPage from "./src/pages/SignUpPage";
import TestPage from "./src/pages/TestPage";
import { de, en } from "./src/services/localization/localizations";

i18n.use(initReactI18next).init({
  resources: {
    de: { translation: de },
    en: { translation: en },
  },
  compatibilityJSON: "v3",
  lng: "de",
  fallbackLng: "de",
});

export type StackParams = {
  Landing: undefined;
  SignIn: undefined;
  SignUp: undefined;
  Test: undefined;
  Profile: undefined;
};

const Stack = createDrawerNavigator<StackParams>();

export const globalNavigation = createNavigationContainerRef<StackParams>();

export default function App({ props }) {
  const [fontsLoaded] = useFonts({
    "Josefin Sans": require("./src/assets/fonts/JosefinSans-Regular.otf"),
    "Simply Conception": require("./src/assets/fonts/Simply-Conception-Regular.otf"),
  });

  function logDelta({ name, id, delta }) {
    console.log(`${name} matching ID ${id} changed by ${delta}`);
  }

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
/*     onCLS(logDelta);
    onFID(logDelta);
    onLCP(logDelta); */
    //setToast(useToast());
  }, []);

  useEffect(() => {
    if (auth === undefined) return;
    auth.onAuthStateChanged((user) => {
      setUser(user);
      globalNavigation.navigate("Profile");
    });
  }, [auth]);

  const width = calculate("width", 450, Dimensions.get("screen").width);
  /* toastOptions.message.toString().split("~")[0] */
  return (
    <ToastProvider
      swipeEnabled={true}
      icon={
        <AntDesign
          style={{ borderRadius: 9999 }}
          name="info"
          size={24}
          color={colors.escendia_text_background}
        />
      }
      successIcon={
        <AntDesign
          style={{ borderRadius: 9999 }}
          name="check"
          size={24}
          color={colors.escendia_text_background}
        />
      }
      dangerIcon={
        <MaterialIcons
          style={{ borderRadius: 9999 }}
          name="dangerous"
          size={24}
          color="white"
        />
      }
      warningIcon={
        <MaterialIcons
          style={{ borderRadius: 9999 }}
          name="warning"
          size={24}
          color="white"
        />
      }
      successColor={"green"}
      dangerColor={"red"}
      normalColor={"blue"}
      warningColor={"yellow"}
      renderToast={(toastOptions) => {
        let icon = toastOptions.icon;
        let colorType = toastOptions.normalColor;

        let messageString = toastOptions.message.toString();
        let messageStringLower = messageString.toLowerCase();

        let message = t(messageString);
        let hasTitle = message.indexOf("~") > 0;

        if (messageStringLower.includes("success")) {
          colorType = toastOptions.successColor;
          icon = toastOptions.successIcon;
        }

        if (messageStringLower.includes("danger")) {
          colorType = toastOptions.dangerColor;
          icon = toastOptions.dangerIcon;
        }

        if (messageStringLower.includes("warning")) {
          colorType = toastOptions.warningColor;
          icon = toastOptions.warningIcon;
        }

        const titleText = hasTitle ? t(message.split("~")[0]) : "";
        const messageText = hasTitle ? t(message.split("~")[1]) : t(message);

        return (
          <View
            style={{
              backgroundColor: colorType,
              paddingLeft: 5,
              margin: 10,
              borderWidth: 1,
              borderColor: "grey",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: colors.escendia_dark,
                padding: 10,
              }}
            >
              <View style={{ paddingRight: 10 }}>{icon}</View>
              <View style={{ flexDirection: "column" }}>
                <EscendiaText
                  color={colors.escendia_light}
                  fontWeight="bold"
                  fontSize={20}
                >
                  {titleText}
                </EscendiaText>
                <EscendiaText color={colors.escendia_light} fontSize={15}>
                  {messageText}
                </EscendiaText>
              </View>
            </View>
          </View>
        );
      }}
    >
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
            <Stack.Screen
              name="Profile"
              component={ProfilePage}
              options={{ title: t("Page_ProfilePage") }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </ToastProvider>
  );
}
