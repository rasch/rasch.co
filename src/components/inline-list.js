import { css, html } from "@rasch/reno"

/**
 * @param {any[]} items
 */
export const inlineList = (...items) => html`
<ul class="inline-list">
  ${items.map(item => `<li>${item}</li>`).join("")}
</ul>`

export const inlineListCSS = () => css`
.content ul.inline-list,
.content ul.inline-list li {
  display: inline;
  margin-left: 0;
  list-style-type: none;
}

.content ul.inline-list li:not(:last-child)::after {
  content: ", ";
}`
