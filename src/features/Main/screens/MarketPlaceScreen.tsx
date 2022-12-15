import React, { StyleSheet, Text, View } from 'react-native';

import { TEXT } from '../../../constants/text';

export const MarketPlaceScreen = () => (
  <View style={styles.screen}>
    <Text>
      {TEXT.marketPlace.name}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
