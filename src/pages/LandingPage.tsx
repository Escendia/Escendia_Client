import { Image, Linking, StyleSheet, View } from "react-native";
import AppleIcon from "../components/icons/AppleIcon";
import GoogleIcon from "../components/icons/GoogleIcon";
import LeafIcon from "../components/icons/LeafIcon";
import { colors } from "../services/styling/styles";

import EscendiaButton from "@components/default/EscendiaButton";
import EscendiaSocialMedia from "@components/default/EscendiaSocialMedia";
import EscendiaDefaultPage from "@components/main/EscendiaDefaultPage";
import {
  calculate,
  getDatabaseValues,
  isWeb,
  updateDatabaseValue,
} from "@services/functions";

import EscendiaCarousel from "@components/default/EscendiaCarousel";
import EscendiaText from "@components/default/EscendiaText";
import { EscendiaUser } from "@config/models/EscendiaUser";
import { Ionicons } from "@expo/vector-icons";
import { useDBStore, useUserStore } from "@services/store/store";
import { t } from "i18next";
import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { StackParams } from "App";
import { useToast } from "react-native-toast-notifications";
import { DrawerNavigationProp } from "@react-navigation/drawer";

function LandingPage(props) {
  const HeaderText = () => {
    return (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={{ flex: 7 }}></View>
        <View style={{ flex: 5 }}>
          <EscendiaText
            style={{
              fontSize: 24,
              fontWeight: "100",
              lineHeight: 34,
            }}
          >
            {t("Page_Landing_MainText")}
          </EscendiaText>
          <View
            style={{
              flexDirection: "row",
              paddingTop: 10,
              alignItems: "center",
            }}
          >
            <EscendiaButton
              style={{ margin: 10, backgroundColor: colors.escendia_dark }}
              onPress={() => {
                Linking.openURL("https://play.google.com/store/apps");
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Ionicons
                  size={50}
                  color={colors.escendia_light}
                  name="logo-google-playstore"
                />
                <View style={{ paddingLeft: 20 }}>
                  <EscendiaText
                    color={colors.escendia_light}
                    style={{
                      fontWeight: "300",
                    }}
                  >
                    {t("Page_Landing_Available")}
                  </EscendiaText>
                  <EscendiaText
                    color={colors.escendia_light}
                    style={{
                      fontWeight: "bold",
                      fontSize: 24,
                    }}
                  >
                    {t("Page_Landing_AndroidStore")}
                  </EscendiaText>
                </View>
              </View>
            </EscendiaButton>
            <EscendiaButton
              style={{ margin: 10, backgroundColor: colors.escendia_dark }}
              onPress={() => {
                Linking.openURL("https://www.apple.com/de/app-store/");
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Ionicons
                  size={50}
                  color={colors.escendia_light}
                  name="logo-apple-appstore"
                />
                <View style={{ paddingLeft: 20 }}>
                  <EscendiaText
                    color={colors.escendia_light}
                    style={{
                      fontWeight: "300",
                    }}
                  >
                    {t("Page_Landing_Available")}
                  </EscendiaText>
                  <EscendiaText
                    color={colors.escendia_light}
                    style={{
                      fontWeight: "bold",
                      fontSize: 24,
                    }}
                  >
                    {t("Page_Landing_IOSStore")}
                  </EscendiaText>
                </View>
              </View>
            </EscendiaButton>
          </View>
        </View>
        <View style={{ paddingRight: 50 }}>
          <EscendiaSocialMedia size={30} color={colors.escendia_dark} />
        </View>
      </View>
    );
  };

  const HeaderTextMobile = () => {
    return (
      <View
        style={{
          alignItems: "center",
          flex: 1,
          alignSelf: "flex-end",
          paddingRight: 55,
        }}
      >
        <EscendiaButton
          style={{ backgroundColor: colors.escendia_dark }}
          onPress={() => {
            Linking.openURL("https://play.google.com/store/apps");
          }}
          iconLeft={
            <AppleIcon height={25} width={25} fill={colors.escendia_light} />
          }
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View style={{ paddingLeft: 10 }}>
              <EscendiaText
                color={colors.escendia_light}
                style={{
                  fontSize: 10,
                  fontWeight: "300",
                }}
              >
                {t("Page_Landing_Available")}
              </EscendiaText>
              <EscendiaText
                color={colors.escendia_light}
                style={{
                  fontWeight: "bold",
                  fontSize: 12,
                }}
              >
                {t("Page_Landing_IOSStore")}
              </EscendiaText>
            </View>
          </View>
        </EscendiaButton>
        <EscendiaButton
          style={{ marginTop: 10, backgroundColor: colors.escendia_dark }}
          onPress={() => {
            Linking.openURL("https://play.google.com/store/apps");
          }}
          iconLeft={
            <GoogleIcon height={25} width={25} fill={colors.escendia_light} />
          }
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View style={{ paddingLeft: 10 }}>
              <EscendiaText
                color={colors.escendia_light}
                style={{
                  fontSize: 10,
                  fontWeight: "300",
                }}
              >
                {t("Page_Landing_Available")}
              </EscendiaText>
              <EscendiaText
                color={colors.escendia_light}
                style={{
                  fontWeight: "bold",
                  fontSize: 12,
                }}
              >
                {t("Page_Landing_AndroidStore")}
              </EscendiaText>
            </View>
          </View>
        </EscendiaButton>
      </View>
    );
  };

  const FeatureLine = () => {
    return (
      <View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <View style={{ flex: 1 }}></View>
          <View style={{ flex: 1, flexDirection: "column" }}>
            <EscendiaText
              fontFamily={"Simply Conception"}
              color={colors.escendia_light}
              style={{
                fontSize: 100,
                fontWeight: "600",
                lineHeight: 100,
              }}
            >
              {t("Page_Landing_Feature_Title")}
            </EscendiaText>
            <EscendiaText
              color={colors.escendia_light}
              style={{
                fontSize: 24,
                fontWeight: "300",
                lineHeight: 24,
              }}
            >
              {t("Page_Landing_Feature_Text")}
            </EscendiaText>
          </View>
          <View style={{ flex: 1, alignItems: "center" }}>
            {/*             <EscendiaText color={colors.escendia_light}>
              {t("Page_Landing_Feature_CommingSoon")}
            </EscendiaText> */}
            <EscendiaCarousel
              itemWidth={300}
              data={[
                {
                  name: t("Page_Landing_Carousel_Beverages_Title"),
                  modalTitle: t("Page_Landing_Carousel_Beverages_Modal_Title"),
                  modalBody: t("Page_Landing_Carousel_Beverages_Modal_Body"),
                  image: require("../assets/beverages.jpg"),
                },
                {
                  name: t("Page_Landing_Carousel_Producer_Title"),
                  modalTitle: t("Page_Landing_Carousel_Producer_Modal_Title"),
                  modalBody: t("Page_Landing_Carousel_Producer_Modal_Body"),
                  image: require("../assets/producer.jpg"),
                },
                {
                  name: t("Page_Landing_Carousel_Events_Title"),
                  modalTitle: t("Page_Landing_Carousel_Events_Modal_Title"),
                  modalBody: t("Page_Landing_Carousel_Events_Modal_Body"),
                  image: require("../assets/event.jpg"),
                },
                {
                  name: t("Page_Landing_Carousel_TasteList_Title"),
                  modalTitle: t("Page_Landing_Carousel_TasteList_Modal_Title"),
                  modalBody: t("Page_Landing_Carousel_TasteList_Modal_Body"),
                  image: require("../assets/tastinglist.jpg"),
                },
                {
                  name: t("Page_Landing_Scan_Title"),
                  image: require("../assets/questionmark.jpg"),
                },
              ]}
            />
          </View>
        </View>
      </View>
    );
  };

  const FeatureLineMobile = () => {
    return (
      <View style={{ paddingTop: 10, paddingBottom: 10 }}>
        <View
          style={{
            ...StyleSheet.absoluteFillObject,
            position: "absolute",
            left: -100,
          }}
        >
          <LeafIcon
            height={indexLeafTop}
            fill={colors.escendia_img_background_dark}
            style={{ transform: [{ rotate: "270deg" }] }}
          />
        </View>
        <EscendiaText
          color={colors.escendia_light}
          style={{
            textAlign: "center",
          }}
        >
          {t("Page_Landing_MainText")}
        </EscendiaText>

        <EscendiaText
          fontFamily={"Simply Conception"}
          color={colors.escendia_light}
          style={{
            fontSize: 50,
            fontWeight: "600",
            lineHeight: 100,
            textAlign: "center",
          }}
        >
          {t("Page_Landing_Feature_Title")}
        </EscendiaText>

        <EscendiaText
          color={colors.escendia_light}
          style={{
            margin: 10,
            textAlign: "center",
          }}
        >
          {t("Page_Landing_Feature_Text")}
        </EscendiaText>
        <View style={{ flex: 1 }}>
          <EscendiaCarousel
            itemWidth={300}
            data={[
              {
                name: t("Page_Landing_Carousel_Beverages_Title"),
                modalTitle: t("Page_Landing_Carousel_Beverages_Modal_Title"),
                modalBody: t("Page_Landing_Carousel_Beverages_Modal_Body"),
                image: require("../assets/beverages.jpg"),
              },
              {
                name: t("Page_Landing_Carousel_Producer_Title"),
                modalTitle: t("Page_Landing_Carousel_Producer_Modal_Title"),
                modalBody: t("Page_Landing_Carousel_Producer_Modal_Body"),
                image: require("../assets/producer.jpg"),
              },
              {
                name: t("Page_Landing_Carousel_Events_Title"),
                modalTitle: t("Page_Landing_Carousel_Events_Modal_Title"),
                modalBody: t("Page_Landing_Carousel_Events_Modal_Body"),
                image: require("../assets/event.jpg"),
              },
              {
                name: t("Page_Landing_Carousel_TasteList_Title"),
                modalTitle: t("Page_Landing_Carousel_TasteList_Modal_Title"),
                modalBody: t("Page_Landing_Carousel_TasteList_Modal_Body"),
                image: require("../assets/tastinglist.jpg"),
              },
              {
                name: t("Page_Landing_Scan_Title"),
                image: require("../assets/questionmark.jpg"),
              },
            ]}
          />
        </View>
      </View>
    );
  };

  const indexLeafTop = calculate("height", 750, 0);

  const bottle1Top = calculate("height", 350, 105);
  const bottle1Left = calculate("width", 400, 0);
  const bottleWidth = calculate("width", 300, 200);
  const bottleHeight = calculate("height", 600, 200);

  const bottle2Top = calculate("height", 270, 120);
  const bottle2Left = calculate("width", 600, 60);
  const auth = useDBStore((state) => state.auth);
  const setUser = useUserStore((state) => state.setUser);
  const setFireBaseUser = useUserStore((state) => state.setFireBaseUser);
  const { navigate, openDrawer }: DrawerNavigationProp<StackParams> =
    useNavigation();

  const toast = useToast();

  //Umschalten der Seiten nachdem ein User angemeldet wurde
  useEffect(() => {
    if (auth === undefined) return;
    auth.onAuthStateChanged((user) => {
      if (user) {
        setFireBaseUser(user);
        getDatabaseValues("user", { fireBaseID: user.uid }, null, toast).then(
          (values: Array<EscendiaUser>) => {
            if (values.length > 0) {
              setUser(values[0]);
              toast.show("Toast_Success_Login");
            } else {
              var newUser: EscendiaUser = new EscendiaUser();
              newUser.fireBaseID = user.uid;
              var userArray = [newUser];
              updateDatabaseValue(userArray, "user", null, toast).then(
                (values: Array<EscendiaUser>) => {
                  if (values.length > 0) {
                    setUser(values[0]);
                    toast.show("Toast_Success_Login");
                  } else {
                    toast.show("Toast_Danger_Creation");
                    auth.signOut();
                  }
                }
              );
            }
          }
        );
      } else {
        setUser(null);
        setFireBaseUser(null);
        toast.show("Toast_Success_LogOut");
      }

      navigate("Creation");
    });
  }, [auth]);

  return (
    <EscendiaDefaultPage
      title={"Name"}
      pyramideStyle={"left"}
      childrenHeaderBelowPyramide={
        <View style={{ position: "absolute" }}>
          <View
            style={{
              ...StyleSheet.absoluteFillObject,
              top: bottle1Top,
              left: bottle1Left,
            }}
          >
            <Image
              style={{
                resizeMode: "contain",
                height: bottleHeight,
                width: bottleWidth,
              }}
              source={require("../assets/winebottle_1.png")}
            />
          </View>
          <View
            style={{
              ...StyleSheet.absoluteFillObject,
              top: bottle2Top,
              left: bottle2Left,
            }}
          >
            <Image
              style={{
                resizeMode: "contain",
                height: bottleHeight,
                width: bottleWidth,
              }}
              source={require("../assets/winebottle_1.png")}
            />
          </View>
        </View>
      }
      childrenHeader={isWeb() ? <HeaderText /> : <HeaderTextMobile />}
    >
      {isWeb() ? <FeatureLine /> : <FeatureLineMobile />}
    </EscendiaDefaultPage>
  );
}

export default LandingPage;
