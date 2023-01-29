import React from "react";
import {
  ScrollView
} from "react-native";
import { colors } from "../services/styling/styles";

import { SafeAreaView } from "react-native-safe-area-context";
import EscendiaFooter from "./EscendiaFooter";
import EscendiaHeader from "./EscendiaHeader";

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
        {children}
        <EscendiaFooter />
      </ScrollView>
    </SafeAreaView>
  );
};

export default EscendiaDefaultPage;
