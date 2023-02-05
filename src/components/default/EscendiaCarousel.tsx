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
  onSnapItem,
}: EscendiaCarouselProps) => {
  const [sliderActiveSlide, setSliderActiveSlide] = useState(0);
  const refer = useRef<Carousel<any>>(null);
  const sideDiff = (sliderWidth - itemWidth) / 2 - 10;

  useEffect(() => {
    console.log("useffect");
  }, []);

  useEffect(() => {
    console.log("sliderActiveSlide", sliderActiveSlide);
  }, [sliderActiveSlide]);

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
            console.log("onScrollIndexChanged:", index);
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
          console.log(
            "Left1",
            sliderActiveSlide,
            sliderActiveSlide - 1,
            refer.current
          );
          refer.current?.snapToItem(sliderActiveSlide - 1);
          console.log(
            "Left2",
            sliderActiveSlide,
            sliderActiveSlide - 1,
            refer.current?.realIndex
          );
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
          console.log(
            "Right",
            sliderActiveSlide,
            sliderActiveSlide + 1,
            refer.current
          );
          refer.current?.snapToItem(sliderActiveSlide + 1);
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

/* 

({ item }: { item: any }) => {
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
                <EscendiaText style={{ fontSize: 30 }}>
                  {item.title}
                </EscendiaText>
                <EscendiaText>{item.text}</EscendiaText>
              </View>
            );
          }
*/
export default EscendiaCarousel;
