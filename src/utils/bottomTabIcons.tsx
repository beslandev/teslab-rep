import React from 'react-native';

import { Entypo,Feather, Ionicons, Octicons } from '@expo/vector-icons';

import { COLORS } from '../constants/colors';
import { BottomTabRoutes } from '../navigation/BottomTab/types/routes';

export const bottomTabIcons = (isFocused: boolean) => {
  return {
    [BottomTabRoutes.MAIN]: (
      <Feather
        name={'home'}
        size={26}
        color={isFocused ? COLORS.light : COLORS.grey}
      />
    ),
    [BottomTabRoutes.AUTO]: (
      <Ionicons
        name={'md-car-sport'}
        size={26}
        color={isFocused ? COLORS.light : COLORS.grey}
      />
    ),
    [BottomTabRoutes.SERVICE]:(
      <Octicons
        name={'apps'}
        size={26}
        color={isFocused ? COLORS.light : COLORS.grey}
      />
    ),
    [BottomTabRoutes.RIDES]: (
      <Feather
        name={'compass'}
        size={26}
        color={isFocused ? COLORS.light : COLORS.grey}
      />
    ),
    [BottomTabRoutes.MARKET]: (
      <Entypo
        name={'shop'}
        size={26}
        color={isFocused ? COLORS.light : COLORS.grey}
      />
    ),
  };
};
