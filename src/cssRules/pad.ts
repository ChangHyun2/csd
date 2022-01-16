import { PixelCSSRule } from "@/types/CSSRules";
import { ContainerPadding, Size } from "@/types/system";

const pad: {
  [S in Size]: PixelCSSRule<ContainerPadding[S]>;
} = {
  xs: "24px",
  sm: "40px",
  md: "60px",
  lg: "80px",
  xl: "80px",
};

export default pad;
