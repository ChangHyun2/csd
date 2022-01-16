import { Size } from "@/types/system";
import { CSSRuleCreator } from "@/types/CSSRules";
declare type XsOnly = CSSRuleCreator;
declare type Over = {
    [S in Exclude<Size, "xl">]: CSSRuleCreator;
};
declare type Under = {
    [S in Exclude<Size, "xs">]: CSSRuleCreator;
};
declare type SmTo = {
    [S in Exclude<Size, "xs" | "sm">]: CSSRuleCreator;
};
declare type MdTo = {
    [S in Exclude<Size, "xs" | "sm" | "md">]: CSSRuleCreator;
};
declare type LgToXl = CSSRuleCreator;
export declare const xsOnly: XsOnly;
export declare const over: Over;
export declare const under: Under;
export declare const smTo: SmTo;
export declare const mdTo: MdTo;
export declare const lgToXl: LgToXl;
declare const mediaQuery: {
    xsOnly: CSSRuleCreator;
    over: Over;
    under: Under;
    smTo: SmTo;
    mdTo: MdTo;
};
export default mediaQuery;
