import React, { StyleSheet, Text,View } from 'react-native';

import { COLORS } from '../../../../../constants/colors';
import { scaleFontSize, scaleLineHeight, scaleVertical } from '../../../../../utils/scaleUtils';

type WidgetTitleProps = {
  mainTitle: string;
  additionalTitle?: string;
};

export const WidgetTitle = ({ mainTitle, additionalTitle }: WidgetTitleProps) => (
  <View style={styles.titleContainer}>
    <Text>{mainTitle}</Text>
    {!!additionalTitle && <Text style={styles.additional}>{additionalTitle}</Text>}
  </View>
);

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: scaleVertical(5),
  },
  mainTitle: {
    fontWeight: 'bold',
    fontSize: scaleFontSize(18),
    lineHeight: scaleLineHeight(24),
    color: COLORS.black,
  },
  additional: {
    fontSize: scaleFontSize(14),
    lineHeight: scaleLineHeight(18),
    color: COLORS.fortressGrey,
  },
});
