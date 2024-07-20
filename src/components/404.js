import { html } from "@rasch/reno"
import { head } from "./head.js"
import { toggleDarkMode } from "./toggle-dark-mode.js"
import { navigationMini } from "./navigation-mini.js"

const contentWrapperStyle = `
position: absolute;
inset: 0;
display: grid;
place-items: center;
text-align: center;
`.replace(/\n/g, "")

const headerStyle = `
background: url(i/1200/vail.jpg) no-repeat;
background-position: top 33% left 33%;
background-clip: text;
-webkit-background-clip: text;
-webkit-text-stroke: 1px var(--fg);
color: transparent;
font-size: calc(9rem + 13vw);
font-family: var(--serif);
font-weight: bold;
line-height: 1.2;
`.replace(/\n/g, "")

/**
 * @param {import("./data.js").SiteData} data
 */
export const pageNotFound = data => html`<!doctype html>
<html>
${head({ ...data, title: `${data.title} - page not found`, path: "404.html" })}
<body>
  ${toggleDarkMode()}
  <div class="theme-wrapper page" style="position: relative;">
    <div style="position: relative; z-index: 1;">
      ${navigationMini()}
    </div>
    <div style="${contentWrapperStyle}">
      <div>
        <h1 style="${headerStyle}">404</h1>
        <p style="font-size: calc(1.2rem + 1vw);">
          page not found
        </p>
      </div>
    </div>
  </div>
</body>
</html>`
