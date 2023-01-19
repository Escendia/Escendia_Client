import React from "react";
import { Platform } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { CarouselRenderItem } from "react-native-reanimated-carousel/lib/typescript/types";
import { colors } from "../services/styling/styles";
import EscendiaText from "./EscendiaText";

interface EscendiaCarouselProps {
  data: any[];
  height: number;
  width: number;
  renderItem: CarouselRenderItem<any>;
  onSnapItem?: (index: number) => void;
}

const EscendiaCarousel = ({
  data,
  height,
  width,
  renderItem,
  onSnapItem,
}: EscendiaCarouselProps) => {
  if (Platform.OS == "web") {
    return (
      <Carousel
        width={width}
        mode="parallax"
        modeConfig={{
          parallaxScrollingOffset: 500,
          parallaxScrollingScale: 0.6,
        }}
        height={height}
        data={data}
        onSnapToItem={onSnapItem}
        renderItem={renderItem}
      />
    );
  } else {
    return (
      <EscendiaText style={{ color: "white", textAlign: "center" }}>
        Android Carousel to be implemented
      </EscendiaText>
    );
  }
};

export default EscendiaCarousel;
