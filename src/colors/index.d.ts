/**********  Colors (design system) ************/

type Contrast =
  | '50'
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900'
  | 'A100'
  | 'A200'
  | 'A400'
  | 'A700';

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
