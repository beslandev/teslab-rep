import React, { StyleSheet, View } from 'react-native';

import { COLORS } from '../../../../../constants/colors';
import { scaleVertical } from '../../../../../utils/scaleUtils';

type ProgressBarProps = {
  progress: number;
};

export const ProgressBar = ({ progress }: ProgressBarProps) => (
  <View style={styles.container} >
    <View style={[ styles.progress, { width: `${progress * 100 / 60 }%` }]} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: scaleVertical(5),
    backgroundColor: COLORS.grey,
    borderRadius: 5,
    marginBottom: scaleVertical(5),
  },
  progress: {
    height: scaleVertical(5),
    borderRadius: 5,
    backgroundColor: COLORS.mariner,
  },
});

