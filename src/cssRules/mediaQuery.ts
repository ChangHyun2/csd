import { Size } from "@/types/system";
import { CSSRule, CSSRuleCreator } from "@/types/CSSRules";
import { BREAKPOINT } from "../values";

// 참조 최적화
// 0:xs  1:sm  2:md  3:lg  4:xl
const breakpoint = Object.values(BREAKPOINT);

type XsOnly = CSSRuleCreator;
type Over = { [S in Exclude<Size, "xl">]: CSSRuleCreator };
type Under = { [S in Exclude<Size, "xs">]: CSSRuleCreator };
type SmTo = { [S in Exclude<Size, "xs" | "sm">]: CSSRuleCreator };
type MdTo = { [S in Exclude<Size, "xs" | "sm" | "md">]: CSSRuleCreator };
type LgToXl = CSSRuleCreator;

export const xsOnly: XsOnly = (CSSRule) =>
  `@media only screen and (max-width: ${breakpoint[1] - 1}px){${CSSRule}}`;

export const over: Over = {
  xs: (CSSRule) =>
    `@media only screen and (min-width:${breakpoint[1]}px){${CSSRule}}`,
  sm: (CSSRule) =>
    `@media only screen and (min-width:${breakpoint[2]}px){${CSSRule}}`,
  md: (CSSRule) =>
    `@media only screen and (min-width:${breakpoint[3]}px){${CSSRule}}`,
  lg: (CSSRule) =>
    `@media only screen and (min-width:${breakpoint[4]}px){${CSSRule}}`,
};

export const under: Under = {
  sm: (CSSRule) =>
    `@media only screen and (max-width:${breakpoint[1] - 1}px){${CSSRule}}`,
  md: (CSSRule) =>
    `@media only screen and (max-width:${breakpoint[2] - 1}px){${CSSRule}}`,
  lg: (CSSRule) =>
    `@media only screen and (max-width:${breakpoint[3] - 1}px){${CSSRule}}`,
  xl: (CSSRule) =>
    `@media only screen and (max-width:${breakpoint[4] - 1}px){${CSSRule}}`,
};

export const smTo: SmTo = {
  md: (CSSRule: CSSRule) =>
    `@media only screen and (min-width:${breakpoint[1]}px) and (max-width:${breakpoint[2]}px){${CSSRule}}`,
  lg: (CSSRule: CSSRule) =>
    `@media only screen and (min-width:${breakpoint[1]}px) and (max-width:${breakpoint[3]}px){${CSSRule}}`,
  xl: (CSSRule: CSSRule) =>
    `@media only screen and (min-width:${breakpoint[1]}px) and (max-width:${breakpoint[4]}px){${CSSRule}}`,
};

export const mdTo: MdTo = {
  lg: (CSSRule: CSSRule) =>
    `@media only screen and (min-width:${breakpoint[2]}px) and (max-width:${breakpoint[3]}px){${CSSRule}}`,
  xl: (CSSRule: CSSRule) =>
    `@media only screen and (min-width:${breakpoint[2]}px) and (max-width:${breakpoint[4]}px){${CSSRule}}`,
};

export const lgToXl: LgToXl = (CSSRule) =>
  `@media only screen and (min-width:${breakpoint[3]}) and (max-width:${breakpoint[4]}){${CSSRule}}`;
