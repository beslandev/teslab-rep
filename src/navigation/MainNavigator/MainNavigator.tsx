import React from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { MainStackParamList } from './types/mainParams';
import { MainRoutes } from './types/routes';
import { mainScreenOptions } from '../../constants/mainScreenOptions';
import { WidgetScreen } from '../../features/Main/screens/WidgetScreen';
import { BottomTabNavigator } from '../BottomTab/BottomTabNavigator';

const Stack = createNativeStackNavigator<MainStackParamList>();

export const MainNavigator = () => (
  <Stack.Navigator
    screenOptions={mainScreenOptions}
    initialRouteName={MainRoutes.BOTTOM_TAB}
  >
    <Stack.Screen
      name={MainRoutes.BOTTOM_TAB}
      component={BottomTabNavigator}
    />
    <Stack.Screen
      name={MainRoutes.WIDGET}
      component={WidgetScreen}
    />
  </Stack.Navigator>
);
