import {
  Spacing,
  ContainerPadding,
  Round,
  Breakpoint,
  ZIndex,
  FontSize,
  LineHeight,
} from "./types/system";

export const SPACING: {
  [S in Spacing]: S;
} = {
  4: 4,
  8: 8,
  10: 10,
  12: 12,
  16: 16,
  20: 20,
  24: 24,
  28: 28,
  30: 30,
  32: 32,
  40: 40,
  50: 50,
  60: 60,
  70: 70,
  80: 80,
};

export const H: {
  [H in FontSize]: H;
} = {
  10: 10,
  12: 12,
  14: 14,
  16: 16,
  18: 18,
  22: 22,
  32: 32,
  42: 42,
};

export const LINEHEIGHT: {
  [H in FontSize]: LineHeight[H];
} = {
  10: 1.2,
  12: 1.3,
  14: 1.4,
  16: 1.3,
  18: 1.3,
  22: 1.2,
  32: 1.1,
  42: 1.1,
};

export const PAD: ContainerPadding = {
  xs: 24,
  sm: 40,
  md: 60,
  lg: 80,
  xl: 80,
};

export const ROUND: Round = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 20,
  xl: 32,
};

export const BREAKPOINT: Breakpoint = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 1024,
  xl: 1200,
};

export const ZINDEX: ZIndex = {
  dropdown: 1000,
  sticky: 1020,
  fixed: 1030,
  backdrop: 1040,
  modal: 1050,
  popover: 1060,
  tooltip: 1070,
};
