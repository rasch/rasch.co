import { css, html } from "@rasch/reno"

/**
 * @param {string} title
 * @param {string} [label]
 */
export const icon = (title, label) => html`
<svg
  role="img"
  class="icon ${title}-icon"
  ${label ? `aria-label="${label}"` : `aria-hidden="true"`}
>
  <use href="/icons.svg#${title}-icon"></use>
</svg>`

export const iconCSS = () => css`
.icon {
  width: var(--icon-size, 1.2rem);
  height: var(--icon-size, 1.2rem);
  flex-shrink: 0;

  fill: currentColor;
  stroke: currentColor;
}`
