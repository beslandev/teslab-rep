import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';

import { IS_ANDROID } from '../utils/platform';

import { COLORS } from './colors';

export const bottomTabScreenOptions: BottomTabNavigationOptions = {
  headerShown: false,
  tabBarShowLabel: true,
  tabBarStyle: {
    position: 'absolute',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: COLORS.bottomTab,
    paddingTop: 10,
    ...(IS_ANDROID ? { height: 70 } : {}),
    ...(IS_ANDROID ? { paddingBottom: 10 } : {}),
    opacity: 0.8,
  },
};
