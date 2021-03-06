import { PAD } from "../values";
import { over } from "./mediaQuery";
import * as alignChild from "./alignChild";
import * as alignSelf from "./alignSelf";
import { AlignChild } from "../types/CSSRules";
import { Size } from "@/types/system";
import { MarginBottomOption } from "@/types/CSSRules";

export const baseButton = `
  display: inline-block;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  outline: none;
  cursor: pointer;
  background: none;
  font-size: inherit;
`;

// export const baseLink = `
//   display:inline-block;
//   text-decoration:none;
//   color:inherit;
//   :visited,:link{
//     color:inherit;
//   }
// `;

// baseContainer
export const baseContainer = (
  options: {
    align?: keyof AlignChild;
  } & {
    [S in Exclude<Size, "xl">]?: boolean;
  } = {}
) => {
  const { align, xs = true, sm = true, md = true, lg = true } = options;

  let dynamicStyles = ``;

  if (align) {
    dynamicStyles += alignChild[align];
  }

  Object.entries({
    xs,
    sm,
    md,
    lg,
  }).forEach((entry: [Exclude<Size, "xl">, boolean]) => {
    const [bp, isBp] = entry;

    if (isBp) {
      dynamicStyles +=
        bp === "xs"
          ? `
              padding-right: ${PAD.xs}px;
              padding-left: ${PAD.xs}px;
            `
          : over[bp](`
              padding-right: ${PAD[bp]}px;
              padding-left: ${PAD[bp]}px;
            `);
    }
  });

  return `
    width: 100%;
    margin-right: auto;
    margin-left: auto;
    ${dynamicStyles}
  `;
};

// baseContainer => baseSection
export const baseSection = (mb: MarginBottomOption = "mb3") => `
  ${baseContainer()}
  ${alignSelf[mb]}
`;

// export const baseImageWrapper = `
//   img{
//     display:block;
//     width: 100%;
//     height: 100%;
//   }
// `;

// export const baseCard = (size = 'sm') => `
//   border-radius: ${round[size]};
//   background-color: ${pallete.white};
//   box-shadow: 0 0 20px rgba(0,0,0,0.2);
// `;
// // box-shadow??? rgba??? ????????? ?????? ??????????????? ??? ????????? ?????? ?????? ?????????.

// export const baseSnapScroller = ({
//   padding = PAD.xs + 'px',
//   offset = '100px',
//   row = 1,
//   col,
//   gap = SPACING[20] + 'px',
// }) => {
//   const styles = [
//     `
//       display: grid;
//       scroll-snap-type: x mandatory;
//       overflow-x: auto;
//       scroll-behavior: smooth;

//       & > * {
//         scroll-snap-align: start;
//       }
//     `,
//   ];

//   if (padding) {
//     styles.push(`
//       padding: 0 ${padding};
//       scroll-padding: 0 ${padding};
//     `);
//   }

//   if (col) {
//     styles.push(`
//       --column-count: ${col};
//       grid-template-rows: repeat(${row}, auto);
//       grid-template-columns: repeat(calc(var(--column-count) - 1), calc(100% - ${offset})) 100%;
//       grid-auto-flow: column;
//     `);
//   }

//   if (gap) {
//     styles.push(`
//       gap: ${gap};
//     `);
//   }

//   return styles.join('');
// };

const baseComponent = {
  baseButton,
  baseContainer,
  baseSection,
};

export default baseComponent;
