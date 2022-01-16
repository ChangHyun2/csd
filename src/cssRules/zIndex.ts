import { ZIndex } from "@/types/system";

type ZIndexCSSRule<N> = N extends keyof ZIndex
  ? `z-index: ${ZIndex[N]};`
  : never;

const zIndex: {
  [C in keyof ZIndex]: ZIndexCSSRule<C>;
} = {
  dropdown: "z-index: 1000;",
  sticky: "z-index: 1020;",
  fixed: "z-index: 1030;",
  backdrop: "z-index: 1040;",
  modal: "z-index: 1050;",
  popover: "z-index: 1060;",
  tooltip: "z-index: 1070;",
};

export default zIndex;
