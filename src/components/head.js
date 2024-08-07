import { html } from "@rasch/reno"
import { openGraph } from "./open-graph.js"
import { favicon } from "./favicon.js"

const description = `
Hello! I'm Rand Schneck and it seems that I've forgotten to add a description to
this post. It probably has something to do with programming though.
`.replace(/\n/g, " ").trim()

/**
 * @param {import("@rasch/reno").Post} data
 */
export const head = data => html`
<head>
  <meta charset="utf-8">
  <title>${data.title || data.path}</title>
  <meta name="description" content="${data.description || description}">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  ${openGraph({ description, ...data })}
  ${favicon()}
  <link rel="stylesheet" href="/style.css">
  <link rel="alternate" href="/feed.json" type="application/feed+json" title="Rand Schneck">
  <link rel="alternate" href="/feed.xml" type="application/atom+xml" title="Rand Schneck">
  <script type="module" src="/index.js"></script>
</head>`
