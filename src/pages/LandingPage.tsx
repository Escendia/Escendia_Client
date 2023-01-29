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
            <View
              style={{
                flexDirection: "row",
                backgroundColor: colors.escendia_dark,
                padding: 10,
                paddingLeft: 20,
                paddingRight: 20,
              }}
            >
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
            <EscendiaButton
              style={{ paddingLeft: 10 }}
              onPress={() => {
                console.log("PRESS");
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  backgroundColor: colors.escendia_dark,
                  padding: 10,
                  paddingLeft: 20,
                  paddingRight: 20,
                }}
              >
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
      <View>
        <View
          style={{
            alignItems: "center",
            flex: 1,
            alignSelf: "flex-end",
            paddingRight: 55,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              backgroundColor: colors.escendia_dark,
              padding: 5,
              paddingLeft: 20,
              paddingRight: 20,
              marginBottom: 10,
            }}
          >
            <AppleIcon width={20} fill={colors.escendia_light} />
            <View style={{ paddingLeft: 20 }}>
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
          <View>
            <View
              style={{
                flexDirection: "row",
                backgroundColor: colors.escendia_dark,
                padding: 5,
                paddingLeft: 20,
                paddingRight: 20,
              }}
            >
              <GoogleIcon width={20} fill={colors.escendia_light} />
              <View style={{ paddingLeft: 20 }}>
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
          </View>
        </View>
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
      <View
        style={{
          backgroundColor: colors.escendia_dark,
        }}
      >
        <View
          style={{
            ...StyleSheet.absoluteFillObject,
            position: "absolute",
            left: -100,
          }}
        >
          <LeafIcon
            width={800}
            fill={colors.escendia_img_background_dark}
            style={{ transform: [{ rotate: "270deg" }] }}
          />
        </View>
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
              Feature
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
            <View
              style={{
                flexDirection: "row",
                paddingTop: 10,
                paddingBottom: 10,
              }}
            >
              <TouchableOpacity
                style={{
                  backgroundColor: colors.escendia_light,
                  padding: 10,
                }}
                onPress={onPrevPress}
              >
                <EscendiaText style={{ fontWeight: "bold" }}>
                  {"<"}
                </EscendiaText>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: colors.escendia_light,
                  padding: 10,
                  marginLeft: 10,
                }}
                onPress={onNextPress}
              >
                <EscendiaText style={{ fontWeight: "bold" }}>
                  {">"}
                </EscendiaText>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ paddingRight: 100 }}>
            <EscendiaCarousel
              itemWidth={600}
              sliderWidth={800}
              data={[
                {
                  image: require("../assets/test.jpg"),
                  text: "1 Hier könnte ein Text stehen für Sie",
                },
                {
                  image: require("../assets/test.jpg"),
                  text: "2 Hier könnte ein Text stehen für Sie",
                },
                {
                  image: require("../assets/test.jpg"),
                  text: "3 Hier könnte ein Text stehen für Sie",
                },
                {
                  image: require("../assets/test.jpg"),
                  text: "4 Hier könnte ein Text stehen für Sie",
                },
                {
                  image: require("../assets/test.jpg"),
                  text: "5 Hier könnte ein Text stehen für Sie",
                },
              ]}
              renderItem={({ item }) => (
                <View
                  style={{
                    backgroundColor: "floralwhite",
                    borderRadius: 5,
                    height: 250,
                    padding: 5,
                    marginLeft: 5,
                    marginRight: 5,
                  }}
                >
                  <Image
                    style={{
                      flex: 1,
                    }}
                    source={item.image}
                  />
                </View>
              )}
            />
          </View>
        </View>
      </View>
    );
  }

  function FeatureLineMobile(props: any) {
    return (
      <View
        style={{
          backgroundColor: colors.escendia_dark,
        }}
      >
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
            {t("escendia_landingpage_text")}
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
          {t("escendia_features")}
        </EscendiaText>

        <EscendiaText
          color={colors.escendia_light}
          style={{
            fontWeight: "300",
            lineHeight: 24,
            textAlign: "center",
          }}
        >
          {t("escendia_landingpage_features")}
        </EscendiaText>
        <View style={{ flex: 1, paddingBottom: 50, paddingTop: 20 }}>
          <EscendiaCarousel
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
          />
        </View>
      </View>
    );
  }

  const ref = useRef<ICarouselInstance>(null);
  const onPrevPress = () => ref.current?.prev();
  const onNextPress = () => ref.current?.next();

  const setSliderPage = (event: any) => {
    const { currentPage } = sliderState;
    const { x } = event.nativeEvent.contentOffset;
    const indexOfNextScreen = Math.floor(x / width);
    if (indexOfNextScreen !== currentPage) {
      setSliderState({
        ...sliderState,
        currentPage: indexOfNextScreen,
      });
    }
    console.log(currentPage);
  };

  const [sliderState, setSliderState] = useState({ currentPage: 0 });
  const { width, height, scale } = Dimensions.get("screen");

  const SLIDER_WIDTH = Dimensions.get("window").width;
  const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);
  const ITEM_HEIGHT = Math.round((ITEM_WIDTH * 3) / 4);

  const indexLeafTop = Platform.OS == "web" ? calculate("height", 750) : 250;

  const bottle1Top = Platform.OS == "web" ? calculate("height", 350) : 115;
  const bottle1Right = Platform.OS == "web" ? calculate("width", 300) : 0;
  const bottle1Left = Platform.OS == "web" ? calculate("width", 400) : -180;
  const bottle1Width = Platform.OS == "web" ? 300 : 200;
  const bottle1Height = Platform.OS == "web" ? 600 : 200;

  const bottle2Top = Platform.OS == "web" ? calculate("height", 270) : 100;
  const bottle2Right = Platform.OS == "web" ? 0 : 0;
  const bottle2Left = Platform.OS == "web" ? calculate("width", 600) : -110;
  const bottle2Width = Platform.OS == "web" ? 300 : 200;
  const bottle2Height = Platform.OS == "web" ? 600 : 200;

  //Feault 1920 / 1080

  function calculate(type: "height" | "width", value: number) {
    let currentValue =
      type === "height"
        ? Dimensions.get("screen").height
        : Dimensions.get("screen").width;
    let defaultValue = type === "width" ? 1920 : 1080;
    console.log(currentValue, defaultValue);
    return (currentValue / defaultValue) * value;
  }

  console.log();

  return (
    <EscendiaDefaultPage
      title={"Name"}
      pyramideStyle={"left"}
      childrenHeaderBelowPyramide={
        <>
          <View
            style={{
              ...StyleSheet.absoluteFillObject,
              position: "absolute",
              top: bottle1Top,
              right: bottle1Right,
              left: bottle1Left,
              width: bottle1Width,
            }}
          >
            <Image
              style={{
                resizeMode: "stretch",
                height: bottle1Height,
              }}
              source={require("../assets/winebottle_1.png")}
            />
          </View>
          <View
            style={{
              ...StyleSheet.absoluteFillObject,
              position: "absolute",
              top: bottle2Top,
              right: bottle2Right,
              left: bottle2Left,
              width: bottle2Width,
            }}
          >
            <Image
              style={{
                resizeMode: "stretch",
                height: bottle2Height,
              }}
              source={require("../assets/winebottle_1.png")}
            />
          </View>
        </>
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
