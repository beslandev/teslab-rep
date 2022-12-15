import React, { StyleSheet, Text, View } from 'react-native';

import { COLORS } from '../../../../../../constants/colors';
import { WIDGET_ICONS } from '../../../../../../constants/widgetIcons';
import { scaleFontSize, scaleHorizontal, scaleLineHeight } from '../../../../../../utils/scaleUtils';

type BigWidgetPriceProps = {
  price: string;
  time: string;
  serviceName: string;
};

export const BigWidgetInfo = ({ price, time, serviceName }: BigWidgetPriceProps) => (
  <>
    <View style={styles.container}>
      <View>
        <Text style={styles.price}>
          {`${price} ₽`}
        </Text>
        <Text style={styles.time}>
          {`≈ ${time}`}
        </Text>
      </View>
      <View style={styles.iconContainer}>
        {WIDGET_ICONS[serviceName]}
      </View>
    </View>
  </>
);

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  price: {
    fontWeight: 'bold',
    fontSize: scaleFontSize(16),
    lineHeight: scaleLineHeight(24),
    color: COLORS.black,
  },
  time: {
    fontSize: scaleFontSize(12),
    lineHeight: scaleLineHeight(16),
    color: COLORS.mariner,
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: scaleHorizontal(50),
    height: scaleHorizontal(50),
    borderRadius: scaleHorizontal(25),
    backgroundColor: COLORS.white,
  },
});
