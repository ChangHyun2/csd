import spacing from "./spacing";

import { CSSRule } from "@/types/CSSRules";

export const fluid: CSSRule = `width: 100%;`;

export const grid: CSSRule = `flex: 1 0 auto;`;

export const noGrow: CSSRule = `flex: 0 0 auto;`;

export const grid1: CSSRule = `
  ${noGrow}
  width: 8.3333333333%;
`;
export const grid2: CSSRule = `
  ${noGrow}
  width: 16.6666666667%;
`;
export const grid3: CSSRule = `
  ${noGrow}
  width: 25%;
`;
export const grid4: CSSRule = `
  ${noGrow}
  width: 33.3333333333%;
`;
export const grid5: CSSRule = `
  ${noGrow}
  width: 41.6666666667%;
`;
export const grid6: CSSRule = `
  ${noGrow}
  width: 50%;
`;
export const grid7: CSSRule = `
  ${noGrow}
  width: 58.3333333333%;
`;
export const grid8: CSSRule = `
  ${noGrow}
  width: 66.6666666667%;
`;
export const grid9: CSSRule = `
  ${noGrow}
  width: 75%;
`;
export const grid10: CSSRule = `
  ${noGrow}
  width: 83.3333333333%;
`;
export const grid11: CSSRule = `
  ${noGrow}
  width: 91.6666666667%;
`;
export const grid12: CSSRule = `
  ${noGrow}
  width: 100%;
`;

export const absolute: CSSRule = `
  position:absolute;
  top: 0;
  left: 0;
`;

export const mb1: CSSRule = `margin-bottom: ${spacing[10]};`;
export const mb2: CSSRule = `margin-bottom: ${spacing[20]};`;
export const mb3: CSSRule = `margin-bottom: ${spacing[30]};`;
export const mb4: CSSRule = `margin-bottom: ${spacing[40]};`;
export const mb5: CSSRule = `margin-bottom: ${spacing[50]};`;
export const mb6: CSSRule = `margin-bottom: ${spacing[60]};`;
export const mb7: CSSRule = `margin-bottom: ${spacing[70]};`;
export const mb8: CSSRule = `margin-bottom: ${spacing[80]};`;
