import React from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import MapView from 'react-native-maps';

import { INITIAL_REG } from '../../../constants/region';

type CustomMapProps = {
  containerStyle: ViewStyle
  mapStyles?: StyleProp<ViewStyle>
};

export const CustomMap = ({ containerStyle, mapStyles }: CustomMapProps) => {
  return (
    <View style={containerStyle}>
      <MapView
        style={[styles.map, mapStyles]}
        initialRegion={INITIAL_REG}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});

