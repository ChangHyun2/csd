import { CSSRule } from "../types/CSSRules";

export const flex: CSSRule = `
    display:flex;
    flex-wrap:wrap;
`;

export const row: CSSRule = `
    ${flex}
    align-items:center;
`;
export const rowCenter: CSSRule = `
    ${row}
    justify-content:center;
`;

export const rowSpaceBetween: CSSRule = `
    ${row}
    justify-content:space-between;
`;

export const rowEnd: CSSRule = `
    ${row}
    justify-content: flex-end;
`;

export const col: CSSRule = `
    ${flex}
    flex-direction:column;
    flex-wrap:nowrap;
`;
export const colCenter: CSSRule = `
    ${col}
    justify-content:center;
    align-items:center;
`;
export const colSpaceBetween: CSSRule = `
    ${col}
    justify-content:center;
    align-items:space-between;
`;

export const colEnd: CSSRule = `
    ${col}
    justify-content: flex-end;
`;

export const relative: CSSRule = `
    position:relative;
`;

// export const grid = ({ row, col, gap }) => `
//     --column-count: ${col};
//     grid-template-rows: repeat(${row}, auto);
//     grid-gap: ${gap};
//     grid-auto-flow: column;
// `;

const alignChild = {
  flex,
  row,
  rowCenter,
  rowSpaceBetween,
  rowEnd,
  col,
  colCenter,
  colSpaceBetween,
  colEnd,
  relative,
};

export default alignChild;
