import React, { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { COLORS } from '../../../../../constants/colors';
import { WIDGET_ICONS } from '../../../../../constants/widgetIcons';
import { MainNavigationProp } from '../../../../../navigation/MainNavigator/types/mainParams';
import { MainRoutes } from '../../../../../navigation/MainNavigator/types/routes';
import { scaleFontSize, scaleHorizontal, scaleLineHeight, scaleVertical } from '../../../../../utils/scaleUtils';

import { WidgetTitle } from './WidgetTitle';

type SmallWidgetProps = {
  widgetId: number;
  activeSlide: number;
  serviceName: string;
  title: string;
  amount: string;
  price: string;
  total: string;
};

const width = Dimensions.get('screen').width;

export const SmallWidget = ({ serviceName, activeSlide, title, amount, price, total, widgetId }: SmallWidgetProps) => {
  const navigation = useNavigation<MainNavigationProp>();

  const navigateToWidget = () => {
    navigation.navigate(MainRoutes.WIDGET, { activeSlide, widgetType: 'minor', widgetId, serviceName });
  };

  return (
    <TouchableOpacity style={styles.container} onPress={navigateToWidget}>
      <View style={styles.positionBlock}>
        <View>
          <WidgetTitle mainTitle={title}/>
          <Text style={styles.smallText}>{amount}</Text>
        </View>
        {WIDGET_ICONS[serviceName]}
      </View>
      <Text style={styles.price}>{`${price} ₽`}</Text>
      <Text style={styles.smallText}>{total}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: scaleVertical(10),
    paddingHorizontal: scaleHorizontal(6),
    backgroundColor: COLORS.white,
    borderRadius: 12,
    width: (width / 3) - 15,
  },
  positionBlock: {
    flexDirection: 'row',
    marginBottom: scaleVertical(12),
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  price: {
    fontWeight: 'bold',
    fontSize: scaleFontSize(16),
    lineHeight: scaleLineHeight(24),
    color: COLORS.black,
  },
  smallText: {
    fontSize: scaleFontSize(12),
    lineHeight: scaleLineHeight(16),
    color: COLORS.mariner,
  },
});
