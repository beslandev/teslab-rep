import React, { FlatList, ListRenderItemInfo, ScrollView, StyleSheet } from 'react-native';

import { CustomMap } from '../../components/CustomMap';
import { BigWidget } from './components/BigWidget/BigWidget';
import { SmallWidget } from './components/SmallWidget';

import { MajorService, MinorService, WIDGETS } from '../../../../assets/mockData/mockData';
import { scaleHorizontal, scaleVertical } from '../../../../utils/scaleUtils';

type ServicesScreenProps = {
  activeSlide: number;
};

export const ServicesScreen = ({ activeSlide }: ServicesScreenProps) => {
  const renderBigWidgetItem = ({ item, index }: ListRenderItemInfo<MajorService>) => (
    <BigWidget
      widgetId={index}
      activeSlide={activeSlide}
      techMessage={item.techMessage}
      mainTitle={item.title}
      message={item.message}
      fullTank={item.fullTank}
      fuelType={item.fuelType}
      isFuel={!!item.fuelType}
      serviceName={item.serviceName}
      price={item.price}
      progress={item.progress}
      roughTime={item.time}
    />
  );

  const renderSmallWidgetItem = ({ item, index }: ListRenderItemInfo<MinorService>) => (
    <SmallWidget
      widgetId={index}
      activeSlide={activeSlide}
      title={item.title}
      serviceName={item.serviceName}
      amount={item.amount}
      total={item.total}
      price={item.price}
    />
  );

  return (
    <ScrollView
      style={styles.screen}
      bounces={true}
      showsVerticalScrollIndicator={false}
    >
      <FlatList
        horizontal={true}
        scrollEnabled={false}
        data={WIDGETS[activeSlide].widgets.major}
        renderItem={renderBigWidgetItem}
        contentContainerStyle={styles.majorWidgets}
      />
      <FlatList
        horizontal={true}
        scrollEnabled={false}
        data={WIDGETS[activeSlide].widgets.minor}
        renderItem={renderSmallWidgetItem}
        contentContainerStyle={styles.minorWidgets}
      />
      <CustomMap
        containerStyle={styles.mapContainer}
        mapStyles={styles.map}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    marginTop: scaleVertical(16),
    paddingHorizontal: scaleHorizontal(16),
  },
  mapContainer: {
    flex: 1,
    height: scaleVertical(250),
    marginBottom: scaleVertical(70),
  },
  map: {
    borderRadius: 16,
  },
  majorWidgets: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: scaleVertical(15),
  },
  minorWidgets: {
    flex: 1,
    justifyContent: 'space-between',
    marginBottom: scaleVertical(15),
  },
});
