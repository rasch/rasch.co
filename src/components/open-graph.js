import { html } from "@rasch/reno"

/**
 * @param {import("@rasch/reno").Post} data
 */
export const openGraph = ({ title, description, path, _path }) => html`
<meta property="og:title" content="${title || path || _path}">
<meta property="og:description" content="${description}">
<meta property="og:type" content="website">
<meta property="og:url" content="https://www.rasch.co/${path || _path || ""}">
<meta property="og:image" content="https://www.rasch.co/og.jpg">
<meta
  property="og:image:alt"
  content="it&#39;s me in the tub blazin&#39; bubbles with my Donald Duck pipe back in the mid &#39;80s"
>`
