import { html } from "@rasch/reno"

const style = `
max-width: 40rem;
padding: 1rem;
border-top: 1px dotted;
margin: 3rem auto;
`.replace(/\n/g, "")

export const giscus = () => html`
<div style="${style}">
  <script
    src="https://giscus.app/client.js"
    data-repo="rasch/rasch.co-comments"
    data-repo-id="R_kgDOMZDriQ"
    data-category="Announcements"
    data-category-id="DIC_kwDOMZDric4ChCzn"
    data-mapping="pathname"
    data-strict="1"
    data-reactions-enabled="1"
    data-emit-metadata="0"
    data-input-position="bottom"
    data-theme="transparent_dark"
    data-lang="en"
    data-loading="lazy"
    crossorigin="anonymous"
    async
  >
  </script>
</div>`
