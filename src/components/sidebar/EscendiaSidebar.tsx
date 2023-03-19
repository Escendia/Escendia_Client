import EscendiaSocialMedia from "@components/default/EscendiaSocialMedia";
import EscendiaText from "@components/default/EscendiaText";
import { MaterialIcons } from "@expo/vector-icons";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
import { calculate } from "@services/functions";
import { useDBStore, useUserStore } from "@services/store/store";
import { t } from "i18next";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { colors } from "../../services/styling/styles";
import LeafIcon from "../icons/LeafIcon";

interface EscendiaSidebarProps {
  props: DrawerContentComponentProps;
}

interface SideBarOptionProps {
  pageName: any;
}

export const SideBarOption = ({ pageName }: SideBarOptionProps) => {
  const navigator = useNavigation();
  const { t } = useTranslation();

  return (
    <TouchableOpacity
      key={"sidebar_option_container_" + pageName}
      style={{
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: colors.escendia_text_faded,
        padding: 25,
        marginLeft: 40,
        marginRight: 40,
      }}
      onPress={() => {
        navigator.navigate(pageName);
      }}
      activeOpacity={0.2}
    >
      <EscendiaText
        key={"sidebar_option_text_" + pageName}
        color={colors.escendia_light}
      >
        {t("Sidebar_" + pageName)}
      </EscendiaText>
    </TouchableOpacity>
  );
};

const EscendiaSidebar = ({ props, ...rest }: EscendiaSidebarProps) => {
  const user = useUserStore((state) => state.fireBaseUser);
  const auth = useDBStore((state) => state.auth);
  const [pages, setPages] = useState(["Landing", "SignIn", "SignUp"]);

  useEffect(() => {
    if (user) {
      setPages(["Landing", "Profile", "Creation", "Test"]);
    } else {
      setPages(["Landing", "SignIn", "SignUp"]);
    }
  }, [user]);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.escendia_dark,
      }}
    >
      <TouchableOpacity
        style={{
          paddingTop: 50,
          borderBottomWidth: 1,
          borderBottomColor: colors.escendia_text_faded,
          backgroundColor: colors.escendia_light,
        }}
      >
        <View
          style={{
            ...StyleSheet.absoluteFillObject,
            position: "absolute",
            alignItems: "flex-end",
          }}
        >
          <LeafIcon
            width={calculate("width", 300, 300)}
            height={calculate("height", 300, 300)}
            fill={colors.escendia_img_background_light}
          />
        </View>
        <View style={{ marginLeft: 30 }}>
          <EscendiaText
            onPress={() => {
              props.navigation.closeDrawer();
            }}
          >
            <EvilIcons name="close" size={32} color={colors.escendia_dark} />
          </EscendiaText>
        </View>
        <View>
          <View style={{ alignItems: "center" }}>
            <Image
              style={{
                height: calculate("height", 150, 150),
                width: calculate("width", 100, 100),
              }}
              source={
                user && user?.photoURL
                  ? user.photoURL
                  : require("../../assets/logo.png")
              }
            />
          </View>
          <View style={{ alignItems: "center", paddingBottom: 10 }}>
            <EscendiaText>{t("Sidebar_Header_Title1")}</EscendiaText>
            <EscendiaText>
              {user ? user.displayName : t("Sidebar_Header_Title2")}
            </EscendiaText>
          </View>
        </View>
      </TouchableOpacity>
      <DrawerContentScrollView
        contentContainerStyle={{
          backgroundColor: colors.escendia_dark,
          paddingTop: 10,
          flex: 1,
        }}
      >
        {pages.map((item, index) => {
          return <SideBarOption key={"sidebar_" + index} pageName={item} />;
        })}
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
        {user ? (
          <TouchableOpacity
            style={{
              alignItems: "center",
              marginLeft: 40,
              marginRight: 40,
              flexDirection: "row",
            }}
            activeOpacity={0.2}
            onPress={() => {
              auth.signOut();
            }}
          >
            <EscendiaText color={colors.escendia_light}>
              {t("Sidebar_LogOut")}
            </EscendiaText>

            <View style={{ marginLeft: 5 }}>
              <MaterialIcons
                name="logout"
                size={24}
                color={colors.escendia_light}
              />
            </View>
          </TouchableOpacity>
        ) : (
          <EscendiaSocialMedia
            size={20}
            color={colors.escendia_light}
            type="row"
          />
        )}
      </View>
    </View>
  );
};

export default EscendiaSidebar;
