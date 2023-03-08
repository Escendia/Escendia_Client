import React, { useEffect, useRef, useState } from "react";
import { TouchableOpacity, View } from "react-native";
import CarouselComponent, { Carousel } from "react-native-snap-carousel";
import { colors } from "../../services/styling/styles";
import LeftArrowIcon from "../icons/LeftArrowIcon";
import RightArrowIcon from "../icons/RightArrowIcon";

interface EscendiaCarouselProps {
  data: any[];
  sliderWidth: number;
  itemWidth: number;
  renderItem: ({ item }: { item: any }) => React.ReactNode;
  onSnapItem?: (index: number) => void;
}

const EscendiaCarousel = ({
  data,
  sliderWidth,
  itemWidth,
  renderItem,
}: EscendiaCarouselProps) => {
  const [sliderActiveSlide, setSliderActiveSlide] = useState(0);
  const refer = useRef<Carousel<any>>(null);
  const sideDiff = (sliderWidth - itemWidth) / 2 - 20;

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        flexDirection: "row",
      }}
    >
      <View style={{ alignItems: "center" }}>
        <CarouselComponent
          ref={refer}
          vertical={false}
          activeSlideAlignment={"center"}
          sliderWidth={sliderWidth}
          itemWidth={itemWidth}
          layout={"default"}
          useScrollView={false}
          inactiveSlideScale={0.9}
          inactiveSlideOpacity={0.3}
          apparitionDelay={100}
          enableSnap={true}
          data={data}
          renderItem={renderItem}
          onScrollIndexChanged={(index) => {
            setSliderActiveSlide(index);
          }}
        />
      </View>
      <TouchableOpacity
        style={{
          position: "absolute",
          left: sideDiff,
          padding: 10,
          backgroundColor: colors.escendia_light,
        }}
        onPress={() => {
          let toIndex = sliderActiveSlide - 1;

          if (toIndex === 0) {
            //0 Index, da BUG in Modul,
            refer.current._scrollTo({
              offset: 0,
              index: toIndex,
              animated: true,
            });
          } else {
            //sowie wenn links scroll über Index hinaus, dann wieder hinten anfangen
            toIndex = toIndex === -1 ? data.length - 1 : toIndex;
            refer.current.snapToItem(toIndex);
          }
        }}
      >
        <LeftArrowIcon height={10} fill={colors.escendia_img_background_dark} />
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          position: "absolute",
          right: sideDiff,
          padding: 10,
          backgroundColor: colors.escendia_light,
        }}
        onPress={() => {
          let toIndex = sliderActiveSlide + 1;
          if (toIndex === data.length) {
            //Wenn Index zu Groß, dann wieder zum Anfang
            refer.current._scrollTo({
              offset: 0,
              index: 0,
              animated: true,
            });
          } else {
            refer.current.snapToItem(toIndex);
          }
        }}
      >
        <RightArrowIcon
          height={10}
          fill={colors.escendia_img_background_dark}
        />
      </TouchableOpacity>
    </View>
  );
};

export default EscendiaCarousel;
