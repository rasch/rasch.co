import { html } from "@rasch/reno"

/**
 * @param {import("./data.js").SiteData} data
 */
export const openGraph = ({ title, description, url }) => html`
<meta property="og:title" content="${title}">
<meta property="og:description" content="${description}">
<meta property="og:type" content="website">
<meta property="og:url" content="${url}">
<meta property="og:image" content="${url}/og.jpg">
<meta
  property="og:image:alt"
  content="it&#39;s me in the tub blazin&#39; bubbles with my Donald Duck pipe back in the mid &#39;80s"
>`
