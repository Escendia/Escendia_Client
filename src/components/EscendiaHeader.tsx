import { DrawerNavigationProp } from "@react-navigation/drawer";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { useUserStore } from "@services/store/store";
import { DefaultStackParams, RootStackParams } from "App";
import React from "react";
import { useTranslation } from "react-i18next";
import {
  Dimensions,
  Image,
  Platform,
  StyleSheet,
  View,
  TouchableOpacity,
} from "react-native";
import { colors } from "../services/styling/styles";
import EscendiaButton from "./EscendiaButton";
import EscendiaInput from "./EscendiaInput";
import EscendiaText from "./EscendiaText";
import LeafIcon from "./icons/LeafIcon";

interface EscendiaHeaderProps {
  children?: React.ReactNode;
  childrenBelowPyramide?: React.ReactNode;
  pyramide?: boolean;
  pyramideStyle?: "left" | "mid" | undefined;
  title: string;
}

function HeaderImage(props: any) {
  const indexLeafTop = Platform.OS == "web" ? 750 : 250;

  return (
    <View
      style={{
        ...StyleSheet.absoluteFillObject,
        position: "absolute",
        alignItems: "flex-end",
      }}
    >
      <LeafIcon
        width={indexLeafTop}
        height={indexLeafTop}
        fill={colors.escendia_img_background_light}
      />
    </View>
  );
}

function Header(props: any) {
  const { navigate, openDrawer }: DrawerNavigationProp<DefaultStackParams> =
    useNavigation();

  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <View
        style={{
          paddingLeft: 20,
          flexDirection: "column",
        }}
      >
        <TouchableOpacity
          style={{ width: 40 }}
          onPress={() => {
            openDrawer();
          }}
        >
          <View
            style={{
              borderBottomColor: "black",
              borderBottomWidth: 1,
              margin: 5,
            }}
          />
          <View
            style={{
              borderBottomColor: "black",
              borderBottomWidth: 1,
              margin: 5,
              width: 20,
            }}
          />
          <View
            style={{
              borderBottomColor: "black",
              borderBottomWidth: 1,
              margin: 5,
            }}
          />
        </TouchableOpacity>
      </View>
      <View style={{ flex: Platform.OS == "web" ? 5 : 0 }}></View>
      <View
        style={{
          flex: Platform.OS == "web" ? 10 : 1,
          alignItems: Platform.OS == "web" ? "stretch" : "center",
        }}
      >
        <Image
          style={{
            resizeMode: "contain",
            height: 150,
          }}
          source={require("../assets/logo.png")}
        />
      </View>
      <EscendiaInput
        outlineStyle={{ borderWidth: 0 }}
        style={{
          flex: Platform.OS == "web" ? 4 : 3,
          borderWidth: 0,
          borderBottomWidth: 1,
          marginRight: 50,
        }}
        placeholder={props.search}
        iconName="text-search"
      />
      {Platform.OS == "web" ? (
        <View
          style={{
            flexDirection: "row-reverse",
            justifyContent: "flex-end",
            paddingRight: 50,
          }}
        >
          <EscendiaText onPress={() => navigate("SingIn")}>
            {props.login}
          </EscendiaText>
          <EscendiaText
            style={{
              marginLeft: 5,
              marginRight: 5,
            }}
          >
            |
          </EscendiaText>
          <EscendiaText onPress={() => navigate("SingUp")}>
            {props.register}
          </EscendiaText>
        </View>
      ) : null}
    </View>
  );
}

function HeadLine(props: any) {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        left:
          Platform.OS === "web"
            ? props.pyramideStyle == "left"
              ? -100
              : -300
            : props.pyramideStyle == "left"
            ? 70
            : 30,
      }}
    >
      <EscendiaText
        fontFamily="Simply Conception"
        color={colors.escendia_img_background_light}
        style={{
          fontSize: Platform.OS == "web" ? 250 : 75,
          fontWeight: "600",
          textAlign: "center",
          flex: Platform.OS == "web" ? 1 : undefined,
          marginHorizontal: Platform.OS == "web" ? 50 : -160,
        }}
      >
        {props.backgroundTitle}
      </EscendiaText>
      <EscendiaText
        style={{
          fontSize: Platform.OS == "web" ? 100 : 35,
          fontWeight: "600",
          flex: Platform.OS == "web" ? 1 : undefined,
          marginHorizontal: Platform.OS == "web" ? -650 : 0,
        }}
      >
        {props.title}
      </EscendiaText>
    </View>
  );
}

const EscendiaHeader = ({
  title,
  childrenBelowPyramide,
  pyramide,
  pyramideStyle,
  children,
  ...rest
}: EscendiaHeaderProps) => {
  const { t } = useTranslation();
  const user = useUserStore((state) => state.user);
  const setUser = useUserStore((state) => state.setUser);

  const lineHeaderMidValues = Platform.OS == "web" ? 40 : 10;
  const lineHeaderHeightMidValues = Platform.OS == "web" ? 100 : 40;
  const lineHeaderLeftValues = Platform.OS == "web" ? 400 : 100;
  const lineHeaderHeightLeftValues = Platform.OS == "web" ? 300 : 50;

  const lineHeader =
    pyramideStyle == "left" ? lineHeaderLeftValues : lineHeaderMidValues;
  const lineHeaderHeight =
    pyramideStyle == "left"
      ? lineHeaderHeightLeftValues
      : lineHeaderHeightMidValues;

  const lineHeaderLeftBorder = Dimensions.get("window").width / 2 - lineHeader;
  const lineHeaderRightBorder = Dimensions.get("window").width / 2 + lineHeader;

  return (
    <>
      {HeaderImage({})}
      {Header({
        login: t("Page_All_Header_SignIn"),
        register: t("Page_All_Header_SignUp"),
        search: t("Page_All_Header_Search"),
      })}
      {HeadLine({
        pyramideStyle: pyramideStyle,
        backgroundTitle: t("Escendia"),
        title: t(title),
      })}
      {children}
      <View
        style={{
          borderBottomWidth: lineHeaderHeight,
          borderBottomColor: colors.escendia_dark,
          borderLeftWidth: lineHeaderLeftBorder,
          borderRightWidth: lineHeaderRightBorder,
          borderLeftColor: colors.escendia_light,
          borderRightColor: colors.escendia_light,
        }}
      ></View>
      {childrenBelowPyramide}
    </>
  );
};

export default EscendiaHeader;
