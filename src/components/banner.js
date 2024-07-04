import { css, html } from "@rasch/reno"
import { navigation } from "./navigation.js"
import { toggleDarkModeButton } from "./toggle-dark-mode.js"
import { title } from "./title.js"

export const banner = () => html`
<header class="banner texture">
  <div class="wrapper">
    <div class="controls">
      ${navigation()}
      ${toggleDarkModeButton()}
    </div>
    ${title()}
  </div>
</header>`

export const bannerCSS = () => css`
.banner {
  display: flex;
  flex-grow: 1;
}

.banner .wrapper {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
  padding: 1rem;
}

.banner .controls {
  display: flex;
  justify-content: space-between;
  align-items: start;
  width: 100%;
}`
