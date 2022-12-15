import React, { Dimensions, StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native';

import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

import { COLORS } from '../../../../../../constants/colors';
import { gradientSteps } from '../../../../../../constants/gradientSteps';
import { MainNavigationProp } from '../../../../../../navigation/MainNavigator/types/mainParams';
import { MainRoutes } from '../../../../../../navigation/MainNavigator/types/routes';
import {
  scaleFontSize,
  scaleHorizontal,
  scaleLineHeight,
  scaleVertical,
} from '../../../../../../utils/scaleUtils';
import { ProgressBar } from '../ProgressBar';
import { WidgetTitle } from '../WidgetTitle';

import { BigWidgetInfo } from './BigWidgetPrice';

type BigWidgetProps = {
  widgetId: number;
  activeSlide: number;
  mainTitle: string;
  message: string;
  price: string;
  roughTime: string;
  serviceName: string;
  isFuel: boolean;
  progress?: number;
  fuelType?: string;
  fullTank?: number;
  techMessage?: string;
  style?: ViewStyle
};

const width = Dimensions.get('screen').width;

export const BigWidget = ({
  widgetId,
  activeSlide,
  mainTitle,
  techMessage,
  message,
  progress,
  price,
  serviceName,
  roughTime,
  fullTank,
  fuelType,
  isFuel,
  style,
}: BigWidgetProps) => {
  const navigation = useNavigation<MainNavigationProp>();

  const navigateToWidget = () => {
    navigation.navigate(MainRoutes.WIDGET, {
      activeSlide,
      widgetType: 'major',
      widgetId,
      serviceName,
    });
  };

  const getFuelToAdd = () => {
    if (progress && fullTank) {
      return fullTank - progress;
    }
  };

  const renderBlock = () => (
    isFuel ? (
      <>
        <ProgressBar progress={progress || 0}/>
        <Text style={styles.fuelToAdd}>{`+ ${getFuelToAdd()} л`}</Text>
      </>
    ) : (
      <View style={styles.fixBlock}>
        <Text>
          {techMessage}
        </Text>
      </View>
    ));

  return (
    <LinearGradient colors={gradientSteps[serviceName]}>
      <TouchableOpacity style={[styles.widgetContainer, style]} onPress={navigateToWidget}>
        <WidgetTitle mainTitle={mainTitle} additionalTitle={fuelType} />
        <View style={styles.messageContainer}>
          <AntDesign
            size={10}
            color={COLORS.red}
            style={styles.icon}
            name={'exclamationcircle'}
          />
          <Text style={styles.messageText}>
            {message}
          </Text>
        </View>
        {renderBlock()}
        <BigWidgetInfo price={price} time={roughTime} serviceName={serviceName} />
      </TouchableOpacity>
    </LinearGradient>
  );};

const styles = StyleSheet.create({
  widgetContainer: {
    width: (width / 2) - 20,
    paddingVertical: scaleVertical(12),
    paddingHorizontal: scaleHorizontal(8),
    borderRadius: 10,
  },
  messageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: scaleVertical(5),
  },
  icon: {
    marginRight: scaleHorizontal(10),
  },
  messageText: {
    fontSize: scaleFontSize(12),
    lineHeight: scaleLineHeight(16),
  },
  fuelToAdd: {
    alignSelf: 'flex-end',
    fontSize: scaleFontSize(12),
    lineHeight: scaleLineHeight(16),
    color: COLORS.fortressGrey,
  },
  fixBlock: {
    marginBottom: scaleVertical(10),
  },
});
