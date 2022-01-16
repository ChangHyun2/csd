import { ZIndex } from "@/types/system";
declare type ZIndexCSSRule<N> = N extends keyof ZIndex ? `z-index: ${ZIndex[N]};` : never;
declare const zIndex: {
    [C in keyof ZIndex]: ZIndexCSSRule<C>;
};
export default zIndex;
