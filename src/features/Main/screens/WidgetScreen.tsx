import { useEffect, useState } from 'react';
import React, { StyleSheet, TouchableOpacity, View } from 'react-native';

import { AntDesign } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';

import { BigWidget } from './ServicesScreen/components/BigWidget/BigWidget';
import { SmallWidget } from './ServicesScreen/components/SmallWidget';

import { MajorService, MinorService, WIDGETS, Widgets } from '../../../assets/mockData/mockData';
import { COLORS } from '../../../constants/colors';
import { WidgetRouteParamList } from '../../../navigation/MainNavigator/types/mainParams';
import { scaleHorizontal, scaleVertical } from '../../../utils/scaleUtils';

const initialMajorService = {
  fuelType: '',
  fullTank: 0,
  message: '',
  price: '',
  progress: 0,
  serviceName: '',
  techMessage: '',
  time: '',
  title: '',
};

const initialMinorService = {
  amount: '',
  price: '',
  serviceName: '',
  title: '',
  total: '',
};

const MAJOR = 'major';

export const WidgetScreen = () => {
  const navigation = useNavigation();
  const params = useRoute<WidgetRouteParamList>().params;
  const isMajor = params.widgetType === MAJOR;
  const [majorService, setMajorService] = useState<MajorService>(initialMajorService);
  const [minorService, setMinorService] = useState<MinorService>(initialMinorService);

  const setRenderDataHandler = () => {
    if (isMajor) {
      setMajorService(
        WIDGETS[params.activeSlide].widgets[params.widgetType as keyof Widgets][params.widgetId] as MajorService,
      );
    } else {
      setMinorService(
       WIDGETS[params.activeSlide].widgets[params.widgetType as keyof Widgets][params.widgetId] as MinorService,
      );
    }
  };

  const goBack = () => {
    navigation.goBack();
  };

  useEffect(() => {
    setRenderDataHandler();
  }, []);

  return (
    <>
      <TouchableOpacity style={styles.header} onPress={goBack}>
        <AntDesign name={'left'} size={24} color={COLORS.black} />
      </TouchableOpacity>
      <View style={styles.container}>

        {
          isMajor ? (
            <BigWidget
              widgetId={params.widgetId}
              activeSlide={params.activeSlide}
              mainTitle={majorService.title}
              message={majorService.message}
              price={majorService.price}
              roughTime={majorService.time}
              serviceName={params.serviceName}
              isFuel={!!majorService.fuelType}
              style={styles.bigWidgetContainerStyle}
            />
          ) : (
            <SmallWidget
              widgetId={params.widgetId}
              activeSlide={params.activeSlide}
              serviceName={params.serviceName}
              title={minorService.title}
              amount={minorService.amount}
              price={minorService.price}
              total={minorService.total}
            />
          )
        }
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: scaleHorizontal(16),
    backgroundColor: COLORS.white,
  },
  bigWidgetContainerStyle: {
    width: '100%',
  },
  header: {
    backgroundColor: COLORS.white,
    paddingBottom: scaleVertical(24),
  },
});
