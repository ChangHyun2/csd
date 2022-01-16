import { PixelCSSRule } from "@/types/CSSRules";
import { Spacing } from "@/types/system";

const spacing: {
  [S in Spacing]: PixelCSSRule<S>;
} = {
  4: "4px",
  8: "8px",
  10: "10px",
  12: "12px",
  16: "16px",
  20: "20px",
  24: "24px",
  28: "28px",
  30: "30px",
  32: "32px",
  40: "40px",
  50: "50px",
  60: "60px",
  70: "70px",
  80: "80px",
};

export default spacing;
