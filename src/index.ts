import {
  alignChild,
  alignSelf,
  baseComponent,
  mediaQuery,
  pad,
  round,
  spacing,
  zIndex,
  typo,
} from "./CSSRules";
import * as values from "./values";
import colors from "./colors";

export const s = {
  ...alignChild,
  ...alignSelf,
  ...baseComponent,
  ...mediaQuery,
  ...zIndex,
  ...typo,

  alignChild,
  alignSelf,
  baseComponent,
  mediaQuery,
  pad,
  round,
  spacing,
  zIndex,
  typo,
  values,
  colors,
};

export default s;
