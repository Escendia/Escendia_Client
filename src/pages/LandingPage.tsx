import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import {
  Dimensions,
  Image,
  Linking,
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import EscendiaCarousel from "../components/EscendiaCarousel";
import EscendiaText from "../components/EscendiaText";
import AppleIcon from "../components/icons/AppleIcon";
import FacebookIcon from "../components/icons/FacebookIcon";
import GoogleIcon from "../components/icons/GoogleIcon";
import InstagramIcon from "../components/icons/InstagramIcon";
import LeafIcon from "../components/icons/LeafIcon";
import TwitterIcon from "../components/icons/TwitterIcon";
import { colors } from "../services/styling/styles";

import EscendiaDefaultPage from "@components/EscendiaDefaultPage";
import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { ICarouselInstance } from "react-native-reanimated-carousel";
import EscendiaButton from "@components/EscendiaButton";
import { calculate } from "@services/functions";

function LandingPage() {
  const navigation = useNavigation();
  const { t } = useTranslation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  function HeaderText(props: any) {
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
                <AppleIcon width={30} fill={colors.escendia_light} />
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
                <GoogleIcon width={30} fill={colors.escendia_light} />
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
        <SocialMediaSide />
      </View>
    );
  }

  function HeaderTextMobile(props: any) {
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
          style={{ margin: 10, backgroundColor: colors.escendia_dark }}
          onPress={() => {
            Linking.openURL("https://play.google.com/store/apps");
          }}
          iconLeft={
            <AppleIcon height={30} width={30} fill={colors.escendia_light} />
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
          style={{ backgroundColor: colors.escendia_dark }}
          onPress={() => {
            Linking.openURL("https://play.google.com/store/apps");
          }}
          iconLeft={
            <GoogleIcon height={30} width={30} fill={colors.escendia_light} />
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
  }

  function SocialMediaSide(props: any) {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "flex-end",
          paddingRight: 50,
          paddingTop: 200,
        }}
      >
        <View style={{ flexDirection: "column", alignItems: "center" }}>
          <TouchableOpacity
            style={{ flex: 1, padding: 10 }}
            onPress={() => {
              Linking.openURL("http://www.facebook.de");
            }}
          >
            <FacebookIcon width={23} fill={colors.escendia_dark} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              Linking.openURL("http://www.twitter.de");
            }}
            style={{
              flex: 1,
              borderRadius: 1,
              borderBottomWidth: 1,
              borderTopWidth: 1,
              borderStyle: "dashed",
              borderColor: colors.escendia_dark,
              paddingTop: 10,
              paddingBottom: 3,
            }}
          >
            <TwitterIcon width={28} fill={colors.escendia_dark} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{ flex: 1, padding: 10 }}
            onPress={() => {
              Linking.openURL("http://www.instagram.de");
            }}
          >
            <InstagramIcon width={28} fill={colors.escendia_dark} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  function FeatureLine(props: any) {
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
            <EscendiaText color={colors.escendia_light}>
              {t("Page_Landing_Feature_CommingSoon")}
            </EscendiaText>
          </View>
        </View>
      </View>
    );
  }

  function FeatureLineMobile(props: any) {
    return (
      <View style={{}}>
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
        <View style={{ flex: 1 }}>
          <EscendiaText
            style={{
              fontWeight: "100",
              lineHeight: 34,
              color: colors.escendia_light,
              textAlign: "center",
            }}
          >
            {t("Page_Landing_MainText")}
          </EscendiaText>
        </View>

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
            fontWeight: "300",
            lineHeight: 24,
            textAlign: "center",
          }}
        >
          {t("Page_Landing_Feature_Text")}
        </EscendiaText>
        <EscendiaText
          color={colors.escendia_light}
          style={{ textAlign: "center" }}
        >
          {t("Page_Landing_Feature_CommingSoon")}
        </EscendiaText>
        {/*           <EscendiaCarousel
            itemWidth={600}
            sliderWidth={800}
            data={[
              {
                image: require("../assets/test.jpg"),
                text: "Hier könnte ein Text stehen für Sie",
              },
            ]}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => console.log("GEILOMEILO")}
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: 20,
                }}
              >
                <Image
                  style={{
                    flex: 1,
                    width: 800,
                    height: 600,
                  }}
                  source={item.image}
                />
                <View
                  style={{
                    position: "absolute",
                    bottom: 20,
                    backgroundColor: colors.escendia_light,
                    padding: 20,
                  }}
                >
                  <EscendiaText
                    style={{
                      color: colors.escendia_dark,
                      fontWeight: "600",
                      fontSize: 26,
                      lineHeight: 30,
                    }}
                  >
                    {item.text}
                  </EscendiaText>
                </View>
              </TouchableOpacity>
            )}
          /> */}
      </View>
    );
  }

  const indexLeafTop = calculate("height", 750, 0);

  const bottle1Top = calculate("height", 350, 200);
  const bottle1Left = calculate("width", 400, 0);
  const bottleWidth = Platform.OS == "web" ? 300 : calculate("width", 0, 200);
  const bottleHeight = Platform.OS == "web" ? 600 : calculate("height", 0, 200);

  const bottle2Top = calculate("height", 270, 180);
  const bottle2Left = calculate("width", 600, 60);

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
      childrenHeader={
        Platform.OS == "web" ? <HeaderText /> : <HeaderTextMobile />
      }
    >
      {Platform.OS == "web" ? <FeatureLine /> : <FeatureLineMobile />}
    </EscendiaDefaultPage>
  );
}

export default LandingPage;
