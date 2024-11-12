import { css, html } from "@rasch/reno"

export const profile = () => html`
<div class="profile card">
  <canvas class="dicecube">
    <img src="profile.webp" alt="me dressed as a mouse for Halloween">
  </canvas>
</div>`

export const profileCSS = () => css`
.profile {
  flex-shrink: 0;
}

.profile canvas {
  width: 300px;
}`
