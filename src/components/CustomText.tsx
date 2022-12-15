import React, { StyleProp, StyleSheet, Text, TextProps, TextStyle } from 'react-native';

import { COLORS } from '../constants/colors';

type CustomTextProps = {
  text?: string | number;
  style?: StyleProp<TextStyle>;
};

export const CustomText = ({
  style,
  text = '',
  ...props
}: CustomTextProps & TextProps) => {
  return (
    <Text
      style={[styles.text, style]}
      {...props}
    >
      {text}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    lineHeight: 25,
    color: COLORS.black,
  },
});
