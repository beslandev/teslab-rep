import React, { StyleSheet, Text } from 'react-native';

import { COLORS } from '../../../constants/colors';
import { TEXT } from '../../../constants/text';
import { scaleFontSize, scaleLineHeight, scaleVertical } from '../../../utils/scaleUtils';

export const CardLogo = () => {
  return (
    <Text style={styles.logo}>
      {TEXT.main.logo}
    </Text>
  );
};

const styles = StyleSheet.create({
  logo: {
    fontSize: scaleFontSize(35),
    lineHeight: scaleLineHeight(52),
    color: COLORS.logo,
    marginBottom: scaleVertical(16),
  },
});
