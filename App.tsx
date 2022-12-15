import React, { StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import 'react-native-gesture-handler';

import { RootNavigator } from './src/navigation/RootNavigator';

const App = () => (
  <GestureHandlerRootView style={styles.container}>
    <RootNavigator />
  </GestureHandlerRootView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
