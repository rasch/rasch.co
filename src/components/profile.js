import { css, html } from "@rasch/reno"

export const profile = () => html`
<div class="profile card">
  <img class="dicecube" src="profile.webp" alt="me dressed as a mouse for Halloween">
</div>`

export const profileCSS = () => css`
.profile {
  flex-shrink: 0;
}

.profile img {
  width: 300px;
}`
