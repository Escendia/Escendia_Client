import React from "react";
import { ScrollView, StyleSheet, View, Platform } from "react-native";
import { colors } from "../services/styling/styles";

import { SafeAreaView } from "react-native-safe-area-context";
import EscendiaFooter from "./EscendiaFooter";
import EscendiaHeader from "./EscendiaHeader";
import LeafIcon from "./icons/LeafIcon";
import { calculate } from "@services/functions";
import EscendiaText from "./EscendiaText";

interface EscendiaDefaultPageProps {
  children?: React.ReactNode;
  childrenHeaderBelowPyramide?: React.ReactNode;
  childrenHeader?: React.ReactNode;
  title: string;
  pyramide?: boolean;
  pyramideStyle?: "left" | "mid" | undefined;
}

const EscendiaDefaultPage = ({
  title,
  childrenHeader,
  childrenHeaderBelowPyramide,
  children,
  pyramide,
  pyramideStyle,
  ...rest
}: EscendiaDefaultPageProps) => {
  return (
    <SafeAreaView style={{ backgroundColor: colors.escendia_light, flex: 1 }}>
      <ScrollView>
        <EscendiaHeader
          title={title}
          pyramide={pyramide}
          pyramideStyle={pyramideStyle}
          childrenBelowPyramide={childrenHeaderBelowPyramide}
        >
          {childrenHeader}
        </EscendiaHeader>

        <View
          style={{
            backgroundColor: colors.escendia_dark,
            minHeight: 500,
            justifyContent: "center",
          }}
        >
          <View
            style={{
              ...StyleSheet.absoluteFillObject,
              position: "absolute",
              width: 500,
              height: 500,
            }}
          >
            <LeafIcon
              fill={colors.escendia_img_background_dark}
              style={{ transform: [{ rotate: "270deg" }] }}
            />
          </View>
          {children}
        </View>
        <EscendiaFooter />
      </ScrollView>
    </SafeAreaView>
  );
};

export default EscendiaDefaultPage;
