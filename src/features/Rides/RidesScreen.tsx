import React, { StyleSheet, Text, View } from 'react-native';

import { TEXT } from '../../constants/text';

export const RidesScreen = () => (
  <View style={styles.screen}>
    <Text>
      {TEXT.rides.name}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
