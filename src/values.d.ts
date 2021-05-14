/********** Design System  ************/

// Detail values are written in cssCodes files.
export type BreakpointOption = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type HOption = 10 | 12 | 14 | 16 | 18 | 22 | 32 | 42;
export type HValue = HOption;

// you're able to define heading option with heading1, heading2, display1, display2, ...
export type HeadingOption =
  | 'h10'
  | 'h12'
  | 'h14'
  | 'h16'
  | 'h18'
  | 'h22'
  | 'h32'
  | 'h42';

export type MarginBottomOption =
  | 'mb1'
  | 'mb2'
  | 'mb3'
  | 'mb4'
  | 'mb5'
  | 'mb6'
  | 'mb7'
  | 'mb8';

export type SpacingOption =
  | 4
  | 8
  | 16
  | 24
  | 49
  | 10
  | 20
  | 30
  | 50
  | 60
  | 70
  | 80;
export type SpacingValue = SpacingOption;

export type ZIndexOption =
  | 'dropdown'
  | 'sticky'
  | 'fixed'
  | 'backdrop'
  | 'modal'
  | 'popover'
  | 'tooltip';

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
