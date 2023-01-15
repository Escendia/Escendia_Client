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
} from "react-native";
import { colors } from "../services/styling/styles";
import LeafIcon from "../components/LeafIcon";
import AppleIcon from "../components/AppleIcon";
import GoogleIcon from "../components/GoogleIcon";
import InstagramIcon from "../components/InstagramIcon";
import FacebookIcon from "../components/FacebookIcon";
import TwitterIcon from "../components/TwitterIcon";

import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/FontAwesome";

function LandingPage() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  /* 
  PC 1315 - 2560
  PC 955 - 1920
  Handy 753 - 392
  */

  function HeaderImage(props: any) {
    return (
      <View
        style={{
          ...StyleSheet.absoluteFillObject,
          position: "absolute",
          top: 0,
          right: 0,
          left: Dimensions.get("window").width / 1.5,
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
            paddingLeft: 10,
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

        <View
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
            }}
            placeholder="Suche..."
          />
        </View>
        {Platform.OS == "web" ? (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-end",
              paddingRight: 50,
            }}
          >
            <Text
              style={{
                fontFamily: "Josefin Sans",
                fontSize: 20,
                fontWeight: "400",
                color: colors.escendia_dark,
              }}
            >
              Log In
            </Text>
            <Text
              style={{
                fontFamily: "Josefin Sans",
                fontSize: 20,
                fontWeight: "400",
                color: colors.escendia_dark,
                marginLeft: 5,
                marginRight: 5,
              }}
            >
              |
            </Text>
            <Text
              style={{
                fontFamily: "Josefin Sans",
                fontSize: 20,
                fontWeight: "400",
                color: colors.escendia_dark,
              }}
            >
              Register
            </Text>
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
        <Text
          style={{
            fontFamily: "Simply Conception",
            fontSize: Platform.OS == "web" ? 250 : 75,
            fontWeight: "600",
            color: colors.escendia_img_background_light,
            marginHorizontal: Platform.OS == "web" ? -200 : -60,
            lineHeight: 180,
          }}
        >
          Escendia
        </Text>
        <Text
          style={{
            fontFamily: "Josefin Sans",
            fontSize: Platform.OS == "web" ? 100 : 35,
            fontWeight: "600",
            color: colors.escendia_dark,
            marginHorizontal: Platform.OS == "web" ? 0 : -50,
          }}
        >
          Escendia
        </Text>
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
          paddingLeft: Platform.OS == "web" ? 900 : 0,
        }}
      >
        <View>
          <Text
            style={{
              fontFamily: "Josefin Sans",
              fontSize: 24,
              fontWeight: "100",
              color: colors.escendia_dark,
              lineHeight: 34,
            }}
          >
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            {"\n"}
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            {"\n"}
            erat, sed diam voluptua.
          </Text>
          <Text
            style={{
              fontFamily: "Josefin Sans",
              fontSize: 24,
              fontWeight: "100",
              color: colors.escendia_dark,
              lineHeight: 34,
            }}
          >
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            {"\n"}
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            {"\n"}
            erat, sed diam voluptua.
          </Text>
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
                <Text
                  style={{
                    fontFamily: "Josefin Sans",
                    fontSize: 20,
                    fontWeight: "300",
                    color: colors.escendia_light,
                  }}
                >
                  Available On
                </Text>
                <Text
                  style={{
                    fontFamily: "Josefin Sans",
                    fontWeight: "bold",
                    fontSize: 24,
                    color: colors.escendia_light,
                  }}
                >
                  App Store
                </Text>
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
                  <Text
                    style={{
                      fontFamily: "Josefin Sans",
                      fontSize: 20,
                      fontWeight: "300",
                      color: colors.escendia_light,
                    }}
                  >
                    Available On
                  </Text>
                  <Text
                    style={{
                      fontFamily: "Josefin Sans",
                      fontWeight: "bold",
                      fontSize: 24,
                      color: colors.escendia_light,
                    }}
                  >
                    App Store
                  </Text>
                </View>
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
          paddingRight: 50
        }}
      >
        <View style={{ flexDirection: "column", alignItems:"center" }}>
          <FacebookIcon width={15} fill={colors.escendia_dark} />
          <Text>- - -</Text>
          <TwitterIcon width={25} fill={colors.escendia_dark} />
          <Text>- - -</Text>
          <InstagramIcon width={20} fill={colors.escendia_dark} />
        </View>
      </View>
    );
  }
  const indexLeafTop = Platform.OS == "web" ? 700 : 300;

  return (
    <SafeAreaView style={{ backgroundColor: colors.escendia_light, flex: 1 }}>
      <HeaderImage />
      <Header />
      <HeadLine />
      <HeaderText />
      <SocialMediaSide />
      {/*       <View
  style={{
    flex: 1,
    borderBottomWidth: 200,
    borderBottomColor: colors.escendia_dark,
    borderLeftWidth: Dimensions.get("window").width / 2 - 700,
    borderRightWidth: Dimensions.get("window").width / 2 + 700,
    borderLeftColor: colors.escendia_light,
    borderRightColor: colors.escendia_light,
  }}
/> */}
      <View
        style={{
          backgroundColor: colors.escendia_dark,
        }}
      >
        {/* Mittelteil */}
      </View>
      <View>{/* Fußteeil */}</View>
    </SafeAreaView>
  );
}

export default LandingPage;
