import { calculate, isWeb } from "@services/functions";
import React, { useEffect, useRef, useState } from "react";
import { ImageBackground, TouchableOpacity, View, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import CarouselComponent, { Carousel } from "react-native-snap-carousel";
import { colors } from "../../services/styling/styles";
import LeftArrowIcon from "../icons/LeftArrowIcon";
import RightArrowIcon from "../icons/RightArrowIcon";
import EscendiaModal from "./EscendiaModal";
import EscendiaText from "./EscendiaText";

interface EscendiaCarouselProps {
  data: any[];
  itemWidth: number;
  //renderItem: ({ item }: { item: any }) => React.ReactNode;
  onSnapItem?: (index: number) => void;
}

interface EscendiaCarouselBodyProps {
  item: any;
  itemWidth: number;
}

const EscendiaCarouselBody = ({
  item,
  itemWidth,
}: EscendiaCarouselBodyProps) => {
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {}, []);

  return item.modalTitle ? (
    <>
      <EscendiaModal
        title={item.modalTitle}
        modalState={openModal}
        onClose={() => setOpenModal(!openModal)}
      >
        <View style={{ flexDirection: "row" }}>
          {isWeb() ? (
            <View style={{ flex: 2, alignItems: "flex-end", paddingRight: 50 }}>
              <Image
                style={{
                  width: calculate("width", 500, 500),
                  height: calculate("height", 500, 500),
                }}
                source={item.image}
              />
            </View>
          ) : undefined}
          <View
            style={{
              flex: isWeb() ? 3 : 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ScrollView>
              <EscendiaText>{item.modalBody}</EscendiaText>
            </ScrollView>
          </View>
        </View>
      </EscendiaModal>
      <TouchableOpacity onPress={() => setOpenModal(true)}>
        <ImageBackground
          key={"EscendiaCard_Touch_Image_" + item.name}
          style={{
            width: calculate("width", itemWidth, itemWidth),
            height: calculate("height", itemWidth, itemWidth),
            justifyContent: "flex-end",
          }}
          //resizeMode="stretch"
          source={item.image}
        >
          <EscendiaText
            style={{
              margin: 20,
              padding: 10,
              alignContent: "flex-end",
              textAlign: "center",
              color: colors.escendia_dark,
              backgroundColor: colors.escendia_light,
            }}
          >
            {item.name}
          </EscendiaText>
        </ImageBackground>
      </TouchableOpacity>
    </>
  ) : (
    <ImageBackground
      key={"EscendiaCard_Touch_Image_" + item.name}
      style={{
        width: calculate("width", itemWidth, itemWidth),
        height: calculate("height", itemWidth, itemWidth),
        justifyContent: "flex-end",
      }}
      //resizeMode="stretch"
      source={item.image}
    >
      <EscendiaText
        style={{
          margin: 20,
          padding: 10,
          alignContent: "flex-end",
          textAlign: "center",
          color: colors.escendia_dark,
          backgroundColor: colors.escendia_light,
        }}
      >
        {item.name}
      </EscendiaText>
    </ImageBackground>
  );
};

const EscendiaCarousel = ({ data, itemWidth }: EscendiaCarouselProps) => {
  const [sliderActiveSlide, setSliderActiveSlide] = useState(0);
  const refer = useRef<Carousel<any>>(null);
  const sliderWidth = (itemWidth / 3) * 4;

  const sideDiff = (sliderWidth - itemWidth) / 2 - 20;
  useEffect(() => {}, []);

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
          inactiveSlideScale={isWeb() ? 0.9 : 0}
          inactiveSlideOpacity={0.3}
          apparitionDelay={100}
          enableSnap={true}
          data={data}
          renderItem={({ item }) => {
            return <EscendiaCarouselBody itemWidth={itemWidth} item={item} />;
          }}
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
