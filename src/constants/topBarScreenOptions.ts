import { Dimensions, StyleSheet } from 'react-native';

import { scaleFontSize, scaleLineHeight } from '../utils/scaleUtils';

import { COLORS } from './colors';

const indicatorWidth = 85;

const pageWidth = Dimensions.get('window').width;
const NUMBER_OF_TABS = 3;

const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: COLORS.transparent,
    shadowColor: COLORS.transparent,
  },
  tabBarIndicator: {
    backgroundColor: COLORS.tabBarIndicatorColor,
  },
  labelStyle: {
    fontSize: scaleFontSize(14),
    lineHeight: scaleLineHeight(24),
  },
});

const additionalStyle = {
  width: indicatorWidth,
  left: ( pageWidth / NUMBER_OF_TABS - indicatorWidth) / 2,
};

export const topTabScreenOptions = {
  tabBarLabelStyle: styles.labelStyle,
  tabBarStyle: styles.tabBarStyle,
  tabBarIndicatorStyle: [styles.tabBarIndicator, additionalStyle],
};
