import { PAD } from '../values';
import { over } from './mediaQuery';
import * as alignChild from './alignChild';
import * as alignSelf from './alignSelf';

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
export const baseContainer = (options = {}) => {
  const { align, xs = true, sm = true, md = true, lg = true } = options;
  const dynamicStyles = [];

  if (align) {
    dynamicStyles.push(alignChild[align]);
  }

  Object.entries({ xs, sm, md, lg }).forEach(
    ([bp, isBp]) =>
      isBp &&
      dynamicStyles.push(
        over[bp](`
            padding-right: ${PAD[bp]}px;
            padding-left: ${PAD[bp]}px;
          `)
      )
  );

  return `
    width: 100%;
    margin-right: auto;
    margin-left: auto;
    ${dynamicStyles.join('')}
  `;
};

// baseContainer => baseSection
export const baseSection = (mb = 'mb3') => `
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
// // box-shadow에 rgba를 적용할 경우 오버랩됐을 떄 색상이 눈에 띄지 않는다.

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
