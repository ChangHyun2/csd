import {
  alignChild,
  alignSelf,
  mediaQuery,
  typo,
  baseComponent,
} from './cssCodes';
import * as cssCodes from './cssCodes';
import * as values from './values';
import colors from './colors';

export const s = {
  ...alignChild,
  ...alignSelf,
  ...baseComponent,
  ...mediaQuery,
  ...typo,

  ...cssCodes,
  values,
  colors,
};

export default s;
