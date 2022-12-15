import { NavigationProp, RouteProp } from '@react-navigation/native';

import { MainRoutes } from './routes';

export type MainStackParamList = {
  [MainRoutes.BOTTOM_TAB]: undefined;
  [MainRoutes.WIDGET]: {
    activeSlide: number;
    widgetType: string;
    widgetId: number;
    serviceName: string;
  }
};

export type MainNavigationProp = NavigationProp<MainStackParamList>;

export type WidgetRouteParamList = RouteProp<MainStackParamList, MainRoutes.WIDGET>;
