export const flex = `
    display:flex;
    flex-wrap:wrap;
`;

// flex로 children을 정렬할 때
// align-items: center을 적용하는 경우가 대부분이라 판단
export const row = `
    ${flex}
    align-items:center;
`;
export const rowCenter = `
    ${row}
    justify-content:center;
`;

export const rowSpaceBetween = `
    ${row}
    justify-content:space-between;
`;

export const rowEnd = `
    ${row}
    justify-content: flex-end;
`;

export const col = `
    ${flex}
    flex-direction:column;
    flex-wrap:nowrap;
`;
export const colCenter = `
    ${col}
    justify-content:center;
    align-items:center;
`;
export const colSpaceBetween = `
    ${col}
    justify-content:center;
    align-items:space-between;
`;

export const colEnd = `
    ${col}
    justify-content: flex-end;
`;

export const relative = `
    position:relative;
`;

// export const grid = ({ row, col, gap }) => `
//     --column-count: ${col};
//     grid-template-rows: repeat(${row}, auto);
//     grid-gap: ${gap};
//     grid-auto-flow: column;
// `;
