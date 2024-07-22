import { html } from "@rasch/reno"

const style = `
max-width: 40rem;
padding: 3rem 1rem;
border-top: 1px dotted;
margin: 0 auto;
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
    crossorigin="anonymous"
    async
  >
  </script>
</div>
<script>
const checkbox = document.querySelector("#toggle-dark-mode")
const getGiscusTheme = () => checkbox.checked ? "light" : "transparent_dark"
const setGiscusTheme = theme => {
  const iframe = document.querySelector("iframe.giscus-frame")

  iframe
    ? iframe.contentWindow.postMessage(
        { giscus: { setConfig: { theme }}},
        "https://giscus.app"
      )
    : document
        .querySelector('script[src="https://giscus.app/client.js"]')
        .setAttribute("data-theme", theme)
}

setGiscusTheme(getGiscusTheme())
checkbox.addEventListener("change", () => setGiscusTheme(getGiscusTheme()))
</script>`
