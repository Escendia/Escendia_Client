import { DrawerNavigationProp } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
import { calculate, isWeb } from "@services/functions";
import { useUserStore } from "@services/store/store";
import { DefaultStackParams } from "App";
import React from "react";
import { useTranslation } from "react-i18next";
import {
  Dimensions,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { colors } from "../../services/styling/styles";
import EscendiaInput from "../default/EscendiaInput";
import EscendiaText from "../default/EscendiaText";
import LeafIcon from "../icons/LeafIcon";

interface EscendiaHeaderProps {
  children?: React.ReactNode;
  childrenBelowPyramide?: React.ReactNode;
  pyramide?: boolean;
  pyramideStyle?: "left" | "mid" | undefined;
  title: string;
}

function HeaderImage(props: any) {
  const indexLeafTop = calculate("height", 750, 250);

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
  const user = useUserStore((state) => state.user);

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
      <View style={{ flex: calculate("none", 5, 0) }}></View>
      <TouchableOpacity
        style={{
          flex: calculate("none", 10, 1),
          alignItems: "center",
        }}
        onPress={() => navigate("Landing")}
      >
        <Image
          style={{
            height: calculate("height", 150, 90),
            width: calculate("width", 100, 50),
          }}
          source={require("../../assets/logo.png")}
        />
      </TouchableOpacity>
      <EscendiaInput
        outlineStyle={{ borderWidth: 0 }}
        style={{
          flex: calculate("none", 4, 3),
          borderWidth: 0,
          borderBottomWidth: 1,
          marginRight: 50,
        }}
        placeholder={props.search}
        iconName="text-search"
      />
      {props.isWebValue && !user ? (
        <View
          style={{
            flexDirection: "row-reverse",
            justifyContent: "flex-end",
            paddingRight: 50,
          }}
        >
          <EscendiaText onPress={() => navigate("SignIn")}>
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
          <EscendiaText onPress={() => navigate("SignUp")}>
            {props.register}
          </EscendiaText>
        </View>
      ) : null}
      {user && props.isWebValue ? (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-end",
            paddingRight: 50,
          }}
        >
          <View style={{ alignItems: "flex-end" }}>
            <EscendiaText>{"Page_All_Header_Welcome"}</EscendiaText>
            <EscendiaText>{user.displayName}</EscendiaText>
          </View>
          <View style={{ borderRadius: 80 }}>
            <Image
              style={{
                height: 50,
                width: 50,
                marginLeft: 10,
                borderRadius: 80,
              }}
              source={
                user.photoURL ? user.photoURL : require("../../assets/logo.png")
              }
            />
          </View>
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
        left: calculate(
          "width",
          props.pyramideStyle == "left" ? -100 : -300,
          props.pyramideStyle == "left" ? 70 : 30
        ),
      }}
    >
      <EscendiaText
        fontFamily="Simply Conception"
        color={colors.escendia_img_background_light}
        style={{
          fontSize: calculate("none", 250, 75),
          fontWeight: "600",
          textAlign: "center",
          flex: props.isWebValue ? 1 : undefined,
          marginHorizontal: calculate("none", 50, -160),
        }}
      >
        {props.backgroundTitle}
      </EscendiaText>
      <EscendiaText
        style={{
          fontSize: calculate("none", 100, 35),
          fontWeight: "600",
          flex: props.isWebValue ? 1 : undefined,
          marginHorizontal: calculate("none", -650, 0),
        }}
      >
        {props.title}
      </EscendiaText>
    </View>
  );
}

function HeaderPyramide(props: any) {
  const lineHeaderMidValues = calculate("height", 40, 10);
  const lineHeaderHeightMidValues = calculate("height", 100, 40);
  const lineHeaderLeftValues = calculate("height", 400, 100);
  const lineHeaderHeightLeftValues = calculate("height", 300, 50);

  const lineHeader =
    props.pyramideStyle == "left" ? lineHeaderLeftValues : lineHeaderMidValues;
  const lineHeaderHeight =
    props.pyramideStyle == "left"
      ? lineHeaderHeightLeftValues
      : lineHeaderHeightMidValues;

  const lineHeaderLeftBorder = Dimensions.get("window").width / 2 - lineHeader;
  const lineHeaderRightBorder = Dimensions.get("window").width / 2 + lineHeader;

  return (
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
  const isWebValue = isWeb();

  return (
    <>
      {HeaderImage({})}
      {Header({
        login: t("Page_All_Header_SignIn"),
        register: t("Page_All_Header_SignUp"),
        search: t("Page_All_Header_Search"),
        isWebValue: isWebValue,
      })}
      {HeadLine({
        pyramideStyle: pyramideStyle,
        backgroundTitle: t("Escendia"),
        title: t(title),
        isWebValue: isWebValue,
      })}
      {children}
      {HeaderPyramide({
        pyramideStyle: pyramideStyle,
      })}
      {childrenBelowPyramide}
    </>
  );
};

export default EscendiaHeader;
