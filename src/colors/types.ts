/**
 * material ui의 colors를 옮긴 컬러 시스템입니다.
 *
 */

export type RGB = string;

// chromatic colors
export type Contrasts =
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

export type ChromaticColor = {
  [Contrast in Contrasts]: RGB;
};
export type Hues =
  | "red"
  | "pink"
  | "purple"
  | "deepPurple"
  | "indigo"
  | "blue"
  | "lightBlue"
  | "cyan"
  | "teal"
  | "green"
  | "lightGreen"
  | "lime"
  | "yellow"
  | "amber"
  | "orange"
  | "deepOrange"
  | "brown"
  | "grey"
  | "blueGrey";
export type ChromaticColors = {
  [Hue in Hues]: ChromaticColor;
};

// achromatic colors
export type AchromaticColor = RGB;
export type Achromatics = "black" | "white";
export type AchromaticColors = {
  [Acyromatic in Achromatics]: AchromaticColor;
};

// colors object
export type Colors = AchromaticColors & ChromaticColors;
