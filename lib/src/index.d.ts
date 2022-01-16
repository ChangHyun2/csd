import * as values from "./values";
export declare const s: {
    alignChild: {
        flex: string;
        row: string;
        rowCenter: string;
        rowSpaceBetween: string;
        rowEnd: string;
        col: string;
        colCenter: string;
        colSpaceBetween: string;
        colEnd: string;
        relative: string;
    };
    alignSelf: {
        fluid: string;
        noGrow: string;
        grid: string;
        grid1: string;
        grid2: string;
        grid3: string;
        grid4: string;
        grid5: string;
        grid6: string;
        grid7: string;
        grid8: string;
        grid9: string;
        grid10: string;
        grid11: string;
        grid12: string;
        absolute: string;
        mb1: string;
        mb2: string;
        mb3: string;
        mb4: string;
        mb5: string;
        mb6: string;
        mb7: string;
        mb8: string;
    };
    baseComponent: {
        baseButton: string;
        baseContainer: (options?: {
            align?: import("./types/CSSRules").AlignChildOption;
        } & {
            xs?: boolean;
            sm?: boolean;
            md?: boolean;
            lg?: boolean;
        }) => string;
        baseSection: (mb?: import("./types/CSSRules").MarginBottomOption) => string;
    };
    mediaQuery: {
        xsOnly: import("./types/CSSRules").CSSRuleCreator;
        over: {
            xs: import("./types/CSSRules").CSSRuleCreator;
            sm: import("./types/CSSRules").CSSRuleCreator;
            md: import("./types/CSSRules").CSSRuleCreator;
            lg: import("./types/CSSRules").CSSRuleCreator;
        };
        under: {
            sm: import("./types/CSSRules").CSSRuleCreator;
            md: import("./types/CSSRules").CSSRuleCreator;
            lg: import("./types/CSSRules").CSSRuleCreator;
            xl: import("./types/CSSRules").CSSRuleCreator;
        };
        smTo: {
            md: import("./types/CSSRules").CSSRuleCreator;
            lg: import("./types/CSSRules").CSSRuleCreator;
            xl: import("./types/CSSRules").CSSRuleCreator;
        };
        mdTo: {
            lg: import("./types/CSSRules").CSSRuleCreator;
            xl: import("./types/CSSRules").CSSRuleCreator;
        };
    };
    pad: {
        xs: "24px";
        sm: "40px";
        md: "60px";
        lg: "80px";
        xl: "80px";
    };
    round: {
        xs: "4px";
        sm: "8px";
        md: "12px";
        lg: "20px";
        xl: "32px";
    };
    spacing: {
        4: "4px";
        8: "8px";
        10: "10px";
        12: "12px";
        16: "16px";
        20: "20px";
        24: "24px";
        28: "28px";
        30: "30px";
        32: "32px";
        40: "40px";
        50: "50px";
        60: "60px";
        70: "70px";
        80: "80px";
    };
    zIndex: {
        dropdown: "z-index: 1000;";
        sticky: "z-index: 1020;";
        fixed: "z-index: 1030;";
        backdrop: "z-index: 1040;";
        modal: "z-index: 1050;";
        popover: "z-index: 1060;";
        tooltip: "z-index: 1070;";
    };
    typo: {
        bold: string;
        textCenter: string;
        h10: "font-size: 10px; line-height: 1.2;";
        h12: "font-size: 12px; line-height: 1.3;";
        h14: "font-size: 14px; line-height: 1.4;";
        h16: "font-size: 16px; line-height: 1.3;";
        h18: "font-size: 18px; line-height: 1.3;";
        h22: "font-size: 22px; line-height: 1.2;";
        h32: "font-size: 32px; line-height: 1.1;";
        h42: "font-size: 42px; line-height: 1.1;";
    };
    values: typeof values;
    colors: import("./colors/types").Colors;
    bold: string;
    textCenter: string;
    h10: "font-size: 10px; line-height: 1.2;";
    h12: "font-size: 12px; line-height: 1.3;";
    h14: "font-size: 14px; line-height: 1.4;";
    h16: "font-size: 16px; line-height: 1.3;";
    h18: "font-size: 18px; line-height: 1.3;";
    h22: "font-size: 22px; line-height: 1.2;";
    h32: "font-size: 32px; line-height: 1.1;";
    h42: "font-size: 42px; line-height: 1.1;";
    dropdown: "z-index: 1000;";
    sticky: "z-index: 1020;";
    fixed: "z-index: 1030;";
    backdrop: "z-index: 1040;";
    modal: "z-index: 1050;";
    popover: "z-index: 1060;";
    tooltip: "z-index: 1070;";
    xsOnly: import("./types/CSSRules").CSSRuleCreator;
    over: {
        xs: import("./types/CSSRules").CSSRuleCreator;
        sm: import("./types/CSSRules").CSSRuleCreator;
        md: import("./types/CSSRules").CSSRuleCreator;
        lg: import("./types/CSSRules").CSSRuleCreator;
    };
    under: {
        sm: import("./types/CSSRules").CSSRuleCreator;
        md: import("./types/CSSRules").CSSRuleCreator;
        lg: import("./types/CSSRules").CSSRuleCreator;
        xl: import("./types/CSSRules").CSSRuleCreator;
    };
    smTo: {
        md: import("./types/CSSRules").CSSRuleCreator;
        lg: import("./types/CSSRules").CSSRuleCreator;
        xl: import("./types/CSSRules").CSSRuleCreator;
    };
    mdTo: {
        lg: import("./types/CSSRules").CSSRuleCreator;
        xl: import("./types/CSSRules").CSSRuleCreator;
    };
    baseButton: string;
    baseContainer: (options?: {
        align?: import("./types/CSSRules").AlignChildOption;
    } & {
        xs?: boolean;
        sm?: boolean;
        md?: boolean;
        lg?: boolean;
    }) => string;
    baseSection: (mb?: import("./types/CSSRules").MarginBottomOption) => string;
    fluid: string;
    noGrow: string;
    grid: string;
    grid1: string;
    grid2: string;
    grid3: string;
    grid4: string;
    grid5: string;
    grid6: string;
    grid7: string;
    grid8: string;
    grid9: string;
    grid10: string;
    grid11: string;
    grid12: string;
    absolute: string;
    mb1: string;
    mb2: string;
    mb3: string;
    mb4: string;
    mb5: string;
    mb6: string;
    mb7: string;
    mb8: string;
    flex: string;
    row: string;
    rowCenter: string;
    rowSpaceBetween: string;
    rowEnd: string;
    col: string;
    colCenter: string;
    colSpaceBetween: string;
    colEnd: string;
    relative: string;
};
export default s;
