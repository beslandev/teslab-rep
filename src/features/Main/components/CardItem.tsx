import React, { Image, StyleSheet, Text, View } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';

import { COLORS } from '../../../constants/colors';
import { gradientSteps } from '../../../constants/gradientSteps';
import { TEXT } from '../../../constants/text';
import { scaleFontSize, scaleHorizontal, scaleLineHeight, scaleVertical } from '../../../utils/scaleUtils';

import { CardLogo } from './CardLogo';

const Avatar = require('../../../assets/avatar.webp');

type CardItemProps = {
  subscriptionDate: string;
  model: string;
  registrationNumber: string;
};

export const CardItem = ({ subscriptionDate, model, registrationNumber }: CardItemProps) => (
  <LinearGradient colors={gradientSteps['card']} style={styles.carouselItemContainer}>
    <CardLogo />
    <View style={styles.imageContainer}>
      <Image source={Avatar} style={styles.avatarImage} />
    </View>
    <Text style={styles.subscription}>
      {TEXT.main.subscription} {subscriptionDate}
    </Text>
    <View style={styles.modelContainer}>
      <Text style={styles.modelText}>
        {model}
      </Text>
      <Text style={styles.registrationNumber}>
        {registrationNumber}
      </Text>
    </View>
  </LinearGradient>
);

const styles = StyleSheet.create({
  carouselItemContainer: {
    flex: 1,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    alignItems: 'center',
  },
  imageContainer: {
    position: 'absolute',
    top: 20,
    right: 20,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: COLORS.white,
  },
  avatarImage: {
    width: scaleHorizontal(50),
    height: scaleVertical(50),
    borderRadius: 25,
    borderWidth: 2,
    borderColor: COLORS.mariner,
  },
  subscription: {
    position: 'relative',
    paddingHorizontal: scaleHorizontal(5),
    paddingVertical: scaleVertical(5),
    borderRadius: 10,
    overflow: 'hidden',
    fontSize: scaleFontSize(14),
    lineHeight: scaleLineHeight(20),
    color: COLORS.white,
    backgroundColor: COLORS.grey,
    bottom: -10,
    zIndex: 2,
  },
  modelContainer: {
    paddingHorizontal: scaleHorizontal(20),
    paddingVertical: scaleVertical(5),
    borderRadius: 10,
    backgroundColor: COLORS.model,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modelText: {
    fontSize: scaleFontSize(30),
    lineHeight: scaleLineHeight(48),
    color: COLORS.white,
  },
  registrationNumber: {
    fontSize: scaleFontSize(18),
    lineHeight: scaleLineHeight(24),
    color: COLORS.regText,
  },
});
