import { css } from "@rasch/reno"

export const customPropertiesCSS = () => css`
:where(html) {
  --system-sans: -apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif;
  --system-serif: Iowan Old Style, Apple Garamond, Baskerville, Times New Roman, Droid Serif, Times, Source Serif Pro, serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
  --system-mono: Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace;

  --sans: "Montserrat", var(--system-sans);
  --serif: var(--system-serif);
  --mono: var(--system-mono);

  --white: hsl(120 25% 95%);
  --white-opaque: hsl(120 25% 95% / 13%);
  --bright-white: hsl(120 25% 98%);
  --black: hsl(180 1% 13%);
  --black-opaque: hsl(180 1% 13% / 67%);
  --black-sheer: hsl(180 1% 13% / 17%);
  --dark-black-opaque: hsl(180 1% 9% / 77%);

  --fg: var(--white);
  --bg: var(--black);
  --texture: var(--white-opaque);

  --fg-light: var(--black);
  --bg-light: var(--white);
  --texture-light: var(--black-sheer);

  --green: hsl(200, 70%, 76%);
  --blue: hsl(219, 64%, 74%);
  --red: hsl(346 62% 76%);
  --dark-red: hsl(346 62% 66%);
  --yellow: hsl(23, 60%, 87%);

  --elastic: cubic-bezier(0.5, 1.25, 0.75, 1.25);

  --gradient: linear-gradient(
    135deg,
    hsl(34deg 100% 82%) 0%,
    hsl(23deg 100% 81%) 11%,
    hsl(11deg 100% 82%) 22%,
    hsl(340deg 47% 72%) 33%,
    hsl(269deg 17% 57%) 44%,
    hsl(206deg 27% 50%) 55%,
    hsl(177deg 27% 51%) 66%,
    hsl(118deg 21% 66%) 77%,
    hsl(89deg 29% 73%) 88%,
    hsl(66deg 41% 81%) 100%
  );
}`
