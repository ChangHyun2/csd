import { BREAKPOINT } from '../values';

const breakpoint = Object.values(BREAKPOINT);

// const over = {};
// const under = {};
// const smTo = {};
// const mdTo = {};

export const xsOnly = (cssRules) =>
  `@media only screen and (max-width: ${breakpoint[1] - 1}px){${cssRules}}`;

export const over = ['xs', 'sm', 'md', 'lg', 'xl'].reduce(
  (over, BREAKPOINT, i) => ({
    ...over,
    [BREAKPOINT]: (cssRules) =>
      `@media only screen and (min-width:${breakpoint[i]}px){${cssRules}}`,
  }),
  {}
);

export const under = ['sm', 'md', 'lg', 'xl'].reduce(
  (under, BREAKPOINT, i) => ({
    ...under,
    [BREAKPOINT]: (cssRules) =>
      `@media only screen and (max-width:${
        breakpoint[i + 1] - 1
      }px){${cssRules}}`,
  }),
  {}
);

export const smTo = ['md', 'lg', 'xl'].reduce(
  (smTo, BREAKPOINT, i) => ({
    ...smTo,
    [BREAKPOINT]: (cssRules) =>
      `@media only screen and (min-width:${breakpoint[1]}px) and (max-width:${
        breakpoint[i + 1]
      }px){${cssRules}}`,
  }),
  {}
);

export const mdTo = ['lg', 'xl'].reduce(
  (mdTo, BREAKPOINT, i) => ({
    ...mdTo,
    [BREAKPOINT]: (cssRules) =>
      `@media only screen and (min-width:${breakpoint[2]}px) and (max-width:${
        breakpoint[i + 3]
      }px){${cssRules}}`,
  }),
  {}
);

// export const lgToXl = (cssRules) => `@media only screen and (min-width:${breakpoint[2]}) and (max-width:${breakpoint[3]}){${cssRules}}`,
