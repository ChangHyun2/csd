import { PixelCSSRule } from "@/types/CSSRules";
import { Size, Round } from "@/types/system";
declare const round: {
    [S in Size]: PixelCSSRule<Round[S]>;
};
export default round;
