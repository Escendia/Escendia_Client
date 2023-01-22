import { useNavigation } from "@react-navigation/native";
import { MutableRefObject, useLayoutEffect } from "react";
import {
  Text,
  View,
  Button,
  Dimensions,
  Image,
  Platform,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  GestureResponderEvent,
} from "react-native";
import { colors } from "../services/styling/styles";
import LeafIcon from "../components/icons/LeafIcon";
import AppleIcon from "../components/icons/AppleIcon";
import GoogleIcon from "../components/icons/GoogleIcon";
import InstagramIcon from "../components/icons/InstagramIcon";
import FacebookIcon from "../components/icons/FacebookIcon";
import TwitterIcon from "../components/icons/TwitterIcon";
import EscendiaText from "../components/EscendiaText";
import EscendiaInput from "../components/EscendiaInput";
import EscendiaCarousel from "../components/EscendiaCarousel";
import ACarousel, { Carousel } from "react-native-snap-carousel";

import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/FontAwesome";
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { ICarouselInstance } from "react-native-reanimated-carousel";
import { useTranslation } from "react-i18next";

function LandingPage() {
  const navigation = useNavigation();
  const { t } = useTranslation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  function HeaderImage(props: any) {
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
    return (
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View
          style={{
            paddingLeft: 20,
            flexDirection: "column",
          }}
        >
          <View style={{ width: 40 }}>
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
          </View>
        </View>
        <View
          style={{
            flex: Platform.OS == "web" ? 6 : 1,
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
          style={{
            flex: Platform.OS == "web" ? 4 : 3,
            borderBottomWidth: 1,
            marginRight: 50,
          }}
          placeholder="Suche..."
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
            <EscendiaText onPress={() => console.log("TEST")}>
              {t("escendia_login")}
            </EscendiaText>
            <EscendiaText
              style={{
                marginLeft: 5,
                marginRight: 5,
              }}
            >
              |
            </EscendiaText>
            <EscendiaText>{t("escendia_register")}</EscendiaText>
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
        }}
      >
        <EscendiaText
          fontFamily="Simply Conception"
          color={colors.escendia_img_background_light}
          style={{
            fontSize: Platform.OS == "web" ? 250 : 75,
            fontWeight: "600",
            marginHorizontal: Platform.OS == "web" ? -200 : -60,
          }}
        >
          {t("escendia_name")}
        </EscendiaText>
        <EscendiaText
          style={{
            fontSize: Platform.OS == "web" ? 100 : 35,
            fontWeight: "600",
            marginHorizontal: Platform.OS == "web" ? 0 : -50,
          }}
        >
          {t("escendia_name")}
        </EscendiaText>
      </View>
    );
  }

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
            {t("escendia_landingpage_text")}
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
                  {t("escendia_available")}
                </EscendiaText>
                <EscendiaText
                  color={colors.escendia_light}
                  style={{
                    fontWeight: "bold",
                    fontSize: 24,
                  }}
                >
                  {t("escendia_androidstore")}
                </EscendiaText>
              </View>
            </View>
            <View style={{ paddingLeft: 10 }}>
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
                    {t("escendia_available")}
                  </EscendiaText>
                  <EscendiaText
                    color={colors.escendia_light}
                    style={{
                      fontWeight: "bold",
                      fontSize: 24,
                    }}
                  >
                    {t("escendia_appstore")}
                  </EscendiaText>
                </View>
              </View>
            </View>
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
                {t("escendia_available")}
              </EscendiaText>
              <EscendiaText
                color={colors.escendia_light}
                style={{
                  fontWeight: "bold",
                  fontSize: 12,
                }}
              >
                {t("escendia_appstore")}
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
                  {t("escendia_available")}
                </EscendiaText>
                <EscendiaText
                  color={colors.escendia_light}
                  style={{
                    fontWeight: "bold",
                    fontSize: 12,
                  }}
                >
                  {t("escendia_androidstore")}
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
          <View style={{ flex: 1, padding: 10 }}>
            <FacebookIcon width={23} fill={colors.escendia_dark} />
          </View>
          <View
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
          </View>
          <View style={{ flex: 1, padding: 10 }}>
            <InstagramIcon width={28} fill={colors.escendia_dark} />
          </View>
        </View>
      </View>
    );
  }

  function SocialMediaRow(props: any) {
    return (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginTop: 10,
        }}
      >
        <View style={{ flex: 1, padding: 5 }}>
          <FacebookIcon height={24} fill={colors.escendia_dark} />
        </View>
        <View
          style={{
            flex: 1,
            borderRadius: 1,
            borderLeftWidth: 1,
            borderRightWidth: 1,
            borderStyle: "dashed",
            borderColor: colors.escendia_dark,
            padding: 5,
          }}
        >
          <TwitterIcon height={24} fill={colors.escendia_dark} />
        </View>
        <View style={{ flex: 1, padding: 5 }}>
          <InstagramIcon height={24} fill={colors.escendia_dark} />
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
              {t("escendia_landingpage_features")}
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
              height={600}
              width={800}
              data={[
                require("../assets/test.jpg"),
                require("../assets/test.jpg"),
                require("../assets/test.jpg"),
              ]}
              renderItem={({ item, index }) => (
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
                    source={item}
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
                      Hier könnte ein Text stehen für Sie
                    </EscendiaText>
                  </View>
                </TouchableOpacity>
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
            height={600}
            width={800}
            data={[
              require("../assets/test.jpg"),
              require("../assets/test.jpg"),
              require("../assets/test.jpg"),
            ]}
            renderItem={({ item, index }) => (
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
                  source={item}
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
                    Hier könnte ein Text stehen für Sie
                  </EscendiaText>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    );
  }

  function Footer(props: any) {
    return (
      <View
        style={{
          backgroundColor: colors.escendia_light,
        }}
      >
        <View style={{ paddingTop: 20 }}>
          <EscendiaText style={{ textAlign: "center" }}>
            {t("escendia_landingpage_footertext")}
          </EscendiaText>
        </View>
        <View
          style={{
            paddingTop: 20,
            flex: 1,
            flexDirection: Platform.OS === "web" ? "row" : "column",
          }}
        >
          <View
            style={{
              flex: 2,
              alignItems: "center",
            }}
          >
            <EscendiaText
              style={{
                fontWeight: "bold",
                paddingBottom: 10,
              }}
            >
              {t("escendia_service")}
            </EscendiaText>
            <EscendiaText>{t("escendia_agb")}</EscendiaText>
            <EscendiaText>{t("escendia_privacy")}</EscendiaText>
            <EscendiaText>{t("escendia_cookiesetting")}</EscendiaText>
            <EscendiaText>{t("escendia_payment")}</EscendiaText>
          </View>
          <View
            style={{
              flex: 1,
              alignItems: Platform.OS === "web" ? undefined : "center",
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
          <View style={{ flex: 2, alignItems: "center" }}>
            <EscendiaText
              style={{
                fontWeight: "bold",
                paddingBottom: 10,
              }}
            >
              {t("escendia_company")}
            </EscendiaText>
            <EscendiaText>{t("escendia_impressum")}</EscendiaText>
            <EscendiaText>{t("escendia_aboutus")}</EscendiaText>
            <EscendiaText>{t("escendia_contactus")}</EscendiaText>
          </View>
        </View>
        <View
          style={{
            flexDirection: "column",
            paddingTop: 20,
            paddingBottom: 20,
            borderTopColor: colors.escendia_dark,
            borderTopWidth: 1,
          }}
        >
          <View
            style={{
              flex: 1,
              alignItems: "center",
            }}
          >
            <EscendiaText>Copyright © 2023. All rights reserved.</EscendiaText>
          </View>
          {SocialMediaRow({})}
        </View>
      </View>
    );
  }

  const indexLeafTop = Platform.OS == "web" ? 750 : 250;
  const lineHeader = Platform.OS == "web" ? 400 : 100;
  const lineHeaderHeight = Platform.OS == "web" ? 300 : 50;

  const bottle1Top = Platform.OS == "web" ? 270 : 210;
  const bottle1Right = Platform.OS == "web" ? 500 : 0;
  const bottle1Left = Platform.OS == "web" ? 0 : -180;
  const bottle1Height = Platform.OS == "web" ? 800 : 200;

  const bottle2Top = Platform.OS == "web" ? 210 : 190;
  const bottle2Right = Platform.OS == "web" ? 0 : 0;
  const bottle2Left = Platform.OS == "web" ? 0 : -110;
  const bottle2Height = Platform.OS == "web" ? 800 : 200;

  const ref = useRef<ICarouselInstance>(null);
  const onPrevPress = () => ref.current?.prev();
  const onNextPress = () => ref.current?.next();
  const ref2 = useRef<Carousel<any>>(null);

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
  const { width, height } = Dimensions.get("window");

  const SLIDER_WIDTH = Dimensions.get("window").width;
  const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);
  const ITEM_HEIGHT = Math.round((ITEM_WIDTH * 3) / 4);

  return (
    <SafeAreaView style={{ backgroundColor: colors.escendia_light, flex: 1 }}>
      <ScrollView>
        {HeaderImage({})}
        {Header({})}
        {HeadLine({})}
        {Platform.OS == "web" ? <HeaderText /> : <HeaderTextMobile />}
        <View
          style={{
            backgroundColor: "black",
            borderBottomWidth: lineHeaderHeight,
            borderBottomColor: colors.escendia_dark,
            borderLeftWidth: Dimensions.get("window").width / 2 - lineHeader,
            borderRightWidth: Dimensions.get("window").width / 2 + lineHeader,
            borderLeftColor: colors.escendia_light,
            borderRightColor: colors.escendia_light,
          }}
        ></View>
        <View
          style={{
            ...StyleSheet.absoluteFillObject,
            position: "absolute",
            top: bottle1Top,
            right: bottle1Right,
            left: bottle1Left,
          }}
        >
          <Image
            style={{
              resizeMode: "contain",
              height: bottle1Height,
            }}
            source={require("../assets/winebottle.png")}
          />
        </View>
        <View
          style={{
            ...StyleSheet.absoluteFillObject,
            position: "absolute",
            top: bottle2Top,
            right: bottle2Right,
            left: bottle2Left,
          }}
        >
          <Image
            style={{
              resizeMode: "contain",
              height: bottle2Height,
            }}
            source={require("../assets/winebottle.png")}
          />
        </View>
        {/*         {Platform.OS == "web" ? <FeatureLine /> : <FeatureLineMobile />}
         */}

        <View
          style={{
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <View
            style={{ backgroundColor: "pink", alignItems: "center" }}
          >
            <ACarousel
              ref={ref2}
              vertical={false}
              activeSlideAlignment={"center"}
              sliderWidth={400}
              itemWidth={300}
              layout={"default"}
              useScrollView={false}
              inactiveSlideScale={0.9}
              inactiveSlideOpacity={0.3}
              firstItem={1}
              enableSnap={true}
              data={[
                { title: "title1", text: "text" },
                { title: "title2", text: "text" },
                { title: "title3", text: "text" },
              ]}
              renderItem={({ item }: { item: any }) => {
                return (
                  <View
                    style={{
                      backgroundColor: "floralwhite",
                      borderRadius: 5,
                      height: 250,
                      padding: 30,
                      marginLeft: 5,
                      marginRight: 5,
                    }}
                  >
                    <Text style={{ fontSize: 30 }}>{item.title}</Text>
                    <Text>{item.text}</Text>
                  </View>
                );
              }}
            />
          </View>
          <TouchableOpacity
            style={{ backgroundColor: "blue", position: "absolute", left: 345 }}
            onPress={() => {
              ref2.current?.snapToItem(0);
            }}
          >
            <Text>{"<"}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ backgroundColor: "grey", position: "absolute", left: 40 }}
            onPress={() => {
              ref2.current?.snapToItem(2);
            }}
          >
            <Text>{">"}</Text>
          </TouchableOpacity>
        </View>
        {Footer({})}
      </ScrollView>
    </SafeAreaView>
  );
}

export default LandingPage;
