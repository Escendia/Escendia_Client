import EscendiaInput from "@components/default/EscendiaInput";
import EscendiaText from "@components/default/EscendiaText";
import EscendiaDefaultPage from "@components/main/EscendiaDefaultPage";
import { calculate, isWeb } from "@services/functions";
import { t } from "i18next";
import React, { useEffect, useState } from "react";
import { View, ViewBase, Image, ViewComponent } from "react-native";
import { transparent } from "react-native-paper/lib/typescript/styles/themes/v2/colors";
import { colors } from "../services/styling/styles";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
import { StackParams } from "App";
import EscendiaButton from "@components/default/EscendiaButton";
import { useDBStore } from "@services/store/store";

export default function ProfilePage() {
  const [userName, setUserName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { navigate }: DrawerNavigationProp<StackParams> = useNavigation();
  const auth = useDBStore((state) => state.auth);
  return (
    <EscendiaDefaultPage title={"Page_Profile_Title"}>
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <View
          style={{
            flex: 0.5,
            backgroundColor: "transparent",
          }}
        >
          <View
            style={{
              backgroundColor: "transparent",
              //flex: 1,
              justifyContent: "flex-start",

              //alignItems: "flex-start ",
            }}
          >
            <Image
              style={{
                backgroundColor: "black",
                borderRadius: 999999,
                //resizeMode: "contain",
                height: calculate("height", 250, 250),
                width: calculate("width", 225, 225),
                margin: 50,
              }}
              source={require("../assets/test.jpg")}
            />
          </View>
        </View>
        <View
          style={{
            flex: 0.5,
            backgroundColor: "transparent",
          }}
        >
          <View
            style={{
              backgroundColor: "transparent",
              flex: 1,
              paddingLeft: 25,
              paddingTop: 100,
              //alignItems:"flex-start",
            }}
          >
            <View
              style={{
                backgroundColor: "transparent",
                flex: 1,
              }}
            ></View>
            <EscendiaText
              style={{
                fontSize: 25,
                fontWeight: "bold",
                //alignSelf: "center",
                color: colors.escendia_light,
                paddingRight: 10,
              }}
            >
              {t("Page_Profile_Email")}
            </EscendiaText>

            <View
              style={{
                flexDirection: "row",
                //backgroundColor:"green"
              }}
            >
              <EscendiaInput
                disabled={true}
                editable={true}
                outlineStyle={
                  {
                    //borderColor: colors.escendia_text_faded,
                  }
                }
                style={{
                  flex: 4,
                  borderColor: "Blue",
                  marginBottom: 15,
                  //alignSelf: "center",
                  paddingLeft: 0,
                  marginLeft: 0,
                }}
                placeholder={t("Page_Profile_Email")}
                value={email}
                onChangeText={(e) => {
                  console.log("onChangeText", e);
                  setEmail(e);
                }}
                onConfirm={(e) => {
                  console.log("onConfirm", e);
                  setEmail(e);
                }}
              />
              <View
                style={{
                  backgroundColor: "transparent",
                  flex: 6,
                }}
              ></View>
            </View>

            <EscendiaText
              style={{
                fontSize: 25,
                fontWeight: "bold",
                //alignSelf: "center",
                color: colors.escendia_light,
                paddingRight: 10,
                paddingLeft: 0,
              }}
            >
              {t("Page_Profile_Username")}
            </EscendiaText>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-start",
                backgroundColor: "transparent",
              }}
            >
              <EscendiaInput
                disabled={true}
                editable={true}
                outlineStyle={
                  {
                    //borderColor: colors.escendia_text_faded,
                  }
                }
                style={{
                  borderColor: "yellow",
                  marginBottom: 15,
                  flex: 4,
                  //justifyContent: "flex-start",
                }}
                placeholder={t("Page_Profile_Username")}
                value={userName}
                onChangeText={(u) => {
                  setUserName(u);
                }}
              />

              <View
                style={{
                  backgroundColor: "transparent",
                  flex: 6,
                }}
              ></View>
            </View>

            <EscendiaText
              onPress={() => navigate("Landing")}
              style={{
                fontSize: 25,
                color: colors.escendia_light,
                //alignSelf:"center",
                marginBottom: 100,
              }}
            >
              {t("Page_Profile_Password")}
            </EscendiaText>
            {/* <View
              style={{
                flexDirection: "row-reverse",
                backgroundColor:"transparent",
                paddingTop:20,
                
              }}
            >
              <View
                style={{
                  flex: 6,
                  backgroundColor: "transparent",
                }}
              ></View>
              <EscendiaButton
                onPress={() => {
                  navigate("Landing"), auth.signOut();
                }}
                style={{
                  marginRight: 0,
                  flex: 1,
                  backgroundColor: colors.escendia_text_faded,
                }}
              >
                {t("Page_Profile_Logout")}
              </EscendiaButton>
            </View> */}
          </View>
        </View>
        <View
          style={{
            backgroundColor: "transparent",
            flex: 0.002,
          }}
        >
          <View
            style={{
              flex: 1,
              backgroundColor: "transparent",
            }}
          ></View>
          <View
            style={{
              flex: 10,
              backgroundColor: colors.escendia_img_background_light,
              borderRadius: 999999,
            }}
          ></View>
          <View
            style={{
              backgroundColor: "transparent",
              flex: 1.5,
            }}
          ></View>
        </View>
        <View
          style={{
            backgroundColor: "transparent",
            flex: 1,
            paddingRight: 25,
            paddingTop: 100,
            alignItems: "center",
            //flexDirection:"column"
          }}
        >
          <View
            style={{
              backgroundColor: "transparent",
              //flex: 1,
              justifyContent: "flex-start",

              //alignItems: "flex-start ",
            }}
          >
            <Image
              style={{
                backgroundColor: "black",
                borderRadius: 999999,
                //resizeMode: "contain",
                height: calculate("height", 250, 250),
                width: calculate("width", 225, 225),
                margin: 50,
              }}
              source={require("../assets/test.jpg")}
            />
          </View>

          <EscendiaText
            style={{
              fontSize: 25,
              color: colors.escendia_light,
            }}
          >
            {t("Page_Profile_CurrentSub")}
          </EscendiaText>
          <EscendiaButton
            onPress={() => {
              navigate("Landing");
            }}
            style={{
              marginRight: 0,
              flex: 1,
              backgroundColor: colors.escendia_text_faded,
              marginBottom: 100,
            }}
          >
            {t("Page_Profile_Shop")}
          </EscendiaButton>
        </View>
      </View>
    </EscendiaDefaultPage>
  );
}
