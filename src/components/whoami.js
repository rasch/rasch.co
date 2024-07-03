import { css, html } from "@rasch/reno"
import { profile } from "./profile.js"
import { about } from "./about.js"
import { contact } from "./contact.js"

export const whoami = () => html`
<div id="whoami" class="page">
  <h2 class="texture">$ whoami</h2>
  <div class="whoami">
    ${profile()}
    ${about()}
    ${contact()}
  </div>
</div>`

export const whoamiCSS = () => css`
.whoami {
  display: flex;
  flex-wrap: wrap;
  align-items: start;
  justify-content: center;
  gap: 3rem;
}`
