import { html, css } from "@rasch/reno"
import { logo } from "./logo.js"
import { icon } from "./icon.js"
import { toggleDarkModeButton } from "./toggle-dark-mode.js"
import { g } from "./g.js"

export const navigationMini = () => html`
<nav class="navigation-mini">
  ${logo()}
  <div class="right">
    <a href="/writing" title="see all posts">
      ${icon("list")}
    </a>
    ${toggleDarkModeButton()}
  </div>
</nav>`

export const navigationMiniCSS = () => css`
nav.navigation-mini {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  height: ${g * 2}rem;
  padding: 0.25rem 0.5rem;
  color: var(--fg);
  background-color: var(--bg);
  transition: 512ms ease-in-out;
}

nav.navigation-mini .logo {
  width: 3rem;
  height: 3rem;
  padding: 0;
}

nav.navigation-mini .logo svg {
  padding: 0.25rem;
  margin: 0;
}

nav.navigation-mini .right {
  display: flex;
  align-items: center;
  gap: 1rem;
}

/* need to be very specific to override */
#toggle-dark-mode ~ .theme-wrapper nav.navigation-mini .toggle-theme > svg {
  width: 1.5rem;
  height: 1.5rem;
}

nav.navigation-mini a,
nav.navigation-mini a:visited,
nav.navigation-mini a:hover {
  color: inherit;
  text-decoration: none;
}`
