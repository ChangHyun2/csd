import { PixelCSSRule } from "@/types/CSSRules";
import { Size, Round } from "@/types/system";

const round: {
  [S in Size]: PixelCSSRule<Round[S]>;
} = {
  xs: "4px",
  sm: "8px",
  md: "12px",
  lg: "20px",
  xl: "32px",
};

export default round;
