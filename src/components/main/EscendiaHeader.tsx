import { uuidv4 } from "@firebase/util";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
import { calculate, isWeb } from "@services/functions";
import { useUserStore } from "@services/store/store";
import { StackParams } from "App";
import { t } from "i18next";
import React, { useState } from "react";
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

interface EscendiaHeaderLineProps {
  isWebValue?: boolean;
}

interface EscendiaHeadLineTitleProps {
  pyramideStyle?: "left" | "mid" | undefined;
  isWebValue?: boolean;
  pyramide?: boolean;
  title: string;
}

interface EscendiaHeadPyramideProps {
  pyramideStyle?: "left" | "mid" | undefined;
  pyramide?: boolean;
}

export const HeaderImage = React.memo(({}) => {
  const [key, setKey] = useState(uuidv4());
  const indexLeafTop = calculate("height", 750, 250);

  return (
    <View
      key={"HeaderImage_" + key}
      style={{
        ...StyleSheet.absoluteFillObject,
        position: "absolute",
        alignItems: "flex-end",
      }}
    >
      <LeafIcon
        key={"HeaderImage_Icon_" + key}
        width={indexLeafTop}
        height={indexLeafTop}
        fill={colors.escendia_img_background_light}
      />
    </View>
  );
});

export const HeaderLine = React.memo(
  ({ isWebValue }: EscendiaHeaderLineProps) => {
    const [key, setKey] = useState(uuidv4());
    const { navigate, openDrawer }: DrawerNavigationProp<StackParams> =
      useNavigation();
    const user = useUserStore((state) => state.user);

    return (
      <View
        key={"HeaderLine_Container_" + key}
        style={{ flexDirection: "row", alignItems: "center" }}
      >
        <View
          key={"HeaderLine_Container_Drawer_" + key}
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
        <View
          key={"HeaderLine_Container_Icon_" + key}
          style={{
            flex: calculate("none", 6, 1),
            alignItems: "center",
          }}
        >
          <TouchableOpacity onPress={() => navigate("Landing")}>
            <Image
              style={{
                height: calculate("height", 150, 90),
                width: calculate("width", 100, 50),
              }}
              source={require("../../assets/logo.png")}
            />
          </TouchableOpacity>
        </View>
        {isWebValue && !user ? (
          <View
            key={"HeaderLine_Container_LoginView_" + key}
            style={{
              flexDirection: "row-reverse",
              justifyContent: "flex-end",
              paddingRight: 50,
            }}
          >
            <EscendiaText
              key={"HeaderLine_Container_LoginView_SignIn_" + key}
              onPress={() => navigate("SignIn")}
            >
              {t("Page_All_Header_SignIn")}
            </EscendiaText>
            <EscendiaText
              style={{
                marginLeft: 5,
                marginRight: 5,
              }}
            >
              |
            </EscendiaText>
            <EscendiaText
              key={"HeaderLine_Container_LoginView_SignUp_" + key}
              onPress={() => navigate("SignUp")}
            >
              {t("Page_All_Header_SignUp")}
            </EscendiaText>
          </View>
        ) : null}
        {user && isWebValue ? (
          <View
            key={"HeaderLine_Container_LoginView_LoginContainer_" + key}
            style={{
              flexDirection: "row",
              justifyContent: "flex-end",
              paddingRight: 50,
            }}
          >
            <View
              key={"HeaderLine_Container_LoginView_LoginContainer_Text_" + key}
              style={{ alignItems: "flex-end" }}
            >
              <EscendiaText>{t("Page_All_Header_Welcome")}</EscendiaText>
              <EscendiaText>{user.displayName}</EscendiaText>
            </View>
            <View
              key={"HeaderLine_Container_LoginView_LoginContainer_Icon_" + key}
              style={{ borderRadius: 80 }}
            >
              <Image
                style={{
                  height: 50,
                  width: 50,
                  marginLeft: 10,
                  borderRadius: 80,
                }}
                source={
                  user.photoURL
                    ? user.photoURL
                    : require("../../assets/logo.png")
                }
              />
            </View>
          </View>
        ) : null}
      </View>
    );
  }
);

export const HeaderLineTitle = React.memo(
  ({
    pyramideStyle,
    isWebValue,
    title,
    pyramide,
  }: EscendiaHeadLineTitleProps) => {
    const [key, setKey] = useState(uuidv4());

    return pyramide === undefined || pyramide === true ? (
      <View
        key={"HeadLineTitle_Container_" + key}
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          left: calculate(
            "width",
            pyramideStyle == "left" ? -100 : -300,
            pyramideStyle == "left" ? 70 : 30
          ),
        }}
      >
        <EscendiaText
          key={"HeadLineTitle_Container_BackgroundText_" + key}
          fontFamily="Simply Conception"
          color={colors.escendia_img_background_light}
          style={{
            fontSize: calculate("none", 250, 75),
            fontWeight: "600",
            textAlign: "center",
            flex: isWebValue ? 1 : undefined,
            marginHorizontal: calculate("none", 50, -160),
          }}
        >
          {t("Page_All_Header_Escendia")}
        </EscendiaText>
        <EscendiaText
          key={"HeadLineTitle_Container_Title_" + key}
          style={{
            fontSize: calculate("none", 100, 35),
            fontWeight: "600",
            flex: isWebValue ? 1 : undefined,
            marginHorizontal: calculate("none", -650, 0),
          }}
        >
          {t(title)}
        </EscendiaText>
      </View>
    ) : undefined;
  }
);

export const HeaderPyramide = React.memo(
  ({ pyramideStyle, pyramide }: EscendiaHeadPyramideProps) => {
    const [key, setKey] = useState(uuidv4());

    const lineHeaderMidValues = calculate("height", 40, 10);
    const lineHeaderHeightMidValues = calculate("height", 100, 40);
    const lineHeaderLeftValues = calculate("height", 400, 100);
    const lineHeaderHeightLeftValues = calculate("height", 300, 50);

    const lineHeader =
      pyramideStyle == "left" ? lineHeaderLeftValues : lineHeaderMidValues;
    const lineHeaderHeight =
      pyramideStyle == "left"
        ? lineHeaderHeightLeftValues
        : lineHeaderHeightMidValues;

    const lineHeaderLeftBorder =
      Dimensions.get("window").width / 2 - lineHeader;
    const lineHeaderRightBorder =
      Dimensions.get("window").width / 2 + lineHeader;

    return pyramide === undefined || pyramide === true ? (
      <View
        key={"HeadPyramide_Container_" + key}
        style={{
          borderBottomWidth: lineHeaderHeight,
          borderBottomColor: colors.escendia_dark,
          borderLeftWidth: lineHeaderLeftBorder,
          borderRightWidth: lineHeaderRightBorder,
          borderLeftColor: colors.escendia_light,
          borderRightColor: colors.escendia_light,
        }}
      />
    ) : undefined;
  }
);

const EscendiaHeader = ({
  title,
  childrenBelowPyramide,
  pyramide,
  pyramideStyle,
  children,
  ...rest
}: EscendiaHeaderProps) => {
  const isWebValue = isWeb();

  return (
    <>
      <HeaderImage />
      <HeaderLine isWebValue={isWebValue} />
      <HeaderLineTitle
        title={title}
        isWebValue={isWebValue}
        pyramideStyle={pyramideStyle}
      />
      {children}
      <HeaderPyramide pyramide={pyramide} pyramideStyle={pyramideStyle} />
      {childrenBelowPyramide}
    </>
  );
};

export default EscendiaHeader;
