import { Spacing, ContainerPadding, Round, Breakpoint, ZIndex, FontSize, LineHeight } from "./types/system";
export declare const SPACING: {
    [S in Spacing]: S;
};
export declare const H: {
    [H in FontSize]: H;
};
export declare const LINEHEIGHT: {
    [H in FontSize]: LineHeight[H];
};
export declare const PAD: ContainerPadding;
export declare const ROUND: Round;
export declare const BREAKPOINT: Breakpoint;
export declare const ZINDEX: ZIndex;
