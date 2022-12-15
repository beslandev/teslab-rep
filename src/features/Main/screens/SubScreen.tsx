import React, { StyleSheet, Text, View } from 'react-native';

import { TEXT } from '../../../constants/text';

export const SubScreen = () => (
  <View style={styles.screen}>
    <Text>
      {TEXT.sub.name}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
