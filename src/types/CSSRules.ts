import { Size, FontSize, LineHeight } from "@/types/system";
export type PixelCSSRule<T> = T extends number | string ? `${T}px` : never;
export type CSSRule = string;
export type CSSRuleCreator = (CSSRule: CSSRule) => CSSRule;
export type Heading<F> = F extends FontSize
  ? `font-size: ${F}px; line-height: ${LineHeight[F]}px;`
  : never;

export type MarginBottomOption =
  | "mb1"
  | "mb2"
  | "mb3"
  | "mb4"
  | "mb5"
  | "mb6"
  | "mb7"
  | "mb8";

export type ZIndexOption =
  | "dropdown"
  | "sticky"
  | "fixed"
  | "backdrop"
  | "modal"
  | "popover"
  | "tooltip";

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

/**********  alignSelf  ************/

export type GridOption =
  | "grid"
  | "grid0"
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
