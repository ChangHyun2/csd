export type CSSRule = string;
export type MQCodeCreator = (CSSRule: CSSRule) => CSSRule;
export interface CSSRules {
  [index: string]: CSSRule;
}

/********** Design System  ************/

// Detail values are written in CSSRules files.
export type BreakpointOption = "xs" | "sm" | "md" | "lg" | "xl";

export type HOption = 10 | 12 | 14 | 16 | 18 | 22 | 32 | 42;
export type HValue = HOption;

// you're able to define heading option with heading1, heading2, display1, display2, ...
export type HeadingOption =
  | "h10"
  | "h12"
  | "h14"
  | "h16"
  | "h18"
  | "h22"
  | "h32"
  | "h42";

export type MarginBottomOption =
  | "mb1"
  | "mb2"
  | "mb3"
  | "mb4"
  | "mb5"
  | "mb6"
  | "mb7"
  | "mb8";

export type SpacingOption =
  | 4
  | 8
  | 10
  | 16
  | 20
  | 24
  | 30
  | 40
  | 50
  | 60
  | 70
  | 80;
export type SpacingValue = SpacingOption;

export type ZIndexOption =
  | "dropdown"
  | "sticky"
  | "fixed"
  | "backdrop"
  | "modal"
  | "popover"
  | "tooltip";

/**********  Values (design system) ************/

export type BREAKPOINT = Record<BreakpointOption, number>;
export const BREAKPOINT: BREAKPOINT;

export type H = Record<HOption, HValue>;
export const H: H;

export type LINE_HEIGHT = Record<HOption, number>;
export const LINE_HEIGHT: LINE_HEIGHT;

export type MARGIN_BOTTOM = Record<MarginBottomOption, number>;
export const MARGIN_BOTTOM: MARGIN_BOTTOM;

export type PAD = Record<BreakpointOption, SpacingValue>;
export const PAD: PAD;

export type ROUND = Record<BreakpointOption, number>;
export const ROUND: ROUND;

export type SPACING = Record<SpacingOption, SpacingValue>;
export const SPACING: SPACING;

export type ZINDEX = Record<ZIndexOption, number>;
export const ZINDEX: ZINDEX;

export interface Values {
  BREAKPOINT: BREAKPOINT;
  H: H;
  LINE_HEIGHT: LINE_HEIGHT;
  MARGIN_BOTTOM: MARGIN_BOTTOM;
  PAD: PAD;
  ROUND: ROUND;
  SPACING: SPACING;
  ZINDEX: ZINDEX;
}

export const values: Values;

/**********  Colors (design system) ************/

type Contrast =
  | "50"
  | "100"
  | "200"
  | "300"
  | "400"
  | "500"
  | "600"
  | "700"
  | "800"
  | "900"
  | "A100"
  | "A200"
  | "A400"
  | "A700";

export type Color = Record<Contrast, string>;

// interface에서 union type으로 index signature를 해결할 수 있는 방법이 없는지?
export interface HueColors {
  amber: Color;
  blue: Color;
  blueGrey: Color;
  brown: Color;
  cyan: Color;
  deepOrange: Color;
  deepPurple: Color;
  green: Color;
  grey: Color;
  indigo: Color;
  lightBlue: Color;
  lightGreen: Color;
  lime: Color;
  orange: Color;
  pink: Color;
  purple: Color;
  red: Color;
  teal: Color;
  yellow: Color;
}

export interface Colors extends HueColors {
  white: string;
  black: string;
}

/**********  alignChild  ************/
export type AlignChildOption =
  | "flex"
  | "row"
  | "rowCenter"
  | "rowSpaceBetween"
  | "rowEnd"
  | "col"
  | "colCenter"
  | "colSpaceBetween"
  | "colEnd"
  | "relative";
export type AlignChild = Record<AlignChildOption, CSSRule>;
export const alignChild: AlignChild;

/**********  alignSelf  ************/

export type GridOption =
  | "grid"
  | "grid1"
  | "grid2"
  | "grid3"
  | "grid4"
  | "grid5"
  | "grid6"
  | "grid7"
  | "grid8"
  | "grid9"
  | "grid10"
  | "grid11"
  | "grid12";

export type AlignSelfOption =
  | "fluid"
  | GridOption
  | "absolute"
  | MarginBottomOption;

export type AlignSelf = Record<AlignSelfOption, CSSRule>;
export const alignSelf: AlignSelf;

//! basecomponent
/**********  baseComponent  ************/

/**********  mediaQuery  ************/

// https://stackoverflow.com/questions/53276792/define-a-list-of-optional-keys-for-typescript-record
export type MediaQueryCreators = Partial<
  Record<BreakpointOption, MQCodeCreator>
>;

export interface MediaQuery {
  xsOnly: MQCodeCreator;
  over: MediaQueryCreators;
  under: MediaQueryCreators;
  smTo: MediaQueryCreators;
  mdTo: MediaQueryCreators;
}
export const mediaQuery: MediaQuery;

/**********  pad  ************/

export type Pad = Record<BreakpointOption, CSSRule>;
export const pad: Pad;

/**********  colors  ************/

/**********  round  ************/

export type Round = Record<BreakpointOption, CSSRule>;
export const round: Round;

/**********  spacing  ************/

export type Spacing = Record<SpacingOption, CSSRule>;
export const spacing: Spacing;

/**********  typo  ************/

// export type FontWeight
// export type FontTransform
export type Typo = Record<"bold" | "textCenter" | HeadingOption, CSSRule>;
export const typo: Typo;

/**********  zIndex  ************/

export type ZIndex = Record<ZIndexOption, CSSRule>;
export const zIndex: ZIndex;

/**********  S ( default exported module in index.js )  ************/

interface S {
  alignChild: AlignChild;
  alignSelf: AlignSelf;
  baseComponent: any;
  mediaQuery: MediaQuery;
  pad: Pad;
  round: Round;
  spacing: Spacing;
  typo: Typo;
  zIndex: ZIndex;

  values: Values;
  colors: Colors;

  flex: CSSRule;
  row: CSSRule;
  rowCenter: CSSRule;
  rowSpaceBetween: CSSRule;
  rowEnd: CSSRule;
  col: CSSRule;
  colCenter: CSSRule;
  colSpaceBetween: CSSRule;
  colEnd: CSSRule;
  relative: CSSRule;

  fluid: CSSRule;
  grid: CSSRule;
  grid1: CSSRule;
  grid2: CSSRule;
  grid3: CSSRule;
  grid4: CSSRule;
  grid5: CSSRule;
  grid6: CSSRule;
  grid7: CSSRule;
  grid8: CSSRule;
  grid9: CSSRule;
  grid10: CSSRule;
  grid11: CSSRule;
  grid12: CSSRule;
  absolute: CSSRule;
  mb1: CSSRule;
  mb2: CSSRule;
  mb3: CSSRule;
  mb4: CSSRule;
  mb5: CSSRule;
  mb6: CSSRule;
  mb7: CSSRule;
  mb8: CSSRule;
  baseButton: CSSRule;

  xsOnly: MQCodeCreator;
  over: MediaQueryCreators;
  under: MediaQueryCreators;
  smTo: MediaQueryCreators;
  mdTo: MediaQueryCreators;

  bold: CSSRule;
  textCenter: CSSRule;
  h10: CSSRule;
  h12: CSSRule;
  h14: CSSRule;
  h16: CSSRule;
  h18: CSSRule;
  h22: CSSRule;
  h32: CSSRule;
  h42: CSSRule;
}

declare let s: S;
export default s;