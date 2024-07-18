import { css, html } from "@rasch/reno"
import { icon } from "./icon.js"
import { g } from "./g.js"

const icons = {
  note: "edit-2",
  abstract: "edit",
  example: "file-text",
  success: "check-circle",
  info: "info",
  tip: "coffee",
  question: "help-circle",
  warning: "alert-triangle",
  bug: "frown",
  failure: "minus-circle",
  danger: "zap",
}

/**
 * @param {{ title: string, body: string, style: keyof icons }} data
 */
export const admonition = ({ title, body, style = "note" }) => html`
<aside class="admonition ${style}" style="--icon-size:1.4rem">
  ${icon(icons[style])}
  <dl>
    <dt><p>${title}</p></dt>
    <dd>${body}</dd>
  </dl>
</aside>`

export const admonitionCSS = () => css`
.content .admonition {
  display: flex;
  gap: 0.5rem;
  padding: ${g / 2}rem;
  margin: ${g / 2}rem;
  border-radius: 0.5rem;
  color: var(--color, var(--fg));
  opacity: 0.8;
  box-shadow:
    0 2px 0 0 currentColor,
    0 -2px 0 0 currentColor,
    2px 0 0 0 currentColor,
    -2px 0 0 0 currentColor;
}

#toggle-dark-mode:checked ~ .theme-wrapper .content .admonition {
  color: var(--black);
  background-color: var(--color, var(--fg));
  box-shadow: none;
  tranition: 512ms ease-in-out;
}

.content .admonition > dl {
  display: unset;
}

.content .admonition > dl > dt {
  margin: 0;
  padding: 0;
  font-weight: bold;
  text-align: unset;
  box-shadow: unset;
}

.content .admonition > dl > dd {
  display: grid;
  grid-row-gap: ${g}rem;
  margin: 0;
  padding: 0;
  box-shadow: none;
}

.admonition.note,
.admonition.abstract,
.admonition.example,
.admonition.info,
.admonition.tip,
.admonition.question {
  --color: var(--blue);
}

.admonition.success {
  --color: var(--green);
}

.admonition.warning,
.admonition.bug {
  --color: var(--yellow);
}

.admonition.failure,
.admonition.danger {
  --color: var(--red);
}`
