import { css, html } from "@rasch/reno"
import { icon } from "./icon.js"

/**
 * @param {"simple" | "dots" | "fancy"} [style]
 */
export const logo = style => html`
<a class="logo${style ? ` ${style}` : ""}" href="/">
  ${icon("logo", "home")}
</a>`

export const logoCSS = () => css`
.logo {
  display: inline-block;
  width: 128px;
  height: 128px;
  padding: 0.5rem;
  color: currentColor;
}

.logo svg {
  width: 100%;
  height: 100%;
  padding: 0.5rem;
  fill: currentColor;
  transition: fill 512ms ease-in-out;
}

.logo.simple {
  border: solid 1px;
}

.logo.dots {
  background-image: radial-gradient(currentColor 1px, transparent 1px);
  background-size: 10px 10px;
}

.logo.fancy {
  border: solid 1rem transparent;
  outline: solid 1px var(--fg);
  outline-offset: -0.5rem;
  background: conic-gradient(from 90deg at 1px 1px,transparent 25%,var(--fg) 0);
}`
