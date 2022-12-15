import React, { StatusBar, StatusBarStyle, View, ViewStyle } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type CustomStatusBarProps = {
  backgroundStyle: ViewStyle,
  barStyle: StatusBarStyle,
};

export const CustomStatusBar = ({ backgroundStyle, barStyle }: CustomStatusBarProps) => {
  const { top } = useSafeAreaInsets();

  return (
    <View style={[{ paddingTop: top }, backgroundStyle]}>
      <StatusBar
        barStyle={barStyle as StatusBarStyle}
        translucent
        backgroundColor={backgroundStyle.backgroundColor}
      />
    </View>
  );
};
