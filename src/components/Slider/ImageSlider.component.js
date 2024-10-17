import React, { useRef, useEffect, useContext } from "react";
import { View, Animated, StyleSheet, Dimensions } from "react-native";
import Card from "./Card.component"; // Adjust the path if necessary
import { BannerContext } from "../../services/banners/banner.context";

const images = [
  "https://via.placeholder.com/300x200?text=Image+1",
  "https://via.placeholder.com/300x200?text=Image+2",
  "https://via.placeholder.com/300x200?text=Image+3",
  "https://via.placeholder.com/300x200?text=Image+4",
  "https://via.placeholder.com/300x200?text=Image+5",
];

const { width } = Dimensions.get("window");
const cardWidth = width / 4; // Set width for three images at a time

const ImageSlider = () => {
  const { productsB } = useContext(BannerContext);

  const scrollViewRef = useRef(null);
  const totalCards = images.length;

  useEffect(() => {
    const interval = setInterval(() => {
      scrollViewRef.current.scrollTo({ x: cardWidth, animated: true });

      // Automatically loop back to the first card
      scrollViewRef.current.getScrollResponder().scrollTo({
        x: cardWidth * (totalCards + 1),
        animated: false,
      });
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);
  const truncateString = (str, maxLength) => {
    if (str.length > maxLength) {
      return str.substring(0, maxLength) + "...";
    }
    return str;
  };
  return (
    <View style={styles.container}>
      <Animated.ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
      >
        {productsB.map((product, index) => (
          <View
            key={index}
            style={{
              width: cardWidth,
              flexDirection: "row",
              justifyContent: "space-between",
              padding: 2,
            }}
          >
            <Card
              image={product.photos[0]}
              title={truncateString(product.name, 25)}
              price={product.price}
            />
          </View>
        ))}
        {/* Add a clone of the first card to enable seamless looping */}
      </Animated.ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 170,
  },
});

export default ImageSlider;
