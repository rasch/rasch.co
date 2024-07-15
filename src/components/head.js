import { html } from "@rasch/reno"
import { openGraph } from "./open-graph.js"
import { favicon } from "./favicon.js"

/**
 * @param {import("./data.js").SiteData} data
 */
export const head = data => html`
<head>
  <meta charset="utf-8">
  <title>${data.title}</title>
  <meta name="description" content="${data.description}">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  ${openGraph(data)}
  ${favicon()}
  <link rel="stylesheet" href="/style.css">
  <script type="module" src="/index.js"></script>
</head>`
