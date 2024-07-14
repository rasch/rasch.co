import { html } from "@rasch/reno"
import { toggleDarkMode } from "./toggle-dark-mode.js"
import { home } from "./home.js"
import { projects } from "./projects.js"
import { photos } from "./photos.js"
import { whoami } from "./whoami.js"

/**
 * @param {import("./data.js").SiteData} data
 */
export const body = data => html`
<body class="no-js">
  <script>
    document.querySelector("body").classList.remove("no-js")
  </script>
  ${toggleDarkMode()}
  <div class="theme-wrapper">
    ${home(data.posts)}
    ${projects(data.projects)}
    ${photos()}
    ${whoami()}
  </div>
</body>`
