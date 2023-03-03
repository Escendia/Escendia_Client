import React, { useEffect, useState } from "react";
import { ImageBackground, View } from "react-native";

import EscendiaText from "@components/default/EscendiaText";
import { uuidv4 } from "@firebase/util";
import { colors } from "@services/styling/styles";
import { t } from "i18next";
import { TouchableOpacity } from "react-native-gesture-handler";

interface EscendiaCardProps {
  children?: React.ReactNode;
  onPress?: () => void;
  title: string;
  width: number;
  height: number;
  image: string;
}

interface EscendiaCardBodyProps {
  children?: React.ReactNode;
  title: string;
  width: number;
  height: number;
  image: string;
}

export const EscendiaCardBody = ({
  image,
  title,
  width,
  height,
}: EscendiaCardBodyProps) => {
  const [key, setKey] = useState(uuidv4());

  return (
    <ImageBackground
      key={"EscendiaCard_Touch_Image_" + key}
      style={{
        flex: 1,
        borderWidth: 1,
        padding: 0,
        borderColor: "grey",
        flexGrow: 1,
        alignItems: "center",
        backgroundColor: "white",
        margin: 20,
        shadowRadius: 10,
        shadowColor: colors.escendia_light,
        justifyContent: "flex-end",
      }}
      resizeMode="stretch"
      source={require("../../assets/" + image)}
    >
      {title !== undefined ? (
        <View
          key={"EscendiaCard_Touch_Image_View" + key}
          style={{
            width: width,
            height: height,
            justifyContent: "flex-end",
          }}
        >
          <View
            key={"EscendiaCard_Touch_Image_View_View" + key}
            style={{
              justifyContent: "flex-end",
              backgroundColor: "rgba(90,69,60,0.6)",
              padding: 10,
            }}
          >
            <EscendiaText
              key={"EscendiaCard_Touch_Image_View_Text" + key}
              style={{ opacity: 1 }}
              color={colors.escendia_text_background}
            >
              {t(title)}
            </EscendiaText>
          </View>
        </View>
      ) : undefined}
    </ImageBackground>
  );
};

const EscendiaCard = ({
  onPress,
  title,
  width,
  height,
  image,
  children,
  ...rest
}: EscendiaCardProps) => {
  const [key, setKey] = useState(uuidv4());

  useEffect(() => {}, [image]);

  return onPress ? (
    <TouchableOpacity
      key={"EscendiaCard_Touch_" + key}
      style={{ flex: 1 }}
      onPress={onPress}
    >
      <EscendiaCardBody
        title={title}
        width={width}
        height={height}
        image={image}
      />
    </TouchableOpacity>
  ) : (
    <View>
      <EscendiaCardBody
        title={title}
        width={width}
        height={height}
        image={image}
      />
    </View>
  );
};

export default EscendiaCard;
