import { useState } from 'react';
import React, { Dimensions, StyleSheet, View } from 'react-native';
import AnimatedDotsCarousel from 'react-native-animated-dots-carousel';
import Carousel from 'react-native-reanimated-carousel';
import { CarouselRenderItemInfo } from 'react-native-reanimated-carousel/lib/typescript/types';
import { SafeAreaView } from 'react-native-safe-area-context';

import { CardItem } from './components/CardItem';

import { AutoCard, mockAutoCards } from '../../assets/mockData/mockData';
import { COLORS } from '../../constants/colors';
import { activeIndicatorConfig, decreasingDots, inactiveIndicatorConfig } from '../../constants/dotsConfig';
import { TopTabNavigator } from '../../navigation/TopTab/TopNavigator';

const PAGE_WIDTH = Dimensions.get('window').width;

const ITEM_HEIGHT = PAGE_WIDTH / 2;

const renderCarouselItem = ({ item }: CarouselRenderItemInfo<AutoCard>) => (
  <CardItem
    registrationNumber={item.registrationNumber}
    model={item.model}
    subscriptionDate={item.subscriptionDate}
  />
);

export const MainScreen = () => {
  const [data, setData] = useState(mockAutoCards);
  const [activeSlide, setActiveSlide] = useState(0);

  const onProgressChange = (_: number, absoluteProgress: number) => {
    setActiveSlide(Math.round(absoluteProgress));
  };

  return (
    <SafeAreaView
      edges={['right', 'bottom', 'left']}
      style={styles.screen}
    >
      <View>
        <Carousel
          width={PAGE_WIDTH}
          height={ITEM_HEIGHT}
          data={data}
          loop={false}
          onProgressChange={onProgressChange}
          renderItem={renderCarouselItem}
        />
        <View style={styles.dotContainer}>
          <AnimatedDotsCarousel
            length={data.length}
            currentIndex={activeSlide}
            maxIndicators={4}
            interpolateOpacityAndColor={true}
            activeIndicatorConfig={activeIndicatorConfig}
            inactiveIndicatorConfig={inactiveIndicatorConfig}
            decreasingDots={decreasingDots}
          />
        </View>
      </View>
      <TopTabNavigator activeSlide={activeSlide} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  barStyle: {
    backgroundColor: COLORS.bottomTab,
  },
  carousel: {
    width: '100%',
  },
  dotContainer: {
    position: 'absolute',
    bottom: 10,
    alignSelf: 'center',
  },
});
