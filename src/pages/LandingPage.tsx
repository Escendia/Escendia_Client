import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
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

import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/FontAwesome";
import Carousel, { ICarouselInstance } from "react-native-reanimated-carousel";
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";

function LandingPage() {
  const navigation = useNavigation();

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
          top: 0,
          right: 0,
          left: Dimensions.get("window").width / 2,
        }}
      >
        <LeafIcon
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

        {/*         <View
          style={{
            flex: Platform.OS == "web" ? 2 : 3,
            height: 30,
            borderBottomWidth: 1,
            flexDirection: "row",
            alignItems: "center",
            borderBottomColor: colors.escendia_text_faded,
            marginRight: 50,
          }}
        >
          <Icon
            style={{ paddingRight: 5, color: colors.escendia_text_faded }}
            name="search"
            size={20}
          />
          <TextInput
            style={{
              fontFamily: "Josefin Sans",
              fontSize: 20,
              fontWeight: "400",
              height: 30,
              color: colors.escendia_text_faded,
              flex: 1,
            }}
            placeholder="Suche..."
          />
        </View> */}

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
              Log In
            </EscendiaText>
            <EscendiaText
              style={{
                marginLeft: 5,
                marginRight: 5,
              }}
            >
              |
            </EscendiaText>
            <EscendiaText>Register</EscendiaText>
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
          Escendia
        </EscendiaText>
        <EscendiaText
          style={{
            fontSize: Platform.OS == "web" ? 100 : 35,
            fontWeight: "600",
            marginHorizontal: Platform.OS == "web" ? 0 : -50,
          }}
        >
          Escendia
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
          /* paddingLeft: Platform.OS == "web" ? 900 : 0, */
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
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            {"\n"}
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            {"\n"}
            erat, sed diam voluptua.
          </EscendiaText>
          <EscendiaText
            style={{
              fontSize: 24,
              fontWeight: "100",
              lineHeight: 34,
            }}
          >
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            {"\n"}
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            {"\n"}
            erat, sed diam voluptua.
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
                  Available On
                </EscendiaText>
                <EscendiaText
                  color={colors.escendia_light}
                  style={{
                    fontWeight: "bold",
                    fontSize: 24,
                  }}
                >
                  App Store
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
                    Available On
                  </EscendiaText>
                  <EscendiaText
                    color={colors.escendia_light}
                    style={{
                      fontWeight: "bold",
                      fontSize: 24,
                    }}
                  >
                    App Store
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
                Available On
              </EscendiaText>
              <EscendiaText
                color={colors.escendia_light}
                style={{
                  fontWeight: "bold",
                  fontSize: 12,
                }}
              >
                App Store
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
                  Available On
                </EscendiaText>
                <EscendiaText
                  color={colors.escendia_light}
                  style={{
                    fontWeight: "bold",
                    fontSize: 12,
                  }}
                >
                  App Store
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
          <FacebookIcon width={15} fill={colors.escendia_dark} />
          <View
            style={{
              flexDirection: "row",
              paddingBottom: 10,
            }}
          >
            <Text style={{ lineHeight: 5, color: colors.escendia_dark }}>
              .
            </Text>
            <Text style={{ lineHeight: 5, color: colors.escendia_dark }}>
              .
            </Text>
            <Text style={{ lineHeight: 5, color: colors.escendia_dark }}>
              .
            </Text>
            <Text style={{ lineHeight: 5, color: colors.escendia_dark }}>
              .
            </Text>
            <Text style={{ lineHeight: 5, color: colors.escendia_dark }}>
              .
            </Text>
            <Text style={{ lineHeight: 5, color: colors.escendia_dark }}>
              .
            </Text>
          </View>
          <TwitterIcon width={25} fill={colors.escendia_dark} />
          <View
            style={{
              flexDirection: "row",
              paddingBottom: 10,
            }}
          >
            <Text style={{ lineHeight: 7, color: colors.escendia_dark }}>
              .
            </Text>
            <Text style={{ lineHeight: 7, color: colors.escendia_dark }}>
              .
            </Text>
            <Text style={{ lineHeight: 7, color: colors.escendia_dark }}>
              .
            </Text>
            <Text style={{ lineHeight: 7, color: colors.escendia_dark }}>
              .
            </Text>
            <Text style={{ lineHeight: 7, color: colors.escendia_dark }}>
              .
            </Text>
            <Text style={{ lineHeight: 7, color: colors.escendia_dark }}>
              .
            </Text>
          </View>
          <InstagramIcon width={20} fill={colors.escendia_dark} />
        </View>
      </View>
    );
  }

  function SocialMediaRow(props: any) {
    return (
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <FacebookIcon
          width={12}
          fill={colors.escendia_dark}
          style={{
            paddingRight: 10,
            paddingLeft: 10,
            alignItems: "center",
          }}
        />
        <View
          style={{
            flexDirection: "column",
          }}
        >
          <Text style={{ lineHeight: 4, color: colors.escendia_dark }}>.</Text>
          <Text style={{ lineHeight: 4, color: colors.escendia_dark }}>.</Text>
          <Text style={{ lineHeight: 4, color: colors.escendia_dark }}>.</Text>
          <Text style={{ lineHeight: 4, color: colors.escendia_dark }}>.</Text>
          <Text style={{ lineHeight: 4, color: colors.escendia_dark }}>.</Text>
        </View>

        <TwitterIcon
          width={24}
          fill={colors.escendia_dark}
          style={{ paddingRight: 10, paddingLeft: 10 }}
        />
        <View style={{ flexDirection: "column" }}>
          <Text style={{ lineHeight: 4, color: colors.escendia_dark }}>.</Text>
          <Text style={{ lineHeight: 4, color: colors.escendia_dark }}>.</Text>
          <Text style={{ lineHeight: 4, color: colors.escendia_dark }}>.</Text>
          <Text style={{ lineHeight: 4, color: colors.escendia_dark }}>.</Text>
          <Text style={{ lineHeight: 4, color: colors.escendia_dark }}>.</Text>
        </View>
        <InstagramIcon
          width={25}
          fill={colors.escendia_dark}
          style={{ paddingRight: 10, paddingLeft: 10 }}
        />
      </View>
    );
  }
  const indexLeafTop = Platform.OS == "web" ? 700 : 300;
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
  const { width } = Dimensions.get("window");

  const ref = useRef<ICarouselInstance>(null);
  const onPrevPress = () => ref.current?.prev();
  const onNextPress = () => ref.current?.next();

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
              width={600}
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
                Lorem ipsum dolor sit amet,{"\n"}
                consetetur sadipscing elitr, sed{"\n"}
                diam nonumy eirmod tempor.
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
            <View style={{ flex: 2, flexDirection: "row" }}>
{/*               <Carousel
                ref={ref}
                width={800}
                mode="parallax"
                modeConfig={{
                  parallaxScrollingOffset: 500,
                  parallaxScrollingScale: 0.6,
                }}
                height={600}
                data={[...new Array(6).keys()]}
                onSnapToItem={(index) => console.log("current index:", index)}
                renderItem={({ index }) => (
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
                      source={require("../assets/test.jpg")}
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
              /> */}
            </View>
          </View>
        </View>

        <View
          style={{
            backgroundColor: colors.escendia_light,
          }}
        >
          <View style={{ paddingTop: 20 }}>
            <EscendiaText style={{ textAlign: "center" }}>
              sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
              et dolore magna aliquyam erat,{"\n"}
              sed diam voluptua. At vero eos et accusam et justo duo dolores et
              ea rebum. Stet clita kasd gubergren,{"\n"}
              no sea takimata sanctus est L
            </EscendiaText>
          </View>
          <View
            style={{
              paddingTop: 20,
              flex: 1,
              flexDirection: "row",
            }}
          >
            <View style={{ flex: 2, alignItems: "center" }}>
              <EscendiaText
                style={{
                  fontWeight: "bold",
                  paddingBottom: 10,
                }}
              >
                Service
              </EscendiaText>
              <EscendiaText>AGB</EscendiaText>
              <EscendiaText>Privacy</EscendiaText>
              <EscendiaText>Cookie-Settings</EscendiaText>
              <EscendiaText>Payment methods</EscendiaText>
            </View>
            <View
              style={{
                flex: 1,
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
                Company
              </EscendiaText>
              <EscendiaText>Impressum</EscendiaText>
              <EscendiaText>About us</EscendiaText>
              <EscendiaText>Contact us</EscendiaText>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              paddingTop: 20,
              paddingBottom: 20,
              borderTopColor: colors.escendia_dark,
              borderTopWidth: 1,
            }}
          >
            <View style={{ flex: 1, alignItems: "center" }}>
              <EscendiaText>
                Copyright © 2023. All rights reserved.
              </EscendiaText>
            </View>
            <View style={{ flex: 1, alignItems: "center" }}>
              {SocialMediaRow({})}
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default LandingPage;
