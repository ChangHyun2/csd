import { PixelCSSRule } from "@/types/CSSRules";
import { ContainerPadding, Size } from "@/types/system";
declare const pad: {
    [S in Size]: PixelCSSRule<ContainerPadding[S]>;
};
export default pad;
