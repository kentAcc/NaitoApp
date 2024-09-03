import React, { useState, createContext, useEffect, useContext } from "react";

import { BannerContext } from "../../services/banners/banner.context";
import { SliderBox } from "react-native-image-slider-box";

export const BannerScreen = () => {
  const { isLoadingB, errorB, productsB } = useContext(BannerContext);

  const a = productsB.map((product, index) => {
    return product.photos[0];
  });
  return (
    <>
      <SliderBox
        images={a}
        onCurrentImagePressed={(index) =>
          console.warn(`image ${index} pressed`)
        }
        dotColor="#FFEE58"
        inactiveDotColor="#90A4AE"
        paginationBoxVerticalPadding={1}
        autoplay
        circleLoop
        resizeMethod={"resize"}
        resizeMode={"cover"}
        paginationBoxStyle={{
          position: "absolute",
          bottom: 0,

          alignItems: "center",
          alignSelf: "center",
          justifyContent: "center",
          paddingVertical: 10,
          display: "none",
        }}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 0,
          marginHorizontal: 0,
          padding: 0,
          margin: 0,
          backgroundColor: "rgba(128, 128, 128, 0.92)",
        }}
        ImageComponentStyle={{
          borderRadius: 10,
          maxWidth: "97%",
          maxHeight: "100%",
          marginTop: 5,
          paddingVertical: 5,
        }}
        imageLoadingColor="#2196F3"
      />
    </>
  );
};
