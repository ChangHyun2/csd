import { AlignChild } from "../types/CSSRules";
import { Size } from "@/types/system";
import { MarginBottomOption } from "@/types/CSSRules";
export declare const baseButton = "\n  display: inline-block;\n  text-decoration: none;\n  user-select: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  outline: none;\n  cursor: pointer;\n  background: none;\n  font-size: inherit;\n";
export declare const baseContainer: (options?: {
    align?: keyof AlignChild;
} & {
    xs?: boolean;
    sm?: boolean;
    md?: boolean;
    lg?: boolean;
}) => string;
export declare const baseSection: (mb?: MarginBottomOption) => string;
declare const baseComponent: {
    baseButton: string;
    baseContainer: (options?: {
        align?: keyof AlignChild;
    } & {
        xs?: boolean;
        sm?: boolean;
        md?: boolean;
        lg?: boolean;
    }) => string;
    baseSection: (mb?: MarginBottomOption) => string;
};
export default baseComponent;
