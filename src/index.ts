import {
  alignChild,
  alignSelf,
  mediaQuery,
  typo,
  baseComponent,
} from "./CSSRules";
import * as CSSRules from "./CSSRules";
import * as values from "./values";
import colors from "./colors";

export const s = {
  ...alignChild,
  ...alignSelf,
  ...baseComponent,
  ...mediaQuery,
  ...typo,

  ...CSSRules,
  values,
  colors,
};

export default s;
