export type CSSCode = string;
export type MQCodeCreator = (cssCode: CSSCode) => CSSCode;
export interface CSSCodes {
  [index: string]: CSSCode;
}

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

/**********  alignChild  ************/
export type AlignChildOption =
  | 'flex'
  | 'row'
  | 'rowCenter'
  | 'rowSpaceBetween'
  | 'rowEnd'
  | 'col'
  | 'colCenter'
  | 'colSpaceBetween'
  | 'colEnd'
  | 'relative';
export type AlignChild = Record<AlignChildOption, CSSCode>;
export const alignChild: AlignChild;

/**********  alignSelf  ************/

export type GridOption =
  | 'grid'
  | 'grid0'
  | 'grid1'
  | 'grid2'
  | 'grid3'
  | 'grid4'
  | 'grid5'
  | 'grid6'
  | 'grid7'
  | 'grid8'
  | 'grid9'
  | 'grid10'
  | 'grid11'
  | 'grid12';

export type AlignSelfOption =
  | 'fluid'
  | GridOption
  | 'absolute'
  | MarginBottomOption;

export type AlignSelf = Record<AlignSelfOption, CSSCode>;
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

export type Pad = Record<BreakpointOption, CSSCode>;
export const pad: Pad;

/**********  colors  ************/

/**********  round  ************/

export type Round = Record<BreakpointOption, CSSCode>;
export const round: Round;

/**********  spacing  ************/

export type Spacing = Record<SpacingOption, CSSCode>;
export const spacing: Spacing;

/**********  typo  ************/

// export type FontWeight
// export type FontTransform
export type Typo = Record<'bold' | 'textCenter' | HeadingOption, CSSCode>;
export const typo: Typo;

/**********  zIndex  ************/

export type ZIndex = Record<ZIndexOption, CSSCode>;
export const zIndex: ZIndex;
