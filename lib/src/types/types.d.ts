export declare type CSSRule = string;
export declare type MQCSSRuleCreator = (CSSRule: CSSRule) => CSSRule;
/********** Design System  ************/
export declare type BreakpointOptions = "xs" | "sm" | "md" | "lg" | "xl";
export declare type HOptions = 10 | 12 | 14 | 16 | 18 | 22 | 32 | 42;
export declare type HValues = HOptions;
export declare type HeadingOptions = "h10" | "h12" | "h14" | "h16" | "h18" | "h22" | "h32" | "h42";
export declare type MarginBottomOptions = "mb1" | "mb2" | "mb3" | "mb4" | "mb5" | "mb6" | "mb7" | "mb8";
export declare type SpacingOptions = 4 | 8 | 16 | 24 | 49 | 10 | 20 | 30 | 50 | 60 | 70 | 80;
export declare type SpacingValue = SpacingOptions;
export declare type ZIndexOptions = "dropdown" | "sticky" | "fixed" | "backdrop" | "modal" | "popover" | "tooltip";
/**********  alignChild  ************/
export declare type AlignChildOptions = "flex" | "row" | "rowCenter" | "rowSpaceBetween" | "rowEnd" | "col" | "colCenter" | "colSpaceBetween" | "colEnd" | "relative";
export declare type AlignChild = Record<AlignChildOptions, CSSRule>;
/**********  alignSelf  ************/
export declare type GridOption = "grid" | "grid0" | "grid1" | "grid2" | "grid3" | "grid4" | "grid5" | "grid6" | "grid7" | "grid8" | "grid9" | "grid10" | "grid11" | "grid12";
export declare type AlignSelfOption = "fluid" | GridOption | "absolute" | MarginBottomOptions;
export declare type AlignSelf = Record<AlignSelfOption, CSSRule>;
/**********  baseComponent  ************/
/**********  mediaQuery  ************/
export declare type MediaQueryCreators = Partial<Record<BreakpointOptions, MQCSSRuleCreator>>;
export interface MediaQuery {
    xsOnly: MQCSSRuleCreator;
    over: MediaQueryCreators;
    under: MediaQueryCreators;
    smTo: MediaQueryCreators;
    mdTo: MediaQueryCreators;
}
/**********  pad  ************/
export declare type Pad = Record<BreakpointOptions, CSSRule>;
/**********  colors  ************/
/**********  round  ************/
export declare type Round = Record<BreakpointOptions, CSSRule>;
/**********  spacing  ************/
export declare type Spacing = Record<SpacingOptions, CSSRule>;
/**********  typo  ************/
export declare type Typo = Record<"bold" | "textCenter" | HeadingOptions, CSSRule>;
/**********  zIndex  ************/
export declare type ZIndex = Record<ZIndexOptions, CSSRule>;
