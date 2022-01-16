import { PixelCSSRule } from "@/types/CSSRules";
import { Spacing } from "@/types/system";
declare const spacing: {
    [S in Spacing]: PixelCSSRule<S>;
};
export default spacing;
