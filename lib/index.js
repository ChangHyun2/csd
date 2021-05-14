!(function (n, e) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = e())
    : 'function' == typeof define && define.amd
    ? define([], e)
    : 'object' == typeof exports
    ? (exports.cssds = e())
    : (n.cssds = e());
})(this, function () {
  return (() => {
    'use strict';
    var n = {
        d: (e, t) => {
          for (var i in t)
            n.o(t, i) &&
              !n.o(e, i) &&
              Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
        },
        o: (n, e) => Object.prototype.hasOwnProperty.call(n, e),
        r: (n) => {
          'undefined' != typeof Symbol &&
            Symbol.toStringTag &&
            Object.defineProperty(n, Symbol.toStringTag, { value: 'Module' }),
            Object.defineProperty(n, '__esModule', { value: !0 });
        },
      },
      e = {};
    n.d(e, { default: () => yn });
    var t = {};
    n.r(t),
      n.d(t, {
        col: () => $,
        colCenter: () => g,
        colEnd: () => f,
        colSpaceBetween: () => h,
        flex: () => a,
        relative: () => u,
        row: () => x,
        rowCenter: () => p,
        rowEnd: () => c,
        rowSpaceBetween: () => m,
      });
    var i = {};
    n.r(i),
      n.d(i, {
        BREAKPOINT: () => v,
        H: () => j,
        LINEHEIGHT: () => k,
        PAD: () => w,
        ROUND: () => y,
        SPACING: () => b,
        ZINDEX: () => z,
      });
    var o = {};
    n.r(o),
      n.d(o, {
        absolute: () => _,
        fluid: () => S,
        grid: () => C,
        grid1: () => P,
        grid10: () => L,
        grid11: () => M,
        grid12: () => R,
        grid2: () => I,
        grid3: () => T,
        grid4: () => N,
        grid5: () => B,
        grid6: () => A,
        grid7: () => D,
        grid8: () => G,
        grid9: () => H,
        mb1: () => K,
        mb2: () => Q,
        mb3: () => U,
        mb4: () => X,
        mb5: () => Z,
        mb6: () => q,
        mb7: () => F,
        mb8: () => J,
        noGrow: () => E,
      });
    var d = {};
    n.r(d),
      n.d(d, {
        mdTo: () => tn,
        over: () => Y,
        smTo: () => en,
        under: () => nn,
        xsOnly: () => W,
      });
    var r = {};
    n.r(r),
      n.d(r, {
        baseButton: () => on,
        baseContainer: () => rn,
        baseLink: () => dn,
        baseSection: () => ln,
      });
    var l = {};
    n.r(l),
      n.d(l, {
        bold: () => xn,
        h10: () => mn,
        h12: () => cn,
        h14: () => $n,
        h16: () => gn,
        h18: () => hn,
        h22: () => fn,
        h32: () => un,
        h42: () => bn,
        textCenter: () => pn,
      });
    var s = {};
    n.r(s),
      n.d(s, {
        alignChild: () => t,
        alignSelf: () => o,
        baseComponent: () => r,
        mediaQuery: () => d,
        pad: () => sn,
        round: () => an,
        spacing: () => O,
        typo: () => l,
        zIndex: () => wn,
      });
    const a = '\n    display:flex;\n    flex-wrap:wrap;\n',
      x = `\n    ${a}\n    align-items:center;\n`,
      p = `\n    ${x}\n    justify-content:center;\n`,
      m = `\n    ${x}\n    justify-content:space-between;\n`,
      c = `\n    ${x}\n    justify-content: flex-end;\n`,
      $ = `\n    ${a}\n    flex-direction:column;\n    flex-wrap:nowrap;\n`,
      g = `\n    ${$}\n    justify-content:center;\n    align-items:center;\n`,
      h = `\n    ${$}\n    justify-content:center;\n    align-items:space-between;\n`,
      f = `\n    ${$}\n    justify-content: flex-end;\n`,
      u = '\n    position:relative;\n',
      b = {
        4: 4,
        8: 8,
        10: 10,
        16: 16,
        20: 20,
        24: 24,
        30: 30,
        40: 40,
        50: 50,
        60: 60,
        70: 70,
        80: 80,
      },
      w = { xs: b[24], sm: b[40], md: b[60], lg: b[80], xl: b[80] },
      y = { xs: 4, sm: 8, md: 12, lg: 20, xl: 32 },
      v = { xs: 0, sm: 576, md: 768, lg: 1024, xl: 1200 },
      z = {
        dropdown: 1e3,
        sticky: 1020,
        fixed: 1030,
        backdrop: 1040,
        modal: 1050,
        popover: 1060,
        tooltip: 1070,
      },
      j = { 10: 10, 12: 12, 14: 14, 16: 16, 18: 18, 22: 22, 32: 32, 42: 42 },
      k = {
        10: 1.2,
        12: 1.3,
        14: 1.4,
        16: 1.3,
        18: 1.3,
        22: 1.2,
        32: 1.1,
        42: 1.1,
      },
      O = {
        4: b[4] + 'px',
        8: b[8] + 'px',
        16: b[16] + 'px',
        24: b[24] + 'px',
        40: b[40] + 'px',
        10: b[10] + 'px',
        20: b[20] + 'px',
        30: b[30] + 'px',
        50: b[50] + 'px',
        60: b[60] + 'px',
        70: b[70] + 'px',
      },
      S = 'width: 100%;',
      C = 'flex: 1 0 auto;',
      E = 'flex: 0 0 auto;',
      P = `\n  ${E}\n  width: 8.3333333333%;\n`,
      I = `\n  ${E}\n  width: 16.6666666667%;\n`,
      T = `\n  ${E}\n  width: 25%;\n`,
      N = `\n  ${E}\n  width: 33.3333333333%;\n`,
      B = `\n  ${E}\n  width: 41.6666666667%;\n`,
      A = `\n  ${E}\n  width: 50%;\n`,
      D = `\n  ${E}\n  width: 58.3333333333%;\n`,
      G = `\n  ${E}\n  width: 66.6666666667%;\n`,
      H = `\n  ${E}\n  width: 75%;\n`,
      L = `\n  ${E}\n  width: 83.3333333333%;\n`,
      M = `\n  ${E}\n  width: 91.6666666667%;\n`,
      R = `\n  ${E}\n  width: 100%;\n`,
      _ = '\n  position:absolute;\n  top: 0;\n  left: 0;\n',
      K = `margin-bottom: ${O[10]};`,
      Q = `margin-bottom: ${O[20]};`,
      U = `margin-bottom: ${O[30]};`,
      X = `margin-bottom: ${O[40]};`,
      Z = `margin-bottom: ${O[50]};`,
      q = `margin-bottom: ${O[60]};`,
      F = `margin-bottom: ${O[70]};`,
      J = `margin-bottom: ${O[80]};`,
      V = Object.values(v),
      W = (n) => `@media only screen and (max-width: ${V[1] - 1}px){${n}}`,
      Y = ['xs', 'sm', 'md', 'lg', 'xl'].reduce(
        (n, e, t) => ({
          ...n,
          [e]: (n) => `@media only screen and (min-width:${V[t]}px){${n}}`,
        }),
        {}
      ),
      nn = ['sm', 'md', 'lg', 'xl'].reduce(
        (n, e, t) => ({
          ...n,
          [e]: (n) =>
            `@media only screen and (max-width:${V[t + 1] - 1}px){${n}}`,
        }),
        {}
      ),
      en = ['md', 'lg', 'xl'].reduce(
        (n, e, t) => ({
          ...n,
          [e]: (n) =>
            `@media only screen and (min-width:${V[1]}px) and (max-width:${
              V[t + 1]
            }px){${n}}`,
        }),
        {}
      ),
      tn = ['lg', 'xl'].reduce(
        (n, e, t) => ({
          ...n,
          [e]: (n) =>
            `@media only screen and (min-width:${V[2]}px) and (max-width:${
              V[t + 3]
            }px){${n}}`,
        }),
        {}
      ),
      on =
        '\n  display: inline-block;\n  text-decoration: none;\n  user-select: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  outline: none;\n  cursor: pointer;\n  background: none;\n  font-size: inherit;\n',
      dn =
        '\n  display:inline-block;\n  text-decoration:none;\n  color:inherit;\n  :visited,:link{\n    color:inherit;\n  }\n',
      rn = (n = {}) => {
        const { align: e, xs: i = !0, sm: o = !0, md: d = !0, lg: r = !0 } = n,
          l = [];
        return (
          e && l.push(t[e]),
          Object.entries({ xs: i, sm: o, md: d, lg: r }).forEach(
            ([n, e]) =>
              e &&
              l.push(
                Y[n](
                  `\n            padding-right: ${w[n]}px;\n            padding-left: ${w[n]}px;\n          `
                )
              )
          ),
          `\n    width: 100%;\n    margin-right: auto;\n    margin-left: auto;\n    ${l.join(
            ''
          )}\n  `
        );
      },
      ln = (n = 'mb3') => `\n  ${rn()}\n  ${o[n]}  \n`,
      sn = {
        xs: w.xs + 'px',
        sm: w.sm + 'px',
        md: w.md + 'px',
        lg: w.lg + 'px',
        xl: w.xl + 'px',
      },
      an = {
        xs: `${y.xs}px;`,
        sm: `${y.sm}px;`,
        md: `${y.md}px;`,
        lg: `${y.lg}px;`,
        xl: `${y.xl}px;`,
      },
      xn = 'font-weight: bold;',
      pn = 'text-align:center;',
      mn = `font-size: 10px; line-height: ${k[10]};`,
      cn = `font-size: 12px; line-height: ${k[12]};`,
      $n = `font-size: 14px; line-height: ${k[14]};`,
      gn = `font-size: 16px; line-height: ${k[16]};`,
      hn = `font-size: 18px; line-height: ${k[18]};`,
      fn = `font-size: 22px; line-height: ${k[22]};`,
      un = `font-size: 32px; line-height: ${k[32]};`,
      bn = `font-size: 42px; line-height: ${k[42]};`,
      wn = {
        backdrop: `z-index: ${z.backdrop};`,
        dropdown: `z-index: ${z.dropdown};`,
        fixed: `z-index: ${z.fixed};`,
        modal: `z-index: ${z.modal};`,
        popover: `z-index: ${z.popover};`,
        sticky: `z-index: ${z.sticky};`,
        tooltip: `z-index: ${z.tooltip};`,
      },
      yn = { ...s, ...i };
    return e.default;
  })();
});
