import { html } from "@rasch/reno"
import { head } from "./head.js"
import { toggleDarkMode } from "./toggle-dark-mode.js"
import { navigationMini } from "./navigation-mini.js"
import { giscus } from "./giscus.js"
import { syntaxHighlight } from "./syntax-highlight.js"

/**
 * @param {import("@rasch/reno").Post} post
 */
export const template = post => html`<!doctype html>
<html class="font-scale">
${head(post)}
<body class="no-js">
  <script>
    document.querySelector("body").classList.remove("no-js")
  </script>
  ${toggleDarkMode()}
  <div class="theme-wrapper page">
    ${navigationMini()}
    <article class="content">
      <h1>${post.title || post.path || post._path}</h1>
      ${post.content}
      <p class="post-date">
        <time datetime="${new Date(post.date || post._stat.mtimeMs)?.toISOString()}">
          ${new Date(post.date || post._stat.mtimeMs)?.toDateString()}
        </time>
      </p>
    </article>
    ${post.comments ? giscus() : ""}
  </div>
  ${post.syntaxHighlight === false ? "" : syntaxHighlight()}
</body>
</html>`
