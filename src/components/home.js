import { css, html } from "@rasch/reno"
import { banner } from "./banner.js"
import { writing } from "./writing.js"

/**
 * @param {import("@rasch/reno").Post[]} posts
 */
export const home = posts => html`
<div id="home" class="home page">
  ${banner()}
  ${writing(posts)}
</div>`

export const homeCSS = () => css`
.home {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}`
