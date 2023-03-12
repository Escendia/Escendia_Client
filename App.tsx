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
import Constants from "expo-constants";
import { useFonts } from "expo-font";
import { initializeApp } from "firebase/app";
import i18n, { t } from "i18next";
import React, { useEffect } from "react";
import { initReactI18next } from "react-i18next";
import { Dimensions, View } from "react-native";
import "react-native-gesture-handler";
import {
  MD3LightTheme as DefaultTheme,
  Provider as PaperProvider,
} from "react-native-paper";
import "react-native-reanimated";
import { ToastProvider } from "react-native-toast-notifications";
import CreationPage from "./src/pages/CreationPage";
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
  Creation: undefined;
};

const Stack = createDrawerNavigator<StackParams>();
export const globalNavigation = createNavigationContainerRef<StackParams>();

export default function App({ props }) {
  //Fonts die geladen werden
  const [fontsLoaded] = useFonts({
    "Josefin Sans": require("./src/assets/fonts/JosefinSans-Regular.otf"),
    "Simply Conception": require("./src/assets/fonts/Simply-Conception-Regular.otf"),
  });

  const setApp = useDBStore((state) => state.setApp);
  const app = useDBStore((state) => state.app);
  const auth = useDBStore((state) => state.auth);
  const setUser = useUserStore((state) => state.setUser);

  // Initialisiere Firebase Datenbank, Rest in Zusatnd
  useEffect(() => {
    setApp(initializeApp(Constants.expoConfig.extra.firebase));
  }, []);

  //Umschalten der Seiten nachdem ein User angemeldet wurde
  useEffect(() => {
    if (auth === undefined) return;
    auth.onAuthStateChanged((user) => {
      setUser(user);
      globalNavigation.navigate("Creation");
    });
  }, [auth]);

  //Theme für React Native Paper für die
  const theme = {
    ...DefaultTheme,
    colors: {
      primary: colors.escendia_dark,
      onPrimary: colors.escendia_light,
      primaryContainer: "none",
      onPrimaryContainer: colors.escendia_dark,
      secondary: "none",
      onSecondary: "none",
      secondaryContainer: colors.escendia_light,
      onSecondaryContainer: "none",
      tertiary: "none",
      onTertiary: "none",
      tertiaryContainer: "none",
      onTertiaryContainer: "none",
      error: "none",
      onError: "none",
      errorContainer: "none",
      onErrorContainer: "none",
      background: "none",
      onBackground: "none",
      surface: colors.escendia_light,
      onSurface: colors.escendia_dark,
      surfaceVariant: colors.escendia_text_background,
      onSurfaceVariant: colors.escendia_dark,
      outline: "transparent",
      outlineVariant: "transparent",
      shadow: "transparent",
      scrim: "transparent",
      inverseSurface: "transparent",
      inverseOnSurface: "transparent",
      inversePrimary: "transparent",
      elevation: {
        level0: "transparent",
        level1: "transparent",
        level2: "transparent",
        level3: "transparent",
        level4: "transparent",
        level5: "transparent",
      },
      surfaceDisabled: "transparent",
      onSurfaceDisabled: "transparent",
      backdrop: "transparent",
    }, // Copy it from the color codes scheme and then use it here
  };

  const EscendiaStacks = ({}) => {
    return (
      <NavigationContainer ref={globalNavigation}>
        {fontsLoaded && app !== undefined ? (
          <Stack.Navigator
            initialRouteName="Landing"
            screenOptions={{
              headerShown: false,
              drawerStyle: {
                width: calculate("width", 450, Dimensions.get("screen").width),
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
            <Stack.Screen
              name="Creation"
              component={CreationPage}
              options={{ title: t("Page_CreationPage") }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    );
  };

  //Toast Provider mit eingezogenen Stacks
  const EscendiaPageWithToast = ({}) => {
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
        <EscendiaStacks />
      </ToastProvider>
    );
  };

  return (
    <PaperProvider theme={theme}>
      <EscendiaPageWithToast />
    </PaperProvider>
  );
}
