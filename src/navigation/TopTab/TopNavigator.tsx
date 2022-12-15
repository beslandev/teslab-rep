import React from 'react-native';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { TopBarRoutes } from './types/routes';
import { TopTabParamList } from './types/topTabParams';
import { topTabScreenOptions } from '../../constants/topBarScreenOptions';
import { MarketPlaceScreen } from '../../features/Main/screens/MarketPlaceScreen';
import { ServicesScreen } from '../../features/Main/screens/ServicesScreen/ServicesScreen';
import { SubScreen } from '../../features/Main/screens/SubScreen';

const Tab = createMaterialTopTabNavigator<TopTabParamList>();

type TopNavigatorProps = {
  activeSlide: number
};

export const TopTabNavigator = ({ activeSlide }: TopNavigatorProps) => {
  const renderServiceScreen = () => (
    <ServicesScreen activeSlide={activeSlide} />
  );

  return (
    <Tab.Navigator
      screenOptions={topTabScreenOptions}
      initialRouteName={TopBarRoutes.SERVICE}
    >
      <Tab.Screen name={TopBarRoutes.SERVICE}>
        {renderServiceScreen}
      </Tab.Screen>
      <Tab.Screen name={TopBarRoutes.SUB} component={SubScreen} />
      <Tab.Screen name={TopBarRoutes.MARKET} component={MarketPlaceScreen} />
    </Tab.Navigator>
  );
};

