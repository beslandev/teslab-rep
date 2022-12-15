import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';

import { COLORS } from '../constants/colors';
import { LABELS } from '../constants/labels';
import { BottomTabRoutes } from '../navigation/BottomTab/types/routes';

import { bottomTabIcons } from './bottomTabIcons';

export const bottomTabOptionPicker = (name: BottomTabRoutes): BottomTabNavigationOptions => {
  return {
    tabBarLabel: LABELS[name],
    tabBarActiveTintColor: COLORS.light,
    tabBarInactiveTintColor: COLORS.grey,
    tabBarIcon: ({ focused }: { focused: boolean }) => {
      return (
        bottomTabIcons(focused)[name]
      );
    },
  };
};
