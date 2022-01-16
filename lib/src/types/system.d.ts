export declare type Size = "xs" | "sm" | "md" | "lg" | "xl";
export declare type Spacing = 4 | 8 | 10 | 12 | 16 | 20 | 24 | 28 | 30 | 32 | 40 | 50 | 60 | 70 | 80;
export declare type FontSize = 10 | 12 | 14 | 16 | 18 | 22 | 32 | 42;
export declare type Round = {
    xs: 4;
    sm: 8;
    md: 12;
    lg: 20;
    xl: 32;
};
export declare type Breakpoint = {
    xs: 0;
    sm: 576;
    md: 768;
    lg: 1024;
    xl: 1200;
};
export declare type ContainerPadding = {
    xs: 24;
    sm: 40;
    md: 60;
    lg: 80;
    xl: 80;
};
export declare type ZIndex = {
    dropdown: 1000;
    sticky: 1020;
    fixed: 1030;
    backdrop: 1040;
    modal: 1050;
    popover: 1060;
    tooltip: 1070;
};
export declare type ZIndexOption = keyof ZIndex;
export declare type LineHeight = {
    10: 1.2;
    12: 1.3;
    14: 1.4;
    16: 1.3;
    18: 1.3;
    22: 1.2;
    32: 1.1;
    42: 1.1;
};
