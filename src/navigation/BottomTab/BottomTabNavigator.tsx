import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { BottomParamList } from './types/bottomTabParams';
import { BottomTabRoutes } from './types/routes';
import { bottomTabScreenOptions } from '../../constants/bottomTabScreenOptions';
import { AutoScreen } from '../../features/Auto/AutoScreen';
import { MainScreen } from '../../features/Main/MainScreen';
import { MarketScreen } from '../../features/Market/MarketScreen';
import { RidesScreen } from '../../features/Rides/RidesScreen';
import { ServiceScreen } from '../../features/Service/ServiceScreen';
import { bottomTabOptionPicker } from '../../utils/bottomTabOptionPicker';

const BottomTab = createBottomTabNavigator<BottomParamList>();

export const BottomTabNavigator = () => (
  <BottomTab.Navigator
    initialRouteName={BottomTabRoutes.MAIN}
    screenOptions={bottomTabScreenOptions}
  >
    <BottomTab.Screen
      options={bottomTabOptionPicker(BottomTabRoutes.MAIN)}
      name={BottomTabRoutes.MAIN}
      component={MainScreen}
    />
    <BottomTab.Screen
      options={bottomTabOptionPicker(BottomTabRoutes.AUTO)}
      name={BottomTabRoutes.AUTO}
      component={AutoScreen}
    />
    <BottomTab.Screen
      options={bottomTabOptionPicker(BottomTabRoutes.SERVICE)}
      name={BottomTabRoutes.SERVICE}
      component={ServiceScreen}
    />
    <BottomTab.Screen
      options={bottomTabOptionPicker(BottomTabRoutes.RIDES)}
      name={BottomTabRoutes.RIDES}
      component={RidesScreen}
    />
    <BottomTab.Screen
      options={bottomTabOptionPicker(BottomTabRoutes.MARKET)}
      name={BottomTabRoutes.MARKET}
      component={MarketScreen}
    />
  </BottomTab.Navigator>
);
