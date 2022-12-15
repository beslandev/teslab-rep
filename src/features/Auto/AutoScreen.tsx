import React, { FlatList, ListRenderItemInfo, StyleSheet, View } from 'react-native';

import { AutoItem } from './components/AutoItem';

import { Auto, mockAutomobiles } from '../../assets/mockData/mockData';
import { scaleHorizontal } from '../../utils/scaleUtils';

const renderItem = ({ item }: ListRenderItemInfo<Auto>) => (
  <AutoItem
    carImage={item.carImage}
    distance={item.distance}
    state={item.state}
    model={item.model}
    registrationNumber={item.registrationNumber}
  />
);

export const AutoScreen = () => (
  <View style={styles.screen}>
    <FlatList
      contentContainerStyle={styles.container}
      data={mockAutomobiles}
      renderItem={renderItem}
      showsVerticalScrollIndicator={false}
    />
  </View>
);

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  container: {
    paddingHorizontal: scaleHorizontal(16),
  },
});
