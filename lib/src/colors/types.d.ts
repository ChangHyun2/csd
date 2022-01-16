/**
 * material ui의 colors를 옮긴 컬러 시스템입니다.
 *
 */
export declare type RGB = string;
export declare type Contrasts = "50" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900" | "A100" | "A200" | "A400" | "A700";
export declare type ChromaticColor = {
    [Contrast in Contrasts]: RGB;
};
export declare type Hues = "red" | "pink" | "purple" | "deepPurple" | "indigo" | "blue" | "lightBlue" | "cyan" | "teal" | "green" | "lightGreen" | "lime" | "yellow" | "amber" | "orange" | "deepOrange" | "brown" | "grey" | "blueGrey";
export declare type ChromaticColors = {
    [Hue in Hues]: ChromaticColor;
};
export declare type AchromaticColor = RGB;
export declare type Achromatics = "black" | "white";
export declare type AchromaticColors = {
    [Acyromatic in Achromatics]: AchromaticColor;
};
export declare type Colors = AchromaticColors & ChromaticColors;
