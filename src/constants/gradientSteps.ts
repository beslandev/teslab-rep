import { COLORS } from './colors';

type GradientSteps = {
  [key: string]: string[]
};

export const gradientSteps: GradientSteps = {
  card: [COLORS.firstStep, COLORS.secondStep, COLORS.thirdStep],
  fuel: ['#fdffff', '#f7fcff', '#f4fbff'],
  tech: ['#fdfffc', '#fbfef9', '#f9fef6'],
};
