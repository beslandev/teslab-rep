import React, { Image,StyleSheet, Text, View } from 'react-native';

import { COLORS } from '../../../constants/colors';
import { TEXT } from '../../../constants/text';
import { scaleFontSize, scaleHorizontal, scaleLineHeight, scaleVertical } from '../../../utils/scaleUtils';

type AutoItemProps = {
  carImage: string;
  registrationNumber: string;
  model: string;
  distance: string;
  state: string;
};

export const AutoItem = ({
  carImage,
  registrationNumber,
  model,
  distance,
  state,
}: AutoItemProps) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: carImage }} style={styles.carImage} />
      <View>
        <Text style={styles.text}>{`${TEXT.auto.gosNumber}${registrationNumber}`}</Text>
        <Text style={styles.text}>{`${TEXT.auto.distance}${distance}`}</Text>
        <Text style={styles.text}>{`${TEXT.auto.model}${model}`}</Text>
        <Text style={styles.text} >{`${TEXT.auto.state}${state}`}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    paddingHorizontal: scaleHorizontal(12),
    paddingVertical: scaleVertical(16),
    marginBottom: scaleVertical(12),
    borderRadius: 16,
  },
  carImage: {
    width: scaleHorizontal(100),
    height: scaleVertical(100),
    borderRadius: 16,
    marginRight: scaleHorizontal(16),
  },
  text: {
    fontSize: scaleFontSize(16),
    lineHeight: scaleLineHeight(24),
    color: COLORS.black,
  },
});
