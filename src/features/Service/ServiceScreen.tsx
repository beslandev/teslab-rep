import React, { StyleSheet, Text, View } from 'react-native';

import { TEXT } from '../../constants/text';

export const ServiceScreen = () => (
  <View style={styles.screen}>
    <Text>
      {TEXT.service.name}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
