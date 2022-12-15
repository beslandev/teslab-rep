import React, { StyleSheet, Text, View } from 'react-native';

import { TEXT } from '../../constants/text';

export const MarketScreen = () => (
  <View style={styles.screen}>
    <Text>
      {TEXT.market.name}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
