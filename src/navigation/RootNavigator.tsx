import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { NavigationContainer } from '@react-navigation/native';

import { CustomStatusBar } from '../components/CustomBar';

import { MainNavigator } from './MainNavigator/MainNavigator';
import { COLORS } from '../constants/colors';

export const RootNavigator = () => (
  <NavigationContainer>
    <SafeAreaProvider>
      <CustomStatusBar
        backgroundStyle={styles.statusBar}
        barStyle={'light-content'}
      />
      <MainNavigator />
    </SafeAreaProvider>
  </NavigationContainer>
);

const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: COLORS.evening,
  },
});
