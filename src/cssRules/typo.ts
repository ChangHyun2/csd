import { FontSize, LineHeight } from "@/types/system";
import { HeadingCSSRule } from "@/types/CSSRules";

export const bold = "font-weight: bold;";
export const textCenter = "text-align:center;";
export const h10: HeadingCSSRule<10> = `font-size: 10px; line-height: 1.2;`;
export const h12: HeadingCSSRule<12> = `font-size: 12px; line-height: 1.3;`;
export const h14: HeadingCSSRule<14> = `font-size: 14px; line-height: 1.4;`;
export const h16: HeadingCSSRule<16> = `font-size: 16px; line-height: 1.3;`;
export const h18: HeadingCSSRule<18> = `font-size: 18px; line-height: 1.3;`;
export const h22: HeadingCSSRule<22> = `font-size: 22px; line-height: 1.2;`;
export const h32: HeadingCSSRule<32> = `font-size: 32px; line-height: 1.1;`;
export const h42: HeadingCSSRule<42> = `font-size: 42px; line-height: 1.1;`;

// https://developer.mozilla.org/en-US/docs/Web/CSS/line-height

const typo = {
  bold,
  textCenter,
  h10,
  h12,
  h14,
  h16,
  h18,
  h22,
  h32,
  h42,
};

export default typo;
