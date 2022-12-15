import { COLORS } from './colors';

export const activeIndicatorConfig = {
  color: COLORS.white,
  margin: 3,
  opacity: 1,
  size: 10,
};

export const inactiveIndicatorConfig = {
  color: COLORS.grey,
  margin: 3,
  opacity: 0.5,
  size: 10,
};

export const decreasingDots = [
  {
    config: { color: COLORS.grey, margin: 3, opacity: 0.5, size: 8 },
    quantity: 1,
  },
  {
    config: { color: COLORS.grey, margin: 3, opacity: 0.5, size: 6 },
    quantity: 1,
  },
];
