import { useMediaQuery as useMediaQueryHookz } from '@react-hookz/web';

export const breakpointValues = {
  xs: 375,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
} as const;

export const breakpoints = Object.keys(breakpointValues).reduce(
  (acc, cur) => ({ ...acc, [cur]: `${breakpointValues[cur]}px` }),
  {},
) as BreakpointObject;

const mediaFunctions = {
  min: (value: BreakpointValues) => `@media screen and (min-width: ${breakpointValues[value]}px)`,
  max: (value: BreakpointValues) => `@media screen and (max-width: ${breakpointValues[value] - 1}px)`,
  between: (min: BreakpointValues, max: BreakpointValues) =>
    `@media screen and (min-width: ${breakpointValues[min]}px) and (max-width: ${breakpointValues[max] - 1}px)`,
};

export const media = {
  ...Object.keys(breakpointValues).reduce(
    (acc, cur) => ({
      ...acc,
      [cur]: `@media screen and (min-width: ${breakpointValues[cur]}px)`,
    }),
    {},
  ),
  ...mediaFunctions,
} as Media;

export const useMediaQuery = (value: string) =>
  useMediaQueryHookz(value.replace('@media ', ''), {
    initializeWithValue: false, // for ssr
  });

type BreakpointValues = keyof typeof breakpointValues;
type BreakpointObject = Record<BreakpointValues, string>;
type MediaFunctions = typeof mediaFunctions;
type Media = BreakpointObject & MediaFunctions;
