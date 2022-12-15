import React from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import { COLORS } from './colors';

type WidgetIcons = {
  [key: string]: JSX.Element
};

export const WIDGET_ICONS: WidgetIcons = {
  fuel: <MaterialCommunityIcons name="gas-station" size={24} color={COLORS.black} />,
  tech: <MaterialCommunityIcons name="tools" size={24} color={COLORS.black} />,
  gas: <MaterialCommunityIcons name="gas-station" size={24} color={COLORS.violet} />,
  parking: <MaterialCommunityIcons name="car-multiple" size={24} color={COLORS.parking} />,
  fines: <MaterialCommunityIcons name="cctv" size={24} color={COLORS.videCam} />,
};
