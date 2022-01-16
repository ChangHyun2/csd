export type CSSRule = string;

export type MQCSSRuleCreator = (CSSRule: CSSRule) => CSSRule;

/********** Design System  ************/

export type BreakpointOptions = "xs" | "sm" | "md" | "lg" | "xl";

export type HOptions = 10 | 12 | 14 | 16 | 18 | 22 | 32 | 42;
export type HValues = HOptions;

export type HeadingOptions =
  | "h10"
  | "h12"
  | "h14"
  | "h16"
  | "h18"
  | "h22"
  | "h32"
  | "h42";

export type MarginBottomOptions =
  | "mb1"
  | "mb2"
  | "mb3"
  | "mb4"
  | "mb5"
  | "mb6"
  | "mb7"
  | "mb8";

export type SpacingOptions =
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

export type SpacingValue = SpacingOptions;

export type ZIndexOptions =
  | "dropdown"
  | "sticky"
  | "fixed"
  | "backdrop"
  | "modal"
  | "popover"
  | "tooltip";

/**********  alignChild  ************/
export type AlignChildOptions =
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
export type AlignChild = Record<AlignChildOptions, CSSRule>;

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
  | MarginBottomOptions;

export type AlignSelf = Record<AlignSelfOption, CSSRule>;

//! basecomponent
/**********  baseComponent  ************/
/**********  mediaQuery  ************/

// https://stackoverflow.com/questions/53276792/define-a-list-of-optional-keys-for-typescript-record
export type MediaQueryCreators = Partial<
  Record<BreakpointOptions, MQCSSRuleCreator>
>;

export interface MediaQuery {
  xsOnly: MQCSSRuleCreator;
  over: MediaQueryCreators;
  under: MediaQueryCreators;
  smTo: MediaQueryCreators;
  mdTo: MediaQueryCreators;
}

/**********  pad  ************/

export type Pad = Record<BreakpointOptions, CSSRule>;

/**********  colors  ************/

/**********  round  ************/

export type Round = Record<BreakpointOptions, CSSRule>;

/**********  spacing  ************/

export type Spacing = Record<SpacingOptions, CSSRule>;

/**********  typo  ************/

// export type FontWeight
// export type FontTransform
export type Typo = Record<"bold" | "textCenter" | HeadingOptions, CSSRule>;

/**********  zIndex  ************/

export type ZIndex = Record<ZIndexOptions, CSSRule>;
