import { css, html } from "@rasch/reno"
import { g } from "./g.js"

/**
 * @param {string} id
 * @param {string} lang
 * @param {boolean} [active]
 */
const button = (id, lang, active) => html`
<li>
  <button type="button" id="${id}-${lang}-btn" class="${active ? "active" : ""}">
    ${lang.toUpperCase()}
  </button>
</li>`

/**
 * @param {string} id
 */
const buttonGroup = id => html`
<ul class="code-sandbox-buttons">
  ${button(id, "html", true)}
  ${button(id, "css")}
  ${button(id, "js")}
</ul>`

/**
 * @param {string} id
 * @param {string} lang
 * @param {string} [content]
 * @param {string} [placeholder]
 * @param {boolean} [active]
 */
const textarea = (id, lang, content = "", placeholder = "", active) => html`
<li class="${lang}-tab">
  <label for="${id}-${lang}-editor" class="sr-only">
    ${lang.toUpperCase()} Editor
  </label>
  <textarea
    id="${id}-${lang}-editor"
    class="${active ? "" : "sr-only"}"
    tabindex="${active ? "0" : "-1"}"
    spellcheck="false"
    placeholder="${placeholder}"
  >${content}</textarea>
</li>
`

/**
 * @param {string} id
 * @param {string} [initHTML]
 * @param {string} [initCSS]
 * @param {string} [initJS]
 */
const codeEditor = (id, initHTML, initCSS, initJS) => html`
<ul class="editor">
  ${textarea(id, "html", initHTML, "HTML Please...", true)}
  ${textarea(id, "css", initCSS, "Gimme that CSS...")}
  ${textarea(id, "js", initJS, "I need JavaScript...")}
</ul>`

const display = () => html`
<div class="display"><iframe src="/iframe-error.html"></iframe></div>`

/**
 * @param {string} id
 */
const tabSelect = id => html`
<script type="module">
;["html", "css", "js"].forEach(lang => {
  const button = document.querySelector(\`#${id}-\${lang}-btn\`)
  const activeTab = document.querySelector(\`#${id} .\${lang}-tab textarea\`)
  button.addEventListener("click", _ => {
    document.querySelectorAll(\`#${id} textarea\`).forEach(textarea => {
      textarea.classList.add("sr-only")
      textarea.setAttribute("tabindex", "-1")
    })
    document.querySelectorAll(\`#${id} button\`).forEach(btn => {
      btn.classList.remove("active")
    })
    activeTab.classList.remove("sr-only")
    activeTab.setAttribute("tabindex", "0")
    button.classList.add("active")
  })
})
</script>`

/**
 * @param {string} id
 * @param {string} [initHTML]
 * @param {string} [initCSS]
 * @param {string} [initJS]
 */
export const codeSandbox = (id, initHTML, initCSS, initJS) => html`
<div id="${id}" class="code-sandbox">
  ${buttonGroup(id)}
  ${codeEditor(id, initHTML, initCSS, initJS)}
  ${display()}
  ${tabSelect(id)}
</div>`

export const codeSandboxCSS = () => css`
.code-sandbox {
  display: flex;
  flex-wrap: wrap;
  gap: ${g / 2}rem;
  padding: ${g / 2}rem ${g / 2}rem ${g}rem;
  background-color: var(--dark-black-opaque);
  border-radius: ${g / 8}rem;
}

#toggle-dark-mode:checked ~ .theme-wrapper .code-sandbox {
  background-color: var(--bright-white);
}

.code-sandbox .display {
  flex-grow: 1;
  width: 320px;
  height: ${g * 10}rem;
  background: white;
  box-shadow: inset 1px 1px 3px var(--dark-black-opaque);
}

.code-sandbox .display iframe {
  width: 100%;
  height: 100%;
  border: none;
  box-shadow: none;
}

.code-sandbox .editor {
  flex-grow: 2;
  width: 320px;
  margin: 0;
}

.code-sandbox .editor li {
  list-style: none;
}

.code-sandbox .editor li textarea {
  appearance: none;
  width: 100%;
  height: ${g * 10}rem;
  border: none;
  margin: 0;
  padding: 0 ${g / 8}rem;
  vertical-align: top; /* fix vertical rhythm */
  resize: none;
  font-family: var(--mono);
  background-color: var(--texture);
  color: inherit;
  box-shadow: inset 1px 1px 3px var(--dark-black-opaque);
  border-radius: ${g / 8}rem;
  white-space: pre;
}

#toggle-dark-mode:checked ~ .theme-wrapper .code-sandbox .editor li textarea {
  background-color: var(--bg);
}

.code-sandbox .code-sandbox-buttons {
  display: flex;
  width: 100%;
  margin: 0;
  gap: ${g / 2}rem;
}

.code-sandbox .code-sandbox-buttons li {
  list-style: none;
}

.code-sandbox .code-sandbox-buttons button {
  margin: 0;
  padding: 0 ${g / 4}rem;
  box-shadow: none;
  cursor: pointer;
}

.code-sandbox .code-sandbox-buttons button:hover {
  box-shadow: none;
}

.code-sandbox .code-sandbox-buttons button.active {
  text-decoration: underline;
}`
